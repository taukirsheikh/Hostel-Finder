# from django.test import TestCase
# from api.models import Hostel

# # Create your tests here.
# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity

# from .serializers import SearchSerializer

# vectorizer = CountVectorizer()
# all_features = []
# for hostel in Hostel.objects.all():
#     features = [hostel.hostel_name,hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
#     features = [str(feature) for feature in features]
#     all_features.append(" ".join(features))
# feature_matrix = vectorizer.fit_transform(all_features)

# @api_view(["POST"])
# def get_recommendations(request):
#     data = request.data
#     input_features = [data['hostel_name'], data['district'], data['place'], data['hostel_type'], data['single_seater'], data['two_seater'], data['three_seater'], data['four_seater']]
#     input_matrix = vectorizer.transform([" ".join(input_features)])
#     similarity = cosine_similarity(input_matrix, feature_matrix)
#     most_similar = similarity.argsort()[:, ::-1]
#     recommended_hostels = Hostel.objects.filter(hostel_id__in=[most_similar[0][i]+1 for i in range(5)])
#     serializer = SearchSerializer(recommended_hostels, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)

# # vectorizer = TfidfVectorizer()
# # all_features = []
# # hostel_names = []
# # for hostel in Hostel.objects.all():
# #     features = [hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
# #     features = [str(feature) for feature in features]
# #     all_features.append(" ".join(features))
# #     hostel_names.append(hostel.hostel_name)
# # feature_matrix = vectorizer.fit_transform(all_features)

# # @api_view(["POST"])
# # def get_recommendations(request):
# #     data = request.data
# #     hostel_name = data['hostel_name']
# #     hostel_index = hostel_names.index(hostel_name)
# #     input_matrix = feature_matrix[hostel_index]
# #     similarity = cosine_similarity(input_matrix, feature_matrix)
# #     most_similar = similarity.argsort()[:, ::-1]
# #     recommended_hostels = Hostel.objects.filter(hostel_id__in=[most_similar[0][i]+1 for i in range(5)])
# #     serializer = SearchSerializer(recommended_hostels, many=True)
# #     return Response(serializer.data, status=status.HTTP_200_OK)




        # input_features = [str(serializer.validated_data['hostel_name']),str(serializer.validated_data['district']), str(serializer.validated_data['place']), str(serializer.validated_data['hostel_type']), str(serializer.validated_data['single_seater']), str(serializer.validated_data['two_seater']), str(serializer.validated_data['three_seater']), str(serializer.validated_data['four_seater']), str(serializer.validated_data['wifi']), str(serializer.validated_data['hot_water']), str(serializer.validated_data['parking']), str(serializer.validated_data['laundry']), str(serializer.validated_data['cctv']), str(serializer.validated_data['fan'])]