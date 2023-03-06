from django.urls import path
from api.views.userView import UserList, UserDetailByEmail
from api.views.hostelManageView import HostelList, UpdateHostelList, SingleHostelUpdate
from api.views.bookingView import BookingList, BookedHostel
from api.views.searchView import SearchHostel
from api.views.singleHostelView import SingleHostelView
from django.views.generic import RedirectView

from api.tests import get_recommendations




urlpatterns = [
    path('favicon.ico', RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)),
     path('api/users/', UserList.as_view(), name='hostelusers-list'),
     path('api/users/<str:email>/', UserDetailByEmail.as_view(), name='manager-detail'),
     path('api/register-hostel/', HostelList.as_view(), name='hostel-list'),
     path('api/update-list/<str:identifier>/',UpdateHostelList.as_view(), name="list_of_hostels_registered_by_particular_user"),
     path('api/update-single-hostel/<int:pk>/', SingleHostelUpdate.as_view(), name='single_hostel_update_by_manager'),
     path('api/bookings/', BookingList.as_view(), name='all bookings'),
     path('api/bookings/<int:hostel_manager>/', BookedHostel.as_view(), name='list of booking in hostel of manager'),
     path("api/search-hostel/", SearchHostel.as_view(), name="search hostel from home page"),
     path('api/recommendations/', get_recommendations, name='get_recommendations'),
     path('api/single-hostel/<int:pk>/', SingleHostelView.as_view(), name="view_single_hostel_after_search")
]
