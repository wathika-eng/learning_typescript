const menu = [
	{ name: 'Spaghetti', price: 10 },
	{ name: 'Salad', price: 5 },
	{ name: 'Soda', price: 2 },
	{ name: 'Bread', price: 3 },
];
const cashInRegister = 100;
const orderQueue = [];
const ID = 0;

function addNewPizza(pizza) {
	menu.push(...pizza);
}

function placeOrder(pizzaOrder) {
	const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaOrder);
	cashInRegister += selectedPizza.price;
	const newOrder = { id: ID++, pizza: selectedPizza, status: 'Ordered' };
	orderQueue.push(newOrder);
	return newOrder;
}

function completeOrder(orderID) {
	const order = orderQueue.find((order) => order.id === orderID);
	order.status = 'Completed';
	return order;
}
placeOrder('Salad');
const pizza = [{ name: 'Pineapple', price: 100 }];

addNewPizza(pizza);

// console.log(menu);
console.log(orderQueue);
