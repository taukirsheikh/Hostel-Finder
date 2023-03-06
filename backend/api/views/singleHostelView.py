from api.models import Hostel
from rest_framework import generics
from api.serializers import SingleHostelSerializer




class SingleHostelView(generics.RetrieveAPIView):
    queryset=Hostel.objects.all()
    serializer_class=SingleHostelSerializer
    
