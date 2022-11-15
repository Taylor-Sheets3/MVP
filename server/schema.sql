CREATE DATABASE mvp;

USE mvp;

CREATE TABLE batching (
  id int not null auto_increment,
  product varchar(60),
  date_made DATETIME,
  case_size ENUM('12oz', '500mL', '1L', '2L'),
  units int default 0,
  tank ENUM('tank 1', 'tank 2', 'tank 3', 'tank 4', 'tank 5', 'tank 6'),
  gallons int,
  sanitation ENUM('rinse', '3-step', '5-step'),
  qa TINYINT DEFAULT 0,
  primary key (id)
);

INSERT INTO batching (product, date_made, case_size, units, tank, gallons, sanitation, qa) VALUES ('Cola', '2022-11-14 17:00:00', '12oz', 20, 'tank 1', 1192, 'rinse', 1);
INSERT INTO batching (product, date_made, case_size, units, tank, gallons, sanitation, qa) VALUES ('Dr_type', '2022-11-12 14:00:00', '500mL', 40, 'tank 2', 950, '5-step', 1);
INSERT INTO batching (product, date_made, case_size, units, tank, gallons, sanitation, qa) VALUES ('LLime', '2022-11-11 12:00:00', '2L', 25, 'tank 4', 1203, '3-step', 0);
INSERT INTO batching (product, date_made, case_size, units, tank, gallons, sanitation, qa) VALUES ('Dt_Cola', '2022-11-15 12:30:00', '1L', 20, 'tank 5', 1200, 'rinse', 1);

