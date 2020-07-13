# shalust

## コンテナの起動

### `ビルド`
docker-compose -f docker-compose.yml -f docker-compose.infra.yml build  

### `ネットワークの作成`
docker create network shalust-network  

### `起動`
docker-compose -f docker-compose.yml -f docker-compose.infra.yml up -d  

### `概要`

#### `phpmyadmin`
http://localhost:8000/

#### `api`
http://localhost:8080/

#### `minio`
http://localhost:19000/