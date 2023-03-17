from django.urls import path
from api.views.userView import UserList, UserDetailByEmail, UpdateAsManager
from api.views.hostelManageView import HostelList, UpdateHostelList, SingleHostelUpdate
from api.views.bookingView import BookingList, BookedHostel, UserBooking, ConfirmBookng
from api.views.searchView import SearchHostel
from api.views.singleHostelView import SingleHostelView
from django.views.generic import RedirectView
from api.views.ratingView import HostelRating, UserRatingAPIView, UserNewRating
from api.views.commentView import ReviewOfUser, UpdateReview, UserReview, ReviewOfHostel

# from api.tests import get_recommendations




urlpatterns = [
    path('favicon.ico', RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)),
     path('api/users/', UserList.as_view(), name='hostelusers-list'),
     path('api/users/<str:email>/', UserDetailByEmail.as_view(), name='manager-detail'),
     path('api/set-manager/<int:pk>/', UpdateAsManager.as_view(), name="setting is manager as true"),
     path('api/register-hostel/', HostelList.as_view(), name='hostel-list'),
     path('api/update-list/<str:identifier>/',UpdateHostelList.as_view(), name="list_of_hostels_registered_by_particular_user"),
     path('api/update-single-hostel/<int:pk>/', SingleHostelUpdate.as_view(), name='single_hostel_update_by_manager'),
    #  bookings
     path('api/bookings/', BookingList.as_view(), name='all bookings'),
     path('api/bookings/<int:hostel_manager>/', BookedHostel.as_view(), name='list of booking in hostel of manager'),
     path('api/booking-status/<int:pk>/', ConfirmBookng.as_view(), name='Booking confirmed by manager'),
     path('api/user-bookings/<str:booker_id>/', UserBooking.as_view(), name='User bookings'),
    #  search
     path("api/search-hostel/", SearchHostel.as_view(), name="search hostel from home page"),
    #  path('api/recommendations/', get_recommendations, name='get_recommendations'),
     path('api/single-hostel/<int:pk>/', SingleHostelView.as_view(), name="view_single_hostel_after_search"),
    #  rate
     path('api/rate-hostel/<int:pk>/', HostelRating.as_view(), name="rate particualr hostel"),
     path('api/user-rating/<int:user_id>/<int:hostel_id>/', UserRatingAPIView.as_view(), name="rate given by user to a particualr hostel"),
     path('api/user-rate/', UserRatingAPIView.as_view(), name="prev rate given by user to a particualr hostel"),
     path('api/new-user-rate/<int:pk>/', UserNewRating.as_view(), name=" New rate given by user to a particualr hostel"),
    #  review
      path('api/user-review/<int:user_id>/<int:hostel_id>/', ReviewOfUser.as_view(), name='review'),
      path('api/new-user-review/', UserReview.as_view(), name='review of new user post'),
      path('api/update-user-review/<int:pk>/', UpdateReview.as_view(), name='review update of user using review id'),
      path('api/hostel-review/<int:hostel_id>', ReviewOfHostel.as_view(), name='review of hostel'),
]
