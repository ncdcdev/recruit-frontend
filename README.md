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

## migration
```bash
# src/entitiesに従い、migrationファイル作成
$ yarn createmigrations
# migrate実行
$ yarn migrate
```


## API
### Content

#### 一覧取得（廃止予定）
```bash
$curl http://localhost:3000/content -X GET -d
```

#### 取得
```bash
$curl http://localhost:3000/content/:id -X GET -d
```

#### 新規作成
```bash
$curl http://localhost:3000/content -X POST -d "title=title&body=body"
```

## License

Nest is [MIT licensed](LICENSE).
