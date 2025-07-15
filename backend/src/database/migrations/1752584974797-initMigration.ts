import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1752584974797 implements MigrationInterface {
  name = 'InitMigration1752584974797';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "schedule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "daytime" character varying NOT NULL, "hall" character varying NOT NULL, "rows" integer NOT NULL, "seats" integer NOT NULL, "price" integer NOT NULL, "taken" text array NOT NULL, "filmId" uuid NOT NULL, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "film" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "rating" numeric(2,1) NOT NULL, "director" character varying NOT NULL, "tags" text array NOT NULL, "image" character varying NOT NULL, "cover" character varying NOT NULL, "about" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_37ec0ffe0011ccbe438a65e3c6e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "schedule" ADD CONSTRAINT "FK_7876c96cecc19ed1e6bd2a76d24" FOREIGN KEY ("filmId") REFERENCES "film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "schedule" DROP CONSTRAINT "FK_7876c96cecc19ed1e6bd2a76d24"`,
    );
    await queryRunner.query(`DROP TABLE "film"`);
    await queryRunner.query(`DROP TABLE "schedule"`);
  }
}
