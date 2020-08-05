# shalust

## コンテナの起動

### `ビルド`
docker-compose -f docker-compose.yml -f docker-compose.infra.yml build  

### `ネットワークの作成`
docker create network shalust-network  

### `起動`
docker-compose -f docker-compose.yml -f docker-compose.infra.yml up -d  

### `DBのセットアップ`
docker-compose exec api bash -c "sql-migrate up"

#### `サンプルデータの挿入`

docker-compose exec api bash -c "go run api/cmd/create_sample.go"

### `概要`

#### `phpmyadmin`
http://localhost:8000/

#### `api`
http://localhost:8080/

#### `minio`
http://localhost:9000/
