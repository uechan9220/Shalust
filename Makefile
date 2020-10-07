compose/build:
	docker-compose -f docker-compose.yml -f docker-compose.infra.yml build
	-docker network create shalust-network
up:
	docker-compose -f docker-compose.yml -f docker-compose.infra.yml up -d
	@sleep 10
	-docker-compose exec api bash -c "sql-migrate up"
	

down:
	docker-compose -f docker-compose.yml -f docker-compose.infra.yml down

init/mysql:
	docker-compose exec api bash -c "sql-migrate up"
	

create/sample:
	docker-compose exec api bash -c "go run api/cmd/create_sample.go"