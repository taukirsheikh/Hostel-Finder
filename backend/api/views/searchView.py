# from rest_framework import generics
from scipy.stats import pearsonr
from api.models import Hostel
from api.serializers import SearchSerializer
import pandas as pd
from sklearn.feature_extraction.text  import CountVectorizer, TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from django_pandas.io import read_frame
from sklearn.metrics import jaccard_score


from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
# from sklearn.feature_extraction.text import CountVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
from api.models import Hostel
from api.serializers import SearchSerializer
from sklearn.preprocessing import MultiLabelBinarizer
from django.conf import settings
from asgiref.sync import sync_to_async
from django.utils.decorators import sync_and_async_middleware
import asyncio
# from .feature_matrix import FeatureMatrix
# from api.signals import vectorizer, all_features
    





    #     return feature_matrix

        # self.generate_feature_matrix()
class SearchHostel(generics.ListCreateAPIView):
    queryset = Hostel.objects.all()
    serializer_class = SearchSerializer
    feature_matrix=None
    vectorizer = TfidfVectorizer()
    # all_features = []
    # for hostel in queryset:
    #     features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
    #     features = [str(feature) for feature in features]
    #     all_features.append(" ".join(features))
    # feature_matrix = vectorizer.fit_transform(all_features)
    # print(feature_matrix)
    # def generate_feature_matrix(self):
        # all_features = []
        # for hostel in self.get_queryset():
        #     features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
        #     features = [str(feature) for feature in features]
        #     all_features.append(" ".join(features))
        # feature_matrix = self.vectorizer.fit_transform(all_features)
    
    

    # def generate_feature_matrix(func):
    #     def wrapper( *args, **kwargs):
    #         self=args[0]
    #         all_features = []
    #         queryset = self.filter_queryset(self.get_queryset())
    #         for hostel in queryset:
    #             features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
    #             features = [str(feature) for feature in features]
    #             all_features.append(" ".join(features))
    #         self.feature_matrix = self.vectorizer.fit_transform(all_features)
    #         return func(*args, **kwargs)
    #     return wrapper
         
    # @generate_feature_matrix 
    def create(self, request, *args, **kwargs):
        all_features = []
        for hostel in self.get_queryset():
            features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
            features = [str(feature) for feature in features]
            all_features.append(" ".join(features))
        feature_matrix = self.vectorizer.fit_transform(all_features)
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        input_features = [str(serializer.validated_data['hostel_name']),str(serializer.validated_data['district']), str(serializer.validated_data['place']), str(serializer.validated_data['hostel_type']), str(serializer.validated_data['single_seater']), str(serializer.validated_data['two_seater']), str(serializer.validated_data['three_seater']), str(serializer.validated_data['four_seater'])]
        
        input_matrix = self.vectorizer.transform([" ".join(input_features)])

        weights = {
            'hostel_name': 0.5,
            'district': 0.2,
            'place': 0.4,
            'hostel_type': 0.6,
            'single_seater': 0.05,
            'two_seater': 0.05,
            'three_seater': 0.05,
            'four_seater': 0.05,
            'wifi': 0.1,
            'hot_water': 0.1,
            'parking': 0.05,
            'laundry': 0.05,
            'cctv': 0.05,
            'fan': 0.05,
        }
        
                

        scores = []
        for i, hostel in enumerate(self.get_queryset()):
        
            features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
            features = [str(feature) for feature in features]
            hostel_matrix = self.vectorizer.transform([" ".join(features)])
            similarity_score = cosine_similarity(input_matrix, hostel_matrix)[0][0]
            weighted_score = sum([similarity_score * weights[key] for key in weights])
            scores.append((i, weighted_score))

        

        ranked_hostels = sorted(scores, key=lambda x: x[1], reverse=True)

        # # Get top 10 hostels
        top_hostels = ranked_hostels[:13]

        # Get details of top hostels
        top_hostels_details = []
        for hostel in top_hostels:
            hostel_details = self.queryset[hostel[0]]
            hostel_serializer = self.get_serializer(hostel_details)
            top_hostels_details.append(hostel_serializer.data)


        return Response(top_hostels_details)

    
    
     
 
        



    