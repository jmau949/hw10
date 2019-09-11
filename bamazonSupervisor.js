var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon'
})

let intialize = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "doingWhat",
                message: "What would you like to do?",
                choices: [
                    'View Product Sales by Department',
                    "Create New Department",
                ]
            }
        ])
        .then(answers => {
            if (answers.doingWhat === 'View Product Sales by Department') {
                connection.connect(function (err) {
                    if (err) throw err;

                    connection.query('select d.dep_id, d.dep_name, d.overhead_costs, sum(p.product_sales) as product_sales, sum(p.product_sales)-d.overhead_costs as total_profit from bamazon.departments d inner join bamazon.products p on p.dep_name = d.dep_name group by d.dep_id, d.dep_name, d.overhead_costs', function (err, res) {
                            if (err) throw err;
                            console.log(res)
                            connection.end()  // dont need. 
                        })
                })
            }
        })
}

intialize()