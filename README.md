## Description

NCDC フロント課題[Markdown Editor]のバックエンドリポジトリ
![](./doc/images/overview.gif)

## Installation & exec

```bash
# install
$ yarn install
# build 実行
$ yarn build
# 実行
$ yarn start
```

## API

API の Document は、  
アプリを起動後、`http://localhost:3000/api` にて Swagger で確認できる。  
![](./doc/images/swagger.png)

## DB を初期状態に戻す

```bash
$ cp ./data/bk-dev.sqlite ./data/dev.sqlite
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## migration

### migration:generate

```bash
$ yarn migration:generate -n createTables
```

### migration:run

```bash
$ yarn migration:run
```
