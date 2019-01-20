'use script';

var money = +prompt("Ваш бюджет на месяц?", "50");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var item1 = prompt("Введите обязательную статью расходов в этом месяце", "питание");
var itemSum1 = +prompt("Во сколько обойдется?", "30");
var item2 = prompt("Введите обязательную статью расходов в этом месяце", "спорт");
var itemSum2 = +prompt("Во сколько обойдется?", "10");

var appData = {
    money: money,
    time: time,
    expenses: {
        item1: itemSum1,
        item2: itemSum2  
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

moneyOfDay = Math.round(money/30); 
alert("Ваш ежедневный бюджет ~ " + moneyOfDay + " у.е.");