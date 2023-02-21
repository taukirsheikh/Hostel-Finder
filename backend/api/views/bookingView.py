from api.models import Booking
from api.serializers import BookingSerializer, ManagerBookingSerializer
from rest_framework import generics

class BookingList(generics.ListCreateAPIView):
    queryset=Booking.objects.all()
    serializer_class=BookingSerializer

class BookedHostel(generics.ListAPIView):
    queryset=Booking.objects.all()
    serializer_class=ManagerBookingSerializer
    def get_queryset(self):
        hostel_manager_id = self.kwargs['hostel_manager']
        return self.queryset.filter(hostel_manager=hostel_manager_id)
    # def get_queryset(self):
    #     return self.queryset.filter(hostel_manager=self.kwargs['hostel_manager_id'])
   