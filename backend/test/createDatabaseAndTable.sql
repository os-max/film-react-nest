CREATE DATABASE films
    WITH
    OWNER = student
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE "film" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "rating" integer NOT NULL, "director" character varying NOT NULL, "tags" text array NOT NULL, "image" character varying NOT NULL, "cover" character varying NOT NULL, "about" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_37ec0ffe0011ccbe438a65e3c6e" PRIMARY KEY ("id"))
CREATE TABLE "schedule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "daytime" character varying NOT NULL, "hall" character varying NOT NULL, "rows" integer NOT NULL, "seats" integer NOT NULL, "price" integer NOT NULL, "taken" text array NOT NULL, "filmId" uuid, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))
ALTER TABLE "schedule" ADD CONSTRAINT "FK_7876c96cecc19ed1e6bd2a76d24" FOREIGN KEY ("filmId") REFERENCES "film"("id") ON DELETE NO ACTION ON UPDATE NO ACTION