import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTestData1752585285273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('0e33c7f6-27a7-4aa0-8e61-65d7e5effecf', '2.9', 'Итан Райт', ARRAY ['Документальный'], '/bg1s.jpg', '/bg1c.jpg', 'Архитекторы общества', 'Документальный фильм, исследующий влияние искусственного интеллекта на общество и этические, философские и социальные последствия технологии.', 'Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.');
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('51b4bc85-646d-47fc-b988-3e7051a9fe9e', '9', 'Харрисон Рид', ARRAY ['Рекомендуемые'], '/bg3s.jpg', '/bg3c.jpg', 'Недостижимая утопия', 'Провокационный фильм-антиутопия, исследующий темы свободы, контроля и цены совершенства.', 'Провокационный фильм-антиутопия режиссера Харрисона Рида. Действие фильма разворачивается в, казалось бы, идеальном обществе, и рассказывает о группе граждан, которые начинают подвергать сомнению систему. Фильм исследует темы свободы, контроля и цены совершенства.');
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('3bedbc5a-844b-40eb-9d77-83b104e0cf75', '8.5', 'Элиза Уиттакер', ARRAY ['Рекомендуемые'], '/bg5s.jpg', '/bg5c.jpg', 'Звёздное путешествие', 'Научно-фантастический фильм о команде астронавтов, исследующий темы жизнестойкости, надежды и силы человеческих связей', '«Звёздное путешествие» — прекрасный научно-фантастический фильм о команде астронавтов, путешествующих по галактике в поисках нового дома для человечества. Помимо потрясающей работы оператора и специалистов по визуальным эффектам, можно отметить темы, исследуемые в фильме: жизнестойкости, надежды и силы человеческих связей.');
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('5b70cb1a-61c9-47b1-b207-31f9e89087ff', '8.9', 'Лила Васкес', ARRAY ['Рекомендуемые'], '/bg2s.jpg', '/bg2c.jpg', 'Стражи Гримуара', 'Фэнтезийное приключение об истинном значении дружбы, мужества и силы знаний', 'Захватывающее фэнтезийное приключение, которое рассказывает о группе героев, которые должны защитить древний магический том от попадания в руки тёмного колдуна. История об истинном значении дружбы, мужества и силы знаний.');
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('0354a762-8928-427f-81d7-1656f717f39c', '9.5', 'Оливер Беннет', ARRAY ['Рекомендуемые'], '/bg4s.jpg', '/bg4c.jpg', 'Парадокс Нексуса', 'Фильм об эксперименте по соединению человеческих умов. Исследует вопросы неприкосновенности частной жизни, идентичности и самой природы человеческого сознания', 'В фильме исследуются последствия новаторского эксперимента по соединению человеческих умов. По мере развития проекта участники сталкиваются с вопросами неприкосновенности частной жизни, идентичности и самой природы человеческого сознания.');
            INSERT INTO "film" ("id", "rating", "director", "tags", "image", "cover", "title", "about", "description") VALUES ('92b8a2a7-ab6b-4fa9-915b-d27945865e39', '8.1', 'Амелия Хьюз', ARRAY ['Рекомендуемые'], '/bg6s.jpg', '/bg6c.jpg', 'Сон в летний день', 'Фэнтези-фильм о группе друзей попавших в волшебный лес, где время остановилось.', 'Причудливый фэнтези-фильм, действие которого происходит в волшебном лесу, где время остановилось. Группа друзей натыкается на это заколдованное царство и поначалу проникается беззаботным духом обитателей, но потом друзьям приходится разойтись. А как встретиться снова, если нет ни времени, ни места встречи?');            
        `);

    await queryRunner.query(`
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '5beec101-acbb-4158-adc6-d855716b44a8', '2024-06-28T10:00:53+03:00', 0, 5, 10, 350, ARRAY ['1:2'], '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '89ee32f3-8164-40a6-b237-f4d492450250', '2024-06-28T12:00:53+03:00', 1, 5, 10, 350, array[]::text[], '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( 'd6a4ed9b-51d6-4df2-b66e-d75175deb373', '2024-06-28T15:00:53+03:00', 2, 5, 10, 350, array[]::text[], '0e33c7f6-27a7-4aa0-8e61-65d7e5effecf');

            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '9647fcf2-d0fa-4e69-ad90-2b23cff15449', '2024-06-25T10:00:53+03:00', 0, 5, 10, 250, ARRAY ['1:2'], '51b4bc85-646d-47fc-b988-3e7051a9fe9e');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '9f2db237-01d0-463e-a150-89f30bfc4250', '2024-06-26T14:00:53+03:00', 1, 5, 10, 250, array[]::text[], '51b4bc85-646d-47fc-b988-3e7051a9fe9e');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '3d5f5d12-b4d8-44d3-a440-1b91616fda40', '2024-06-27T16:00:53+03:00', 3, 5, 10, 250, ARRAY ['2:2'], '51b4bc85-646d-47fc-b988-3e7051a9fe9e');

            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '351b437c-3430-4a35-b71d-b93b3d80274a', '2024-06-28T10:00:53+03:00', 0, 5, 10, 250, ARRAY ['1:2', '3:4'], '3bedbc5a-844b-40eb-9d77-83b104e0cf75');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '2661b7e2-7654-4d17-aa5d-9da76e4fb563', '2024-06-27T12:00:53+03:00', 2, 5, 10, 100, array[]::text[], '3bedbc5a-844b-40eb-9d77-83b104e0cf75');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( 'd155ff3f-d547-4e4d-a530-bfcdcb3efbd5', '2024-06-27T14:00:53+03:00', 3, 5, 10, 150, array[]::text[], '3bedbc5a-844b-40eb-9d77-83b104e0cf75');

            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '793009d6-030c-4dd4-8d13-9ba500724b38', '2024-06-28T10:00:53+03:00', 5, 5, 10, 350, array[]::text[], '5b70cb1a-61c9-47b1-b207-31f9e89087ff');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '27a6c145-d5bf-4722-8bd9-b58c5b6b718f', '2024-06-28T15:00:53+03:00', 4, 5, 10, 350, ARRAY ['4:2'], '5b70cb1a-61c9-47b1-b207-31f9e89087ff');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '1f57131e-eb9c-41a2-b451-89ea7f691fb7', '2024-06-28T20:00:53+03:00', 3, 5, 10, 350, array[]::text[], '5b70cb1a-61c9-47b1-b207-31f9e89087ff');

            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '2d794723-eadc-43ea-b82b-268f0178fb43', '2024-06-28T10:00:53+03:00', 0, 5, 10, 350, ARRAY ['1:2'], '0354a762-8928-427f-81d7-1656f717f39c');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '043eb8fb-454a-40d2-9ce9-6fe80072bf8b', '2024-06-28T14:00:53+03:00', 4, 5, 10, 350, array[]::text[], '0354a762-8928-427f-81d7-1656f717f39c');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( 'aa366df5-f035-43ec-8088-87e042110f3d', '2024-06-28T18:00:53+03:00', 4, 5, 10, 350, array[]::text[], '0354a762-8928-427f-81d7-1656f717f39c');

            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '5274c89d-f39c-40f9-bea8-f22a22a50c8a', '2024-06-28T10:00:53+03:00', 0, 5, 10, 350, ARRAY ['1:2'], '92b8a2a7-ab6b-4fa9-915b-d27945865e39');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '3f7ed030-230c-4b06-bfc7-eeaee7f3f79b', '2024-06-28T14:00:53+03:00', 2, 5, 10, 350, array[]::text[], '92b8a2a7-ab6b-4fa9-915b-d27945865e39');
            INSERT INTO schedule ( id, daytime, hall, rows, seats, price, taken, "filmId") VALUES ( '87b49000-5481-49d1-b481-b4f416f3e9bb', '2024-06-28T18:00:53+03:00', 3, 5, 10, 350, array[]::text[], '92b8a2a7-ab6b-4fa9-915b-d27945865e39');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM schedule WHERE true');
    await queryRunner.query('DELETE FROM film WHERE true');
  }
}
