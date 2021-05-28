## Description
NCDCフロント課題[Markdown Editor]のバックエンドリポジトリ

## Installation

```bash
$ yarn install
# migrate実行
$ yarn migrate
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

## createmigrations & migration
```bash
$ yarn setup
```


## API
### Content

#### 一覧取得（廃止予定）
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

### 更新
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

## License

Nest is [MIT licensed](LICENSE).
