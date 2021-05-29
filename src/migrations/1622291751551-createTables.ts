import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1622291751551 implements MigrationInterface {
    name = 'createTables1622291751551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(100), "body" varchar(2000), "order" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "content_tree" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "parentContentId" integer, "chiledContentId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_content_tree" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "parentContentId" integer, "chiledContentId" integer, CONSTRAINT "FK_9f7e3cc04504ed9d15a65ac407e" FOREIGN KEY ("parentContentId") REFERENCES "content" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a5d72c6deb39e8971d3ec0d415b" FOREIGN KEY ("chiledContentId") REFERENCES "content" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_content_tree"("id", "createdAt", "updatedAt", "parentContentId", "chiledContentId") SELECT "id", "createdAt", "updatedAt", "parentContentId", "chiledContentId" FROM "content_tree"`);
        await queryRunner.query(`DROP TABLE "content_tree"`);
        await queryRunner.query(`ALTER TABLE "temporary_content_tree" RENAME TO "content_tree"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_tree" RENAME TO "temporary_content_tree"`);
        await queryRunner.query(`CREATE TABLE "content_tree" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "parentContentId" integer, "chiledContentId" integer)`);
        await queryRunner.query(`INSERT INTO "content_tree"("id", "createdAt", "updatedAt", "parentContentId", "chiledContentId") SELECT "id", "createdAt", "updatedAt", "parentContentId", "chiledContentId" FROM "temporary_content_tree"`);
        await queryRunner.query(`DROP TABLE "temporary_content_tree"`);
        await queryRunner.query(`DROP TABLE "content_tree"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }

}
