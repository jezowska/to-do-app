from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
# Create your views here.


@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all().order_by('completed')
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createTask(request):
    data = request.data
    task = Task.objects.create(body=data['body'])
    serializer = TaskSerializer(task)

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteTask(request, pk):
    task = Task.objects.get(pk=pk)
    task.delete()

    return Response('Task was deleted')


@api_view(['PUT'])
def updateTask(request, pk):
    data = request.data
    task = Task.objects.get(pk=pk)
    serializer = TaskSerializer(instance=task, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
