USE bamazon;
drop table if exists departments;

CREATE TABLE departments (
  dep_id INT NOT NULL AUTO_INCREMENT,
  dep_name VARCHAR(25),
  overhead_costs INTEGER(10),
  PRIMARY KEY (dep_id)
);

INSERT INTO departments (dep_name, overhead_costs)
VALUES ('clothing', 200);
INSERT INTO departments (dep_name, overhead_costs)
VALUES ('misc', 100);
INSERT INTO departments (dep_name, overhead_costs)
VALUES ('technology', 50);
INSERT INTO departments (dep_name, overhead_costs)
VALUES ('furniture', 200);