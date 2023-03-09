from rest_framework import generics
from api.models import Hostel,User
from api.serializers import HostelSerializer,UpdateHostelListSeriliazer, SingleHostelUpdateSeriliazer
from sklearn.feature_extraction.text import TfidfVectorizer
from django.conf import settings
from rest_framework.response import Response

#hostel register
class HostelList(generics.ListCreateAPIView):
    queryset=Hostel.objects.all()
    serializer_class=HostelSerializer
  
    # vectorizer = TfidfVectorizer()
    # feature_matrix = None
    
    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
        
    #     # Save the new hostel object
    #     self.perform_create(serializer)
        
    #     # Update the feature matrix
    #     all_features = []
    #     for hostel in Hostel.objects.all():
    #         features = [hostel.hostel_name, hostel.district, hostel.place, hostel.hostel_type, hostel.single_seater, hostel.two_seater, hostel.three_seater, hostel.four_seater, hostel.wifi, hostel.hot_water, hostel.parking, hostel.laundry, hostel.cctv, hostel.fan]
    #         features = [str(feature) for feature in features]
    #         all_features.append(" ".join(features))
    #     self.feature_matrix = self.vectorizer.fit_transform(all_features)
    #     print(self.feature_matrix)
        
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data)
    

        

    
   

class UpdateHostelList(generics.ListAPIView):
     queryset=Hostel.objects.all()
     serializer_class=UpdateHostelListSeriliazer
     def get_queryset(self):
        identifier = self.kwargs.get('identifier', None)
        if identifier:
            if identifier.isdigit():
                user = User.objects.get(pk=identifier)
            else:
                user = User.objects.get(email=identifier)
            return user.hostel.all() #related name used here
        return Hostel.objects.all()
     
class SingleHostelUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset=Hostel.objects.all()
    serializer_class=SingleHostelUpdateSeriliazer
    # lookup_field='hostel_id'
