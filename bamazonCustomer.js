var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon'
})

let displayItems = () => {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        res.forEach((item) => {
            console.log("item ID: " +item.item_id + " || " + item.product_name+ " price: "+ item.price)
        });
        inquirer
            .prompt([
                {
                    name: "itemId",
                    type: "input",
                    message: "Input the item ID of the item you would like to buy"
                },
                {
                    name: "unitNumber",
                    type: "input",
                    message: "how many units would you like to buy?"
                }
            ])
            .then(function (answer) {

                if (res[answer.itemId - 1].stock_quantity < answer.unitNumber) {
                    console.log(`We dont have enough of that item: ${res[answer.itemId - 1].product_name}`)
                    connection.end()
                } else {
                    let left = res[answer.itemId - 1].stock_quantity - answer.unitNumber
                    let price = res[answer.itemId - 1].price * answer.unitNumber
                    let pSales = res[answer.itemId - 1].product_sales + answer.unitNumber * res[answer.itemId - 1].price
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: left,
                                product_sales: pSales
                            }, {
                                item_id: answer.itemId
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log(`Your order has been placed. Total is ${price}`);
                            connection.end()

                        }
                    );
                }

            })
    });
}


displayItems()


