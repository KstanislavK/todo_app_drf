import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType

from todoapp.models import ProjectList, TODOList
from userapp.models import User


class ProjectsType(DjangoObjectType):
    class Meta:
        model = ProjectList
        fields = '__all__'


class TodosType(DjangoObjectType):
    class Meta:
        model = TODOList
        fields = '__all__'


class UsersType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(ObjectType):
    # вывод всех проектов
    projects = graphene.List(ProjectsType)

    def resolve_projects(root,info):
        return ProjectList.objects.all()

    # вывод всех Тодо
    todos = graphene.List(ProjectsType)

    def resolve_todos(root, info):
        return TODOList.objects.all()


    # вывод TODOшек по конкретному проекту
    todos_by_project = graphene.List(TodosType, name=graphene.String(required=False))

    def resolve_todos_by_project(root, info, name=None):
        todos = TODOList.objects.all()
        if name:
            todos = todos.filter(project__name=name)

        return todos

    # вывод todos, где автор определенный пользователь
    todos_by_user = graphene.List(ProjectsType, name=graphene.String(required=False))

    def resolve_todos_by_user(root, info, name=None):
        todos = TODOList.objects.all()
        if name:
            todos = todos.filter(project__name=name)

        return todos


    # мутация для создания юзера
class UserCreateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        first_name = graphene.String()
        last_name = graphene.String()
        email = graphene.String()

    user = graphene.Field(UsersType)

    @classmethod
    def mutate(cls, root, info, username, first_name, last_name, email):
        user = User(username=username, first_name=first_name, last_name=last_name, email=email)
        user.save()
        return UserCreateMutation(user=user)


    # мутация для удаления юзера
class UserDeleteMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    user = graphene.Field(UsersType)

    @classmethod
    def mutate(cls, root, info, id):
        User.objects.get(id=id).delete()
        return UserDeleteMutation(user=None)


class Mutations(ObjectType):
    create_user = UserCreateMutation.Field()
    delete_user = UserDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
