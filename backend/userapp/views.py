from rest_framework.viewsets import ModelViewSet
from .models import User
from .serizalizers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = User.objects.all()
