from rest_framework import generics
from api.models import Hostel
from api.serializers import HostelSerializer

class HostelList(generics.ListCreateAPIView):
    queryset=Hostel.objects.all()
    serializer_class=HostelSerializer
    # lookup_field='hostel_id'
   