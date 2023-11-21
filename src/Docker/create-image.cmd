docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kk/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kk/app ../..
