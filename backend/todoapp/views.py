from rest_framework.viewsets import ModelViewSet

from .models import TODOList, ProjectList
from .serializers import ProjectSerializer, TODOSerializer


class ProjectViewSet(ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = ProjectList.objects.all()


class TODOViewSet(ModelViewSet):
    serializer_class = TODOSerializer
    queryset = TODOList.objects.all()
