from rest_framework import generics
from api.models import Hostel
from api.serializers import SearchSerializer
from django.db.models import Q
import pandas as pd
from sklearn.feature_extraction.text  import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from django_pandas.io import read_frame


class SearchHostel(generics.ListAPIView):
    queryset=Hostel.objects.all()
    # print(queryset)
    serializer_class=SearchSerializer
    data=Hostel.objects.all()
    df=read_frame(data)
    print(df)
    
    # def get_queryset(self):
    #     queryset = super().get_queryset()
    
    #     hostel_name = self.request.query_params.get('hostel_name', None)
    #     hostel_type = self.request.query_params.get('hostel_type', None)
    #     district = self.request.query_params.get('district', None)
    #     place = self.request.query_params.get('place', None)
    #     single_seater = self.request.query_params.get('single_seater', None)
    #     two_seater = self.request.query_params.get('two_seater', None)
    #     three_seater = self.request.query_params.get('three_seater', None)
    #     four_seater = self.request.query_params.get('four_seater', None)
    #     wifi = self.request.query_params.get('wifi', None)
    #     closet = self.request.query_params.get('closet', None)
    #     hot_water = self.request.query_params.get('hot_water', None)
    #     laundry = self.request.query_params.get('laundry', None)
    #     parking = self.request.query_params.get('parking', None)
    #     cctv = self.request.query_params.get('cctv', None)
    #     fan = self.request.query_params.get('fan', None)
    #     balcony = self.request.query_params.get('balcony', None)

        
    #     # -------------------------------------


    #     return queryset