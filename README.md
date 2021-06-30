## Description
NCDCフロント課題[Markdown Editor]のバックエンドリポジトリ

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
APIのDocumentは、  
アプリを起動後、`http://localhost:3000/api` にてSwaggerで確認できる。  
![](./doc/images/swagger.png)

### Content

#### 一覧取得
```bash
$curl http://localhost:3000/content -X GET
```

#### 取得
```bash
$curl http://localhost:3000/content/:id -X GET
```

#### 新規作成
```bash
$curl http://localhost:3000/content -X POST -d "parentId=1&title=title&body=body"
```

#### 更新
```bash
$curl http://localhost:3000/content/:id -X PUT -d "title=updateTitle&body=updateBody"
```

#### 削除
```bash
$curl http://localhost:3000/content/:id -X DELETE
```


### Content-Tree
#### 取得
```bash
$curl http://localhost:3000/content-tree -X GET
```

### 仕様書
https://docs.google.com/presentation/d/1y6L_mnQIi6zr2qD86M7huFvJN9vl56g10l7YHlu5Kg0/edit#slide=id.ge31ec54b6d_0_10
コンテンツのTree構造の構築をフロントエンド側で実装していただくため、このようなAPIにしている。

## DBを初期状態に戻す
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
