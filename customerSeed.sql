
CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45),
  dep_name VARCHAR(45),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  product_sales INTEGER(10),
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('nike shoes', 20, 'clothing', 40);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('batman toy', 15, 'misc', 35);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('gucci belt', 100, 'clothing', 60);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('bottles of water', 150, 'misc', 100);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('new computer', 50, 'technology', 200);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('new Ipad', 2000, 'technology' ,85);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('mont blanc wallet', 500, 'clothing', 70);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('tables', 1900, 'furniture', 20);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('chairs', 1500, 'furniture', 800);

INSERT INTO products (product_name, price, dep_name, stock_quantity)
VALUES ('carpet', 10000, 'furniture' ,5);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
