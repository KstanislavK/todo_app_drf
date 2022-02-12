from rest_framework.serializers import ModelSerializer
from .models import ProjectList, TODOList
from userapp.serizalizers import UserModelSerializer


class ProjectSerializer(ModelSerializer):
    users = UserModelSerializer(many=True)

    class Meta:
        model = ProjectList
        fields = '__all__'


class TODOSerializer(ModelSerializer):

    class Meta:
        model = TODOList
        exclude = ('is_active',)
