let money = prompt('Ваш бюджет?');
let name = prompt('Названией вашего магазина?');

let mainList = {
	budget: money,
	shopName: name,
	shopGods: [],
	employers: {},
	open: false
}

mainList.shopGods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGods[0] = prompt('Какой тип товаров будем продавать?');

alert(mainList.budget / 30);
console.log(mainList);