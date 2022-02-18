from django_filters import rest_framework as filters
from .models import TODOList


class TodoFilter(filters.FilterSet):
    create = filters.DateFromToRangeFilter()

    class Meta:
        model = TODOList
        fields = ['project', 'create']