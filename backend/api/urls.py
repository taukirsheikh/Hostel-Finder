from django.urls import path
from api.views.userView import UserList, UserDetailByEmail
from api.views.hostelManageView import HostelList
from django.views.generic import RedirectView




urlpatterns = [
    path('favicon.ico', RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)),

     path('api/users/', UserList.as_view(), name='hostelusers-list'),
     path('api/users/<str:email>/', UserDetailByEmail.as_view(), name='manager-detail'),
     path('api/register-hostel/', HostelList.as_view(), name='hostel-list'),
]
