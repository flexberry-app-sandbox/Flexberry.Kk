docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kk-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kk-java/app ../../..
