
смотри, нужно сделать следующие таблицы postgresql, в базе данных m-gen:
1)Tests
-id (pk)
-title
-description
-laboratory(fk, ref to  labaratory_id)
2)Laboratories:
-id (pk)
-title
-description
-clinic(fk, ref to clinic_id)
3)Clinics:
- id (pk)
  -title
  -description
  4)Medics:
  -id (pk)
  -name
  -age
  -description
  -laboratory(fk, ref to labarotry_id)
  -clinic(fk, ref to clinic_id)
  2)и нужно напиши запросы для заполнения всех таблиц моковыми данными