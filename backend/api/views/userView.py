from rest_framework import generics, status
from api.models import User
from api.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import exceptions




    

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self, request, *args, **kwargs):
        # serializer = self.get_serializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        email=request.data.get('email')
        if email:
            user=User.objects.filter(email=email).first()
            if user:
                serializer=self.get_serializer(user)
                return Response(serializer.data)
        return super().create(request,*args,**kwargs)

        

class UserDetailByEmail(generics.RetrieveAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    lookup_field='email'   


class UpdateAsManager(generics.RetrieveUpdateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer