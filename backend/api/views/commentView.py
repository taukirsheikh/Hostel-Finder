from rest_framework import generics



from django.views.generic import View
from django.http import JsonResponse
from api.models import Review
from api.serializers import ReviewSerializer, ReviewOnHostelSerializer

class ReviewOfUser(View):
    def get(self, request, *args, **kwargs):
        user_id = kwargs.get('user_id')
        hostel_id = kwargs.get('hostel_id')
        try:
            review = Review.objects.get(user_id=user_id, hostel_id=hostel_id)
        except Review.DoesNotExist:
            return JsonResponse({'review_id': False,'review':"write a review"})
        response_data = {
            'review_id': review.review_id,
            'review': review.review
        }
        return JsonResponse(response_data)

class UserReview(generics.ListCreateAPIView):
    queryset=Review.objects.all()
    serializer_class=ReviewSerializer

class UpdateReview(generics.RetrieveUpdateAPIView):
    queryset=Review.objects.all()
    serializer_class=ReviewSerializer
    


class ReviewOfHostel(generics.ListAPIView):
    serializer_class = ReviewOnHostelSerializer
    
    def get_queryset(self):
        hostel_id = self.kwargs['hostel_id']
        queryset = Review.objects.filter(hostel_id=hostel_id)
        return queryset


# class ReviewOfUser(generics.ListCreateAPIView):
#     queryset=UserRating.objects.all()
#     serializer_class = UserRatingSerializer
    
#     def create(self, request, *args, **kwargs):
#         user_id = request.data.get('user_id')
#         hostel_id = request.data.get('hostel_id')
        
#         if user_id is not None and hostel_id is not None:
#             existing_rating = self.queryset.filter(user_id=user_id, hostel_id=hostel_id).first()
#             if existing_rating:
#                 serializer = self.get_serializer(existing_rating)
#                 return Response(serializer.data)
        
#         return super().create(request, *args, **kwargs)