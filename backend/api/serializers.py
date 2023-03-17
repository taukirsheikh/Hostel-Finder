from rest_framework import serializers
from api.models import User, Hostel, Booking, UserRating, Review
from rest_framework import exceptions
import cloudinary.uploader


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class HostelSerializer(serializers.ModelSerializer):
    image_1 = serializers.ImageField(use_url=True, required=False, allow_null=True)
    image_2 = serializers.ImageField(use_url=True, required=False,allow_null=True)
    image_3 = serializers.ImageField(use_url=True, required=False,allow_null=True)
    class Meta:
        model=Hostel
        fields='__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['image_1'] = instance.image_1
        # representation['image_2_url'] = instance.image_2
        representation['image_2'] = instance.image_2
        representation['image_3'] = instance.image_2
        return representation

    def create(self, validated_data):
        image_1 = validated_data.get('image_1',None)
        image_2 = validated_data.get('image_2', None)
        image_3 = validated_data.get('image_3', None)
        if image_1:

            uploaded_image_1 = cloudinary.uploader.upload(image_1)
        
            validated_data['image_1'] = uploaded_image_1['secure_url']
        if image_2:
            uploaded_image_2 = cloudinary.uploader.upload(image_2)

            validated_data['image_2'] = uploaded_image_2['secure_url']
        if image_3:
            uploaded_image_3 = cloudinary.uploader.upload(image_3)

            validated_data['image_3'] = uploaded_image_3['secure_url']

        return Hostel.objects.create(**validated_data)
    

class UpdateHostelListSeriliazer(serializers.ModelSerializer):
    class CustomHostelManagerSerializer(serializers.ModelSerializer):
        class Meta:
            model=Hostel
            fields=['user_id','email']
    manager_id=CustomHostelManagerSerializer
    class Meta:
        model=Hostel
        fields=['manager_id','hostel_id',"hostel_name"]
        

class SingleHostelUpdateSeriliazer(serializers.ModelSerializer):
    image_1=serializers.ImageField(use_url=True, required=False)
    image_2=serializers.ImageField(use_url=True, required=False)
    image_3=serializers.ImageField(use_url=True, required=False)
    
    class Meta:
        model=Hostel
        fields='__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['image_1'] = instance.image_1
        representation['image_2'] = instance.image_2
        representation['image_3'] = instance.image_3
        return representation
    
    def update(self, instance, validated_data):
        image_1 = validated_data.get('image_1',None)
        image_2 = validated_data.get('image_2',None)
        image_3 = validated_data.get('image_3',None)
        if image_1:
            uploaded_image_1 = cloudinary.uploader.upload(image_1)
            validated_data['image_1'] = uploaded_image_1['secure_url']
        if image_2:
            uploaded_image_2 = cloudinary.uploader.upload(image_2)
            validated_data['image_2'] = uploaded_image_2['secure_url']
        if image_3:
            uploaded_image_3 = cloudinary.uploader.upload(image_3)
            validated_data['image_3'] = uploaded_image_3['secure_url']
        instance = super().update(instance, validated_data)
        return instance

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields="__all__"

class ManagerBookingSerializer(serializers.ModelSerializer):
    
    hostel = serializers.CharField(source='hostel.hostel_name')
 
    class Meta:
        model = Booking
        fields = ['hostel_manager','booking_id', 'hostel', 'booker_id',  'booker_name','seater', 'contact', 'booking_date','booking_status']

class UserBookingSerializer(serializers.ModelSerializer):
    
    # hostel = serializers.CharField(source='hostel.hostel_name')
    class CustomHostelBook(serializers.ModelSerializer):
        class Meta:
            model=Hostel
            fields=['manager_name','manager_contact','hostel_name']

    hostel=CustomHostelBook()

    

    class Meta:
        model = Booking
        fields = "__all__"

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hostel
        fields='__all__'
        read_only_fields=('manager_id','pan_no','manager_name', 'manager_contact','admission_fee', 'description', 'image_1', 'image_2', 'image_3','balcony', 'map_link')


class SingleHostelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hostel
        fields="__all__"




# ----------Rating-searilizers-----------------------

class HostelRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hostel
        fields=['hostel_id','rating']

class UserRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRating
        fields="__all__"



class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields="__all__"


class ReviewOnHostelSerializer(serializers.ModelSerializer):
    # user_id = serializers.CharField(source='user_id.name')
    class CustomUserSerializer(serializers.ModelSerializer):
        class Meta:
            model=User
            fields=['name','picture']
    user_id=CustomUserSerializer()

    class Meta:
        model=Review
        fields="__all__"