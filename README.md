# shalust

## コンテナの起動準備

cp docker-compose.sample.yml docker-compose.yml

cp docker-compose.infra.sample.yml docker-compose.infra.yml

### `コンテナ関係のセットアップ（初回のみ）`

make compose/build

### `起動`
make up

### `停止`
make down

#### `起動してもdbが空だった場合(基本的にupで解決します)`
make init/mysql 




### `概要`

#### `phpmyadmin`
http://localhost:8000/

#### `api`
http://localhost:8080/

#### `minio`
http://localhost:9000/
