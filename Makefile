IMAGE_NAME = oilyquack
PORT = 4000

# Check if the Docker image exists
DOCKER_IMAGE_EXISTS := $(shell docker image inspect $(IMAGE_NAME) 2> /dev/null)

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run: build
	docker rm -f $(CONTAINER_NAME) || true
	docker run -p ${PORT}:${PORT} --name $(IMAGE_NAME)-container -it $(IMAGE_NAME)

# Clean up Docker artifacts
clean:
	docker stop $(IMAGE_NAME)-container || true
	docker rm $(IMAGE_NAME)-container || true
	docker rmi $(IMAGE_NAME) || true

# Default target
default: build
