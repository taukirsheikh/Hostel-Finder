from api.models import Hostel, UserRating
from rest_framework.response import Response
from rest_framework import generics, status
from api.serializers import HostelRatingSerializer, UserRatingSerializer
from django.shortcuts import get_object_or_404
from django.http import Http404


class HostelRating(generics.RetrieveUpdateAPIView):
    queryset=Hostel.objects.all()
    serializer_class=HostelRatingSerializer


class UserRatingAPIView(generics.ListCreateAPIView):
    queryset=UserRating.objects.all()
    serializer_class = UserRatingSerializer
    
    def create(self, request, *args, **kwargs):
        user_id = request.data.get('user_id')
        hostel_id = request.data.get('hostel_id')
        
        if user_id is not None and hostel_id is not None:
            existing_rating = self.queryset.filter(user_id=user_id, hostel_id=hostel_id).first()
            if existing_rating:
                serializer = self.get_serializer(existing_rating)
                return Response(serializer.data)
        
        return super().create(request, *args, **kwargs)


class UserNewRating(generics.RetrieveUpdateAPIView):
    queryset=UserRating.objects.all()
    serializer_class=UserRatingSerializer

    # --------------------------------------
    # def create(self, request, *args, **kwargs):
    #     user_id=request.data.get()
    #     hostel_id=request.data.get()
    #     if user_id and hostel_id:
    #         if UserRating.objects.filter(user_id=user_id, hostel_id=hostel_id).exists():
    #         # rating=UserRating.objects.filter()
    #             queryset = queryset.filter(user_id=user_id, hostel_id=hostel_id).first()
    #             if queryset:
    #                  serializer=self.get_serializer(queryset)
    #                  return Response(serializer.data)
    #     return super().create(request, *args, **kwargs)
    # def get_queryset(self):
    #     queryset = UserRating.objects.filter(
    #         user_id=self.kwargs['user_id'], 
    #         hostel_id=self.kwargs['hostel_id']
    #     )
    #     return queryset
# -------------------------------------------------------------------
    # def create(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()

    #     if queryset.exists():
    #         serializer = self.get_serializer(queryset.first())
    #         return Response(serializer.data)

    #     # If instance doesn't exist, create a new one with default values
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save(user_id=self.kwargs['user_id'], hostel_id=self.kwargs['hostel_id'])
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# -----------------------------------------------------------------------------------------



#     from rest_framework import generics, status
# from rest_framework.response import Response
# from .models import UserRating
# from .serializers import UserRatingSerializer


# class UserRatingListCreateAPIView(generics.ListCreateAPIView):
#     serializer_class = UserRatingSerializer
    
#     def get_queryset(self):
#         queryset = UserRating.objects.all()
#         user_id = self.request.query_params.get('user_id')
#         hostel_id = self.request.query_params.get('hostel_id')
#         if user_id is not None and hostel_id is not None:
#             queryset = queryset.filter(user_id=user_id, hostel_id=hostel_id)
#         return queryset
    
#     def post(self, request, *args, **kwargs):
#         user_id = request.data.get('user_id')
#         hostel_id = request.data.get('hostel_id')
#         if user_id is None or hostel_id is None:
#             return Response({'error': 'user_id and hostel_id are required'}, status=status.HTTP_400_BAD_REQUEST)
#         existing_ratings = UserRating.objects.filter(user_id=user_id, hostel_id=hostel_id)
#         if existing_ratings.exists():
#             serializer = self.get_serializer(existing_ratings, many=True)
#             return Response(serializer.data)
#         else:
#             data = {'user_id': user_id, 'hostel_id': hostel_id}
#             serializer = self.get_serializer(data=data)
#             serializer.is_valid(raise_exception=True)
            # serializer.save()
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
# class UserRatingAPIView(generics.ListCreateAPIView):
#     queryset = UserRating.objects.all()
#     serializer_class = UserRatingSerializer

#     def get_object(self):
#         queryset = self.filter_queryset(self.get_queryset())
#         user_id = self.kwargs.get('user_id')
#         hostel_id = self.kwargs.get('hostel_id')
#         obj = get_object_or_404(queryset, user_id=user_id, hostel_id=hostel_id)
#         return obj

#     def get(self, request, *args, **kwargs):
#         try:
#             instance = self.get_object()
#             serializer = self.get_serializer(instance)
#             return Response(serializer.data)
#         except Http404:
#             return self.create(request, *args, **kwargs)

#     def perform_create(self, serializer):
#         serializer.save(user_id=self.kwargs['user_id'], hostel_id=self.kwargs['hostel_id'])


# class UserRatingView(generics.ListCreateAPIView):
#     queryset = UserRating.objects.all()
#     serializer_class = UserRatingSerializer

#     def get_object(self):
#         try:
#             return UserRating.objects.get(user_id=self.kwargs['user_id'], hostel_id=self.kwargs['hostel_id'])
#         except UserRating.DoesNotExist:
#             return None

#     def list(self, request, *args, **kwargs):
#         obj = self.get_object()
#         if obj:
#             serializer = self.get_serializer(obj)
#             return Response(serializer.data)
#         else:
#             return self.create(request, *args, **kwargs)

#     def perform_create(self, serializer):
#         serializer.save(user_id=self.kwargs['user_id'], hostel_id=self.kwargs['hostel_id'])
     