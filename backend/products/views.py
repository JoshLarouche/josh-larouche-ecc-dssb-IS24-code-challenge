from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Product
from .serializers import *
import uuid

@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        data = Product.objects.all()

        serializer = ProductSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(id=uuid.uuid4())
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def products_detail(request, id):
    print(f"Received product ID: {id}")
    try:
        # Convert the string `id` to a UUID
        product_id = uuid.UUID(id)
        product = Product.objects.get(id=product_id)
    except (Product.DoesNotExist, ValueError):
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)