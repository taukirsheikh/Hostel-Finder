from rest_framework import generics
from api.models import User
from api.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import exceptions



            # return Response({"message": "The user already exist", "data": serializer.data})
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailByEmail(generics.RetrieveAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    lookup_field='email'   