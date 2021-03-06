# Docker DevOps

## To Build

``` docker build -t node-app-image . ```

For production, change the npm run dev to npm run start

## To Run

```docker run --name node-app -d -p 3000:3000 node-app-image```

or

```-v /app/node_modules```

Make sure that if source node_modules does not exist, it will not delete the node_modules in the image.

:ro ensure that local directory cannot be change from the containter

```docker run --name node-app -d -p 3000:3000 -v /app/node_modules -v $(pwd):/app:ro node-app-image```

<!-- To access bash shell of the container -->
``` docker exec -it node-app bash ```

To change the default port using environment variable, we us ```-e``` or ```--env`` flag. Can have multple -e

```docker run --name node-app -d -e PORT=4000 -p 3000:4000 -v /app/node_modules -v $(pwd):/app:ro node-app-image```

Or you can create a file to store the environment variable, eg .env

PORT=4000

and the run:

```--env-file ./.env```

### To delete container

```docker rm <container-name> -f```

### To look at logs

```docker logs <container-name>```

### To list volume

```docker volume ls```

### Docker Compose

You can also build using ```docker-compose up -d --build```.

The ```-build``` makes sure that everytime you run ```docker-compose``` it will rebuild the image.
It will read the ```Dockerfile``` when doing this.

## New Docker-compose file

* ```docker-compose.yaml``` - shared docker compose file
* ```docker-compose-dev.yaml``` - used for development
* ```docker-compose-prod.yaml``` - used for production

You can also change port etc in the dev and prod file to overwrite the port in ```docker-compose.yaml``` file

### To run

#### Development

```docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d --build```

#### Production

```docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml up -d --build```

#### To stop

```docker-compose down -v```

#### Mongo DB

Instead of using local directory, you can also use volume like ```mongo-db:/data/db``` where ```mongo-db``` is the volume name. Also add the following:

```volumes:
  - mongo-db
```
