'use script';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == null || money == "") {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null)
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет ~ " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log("Произошла ошибка!");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет доход? (Перечислите через запятую)", "" );
        while( +items || items == null || items == "") {
            items = prompt("Что принесет доход? (Перечислите через запятую)", "" );
        }
        appData.income = items.split(', ');
        let extraItems = prompt("Может что-то еще?");
        while( +extraItems || extraItems == null || extraItems == "") {
            extraItems = prompt("Может что-то еще?");
        }
        appData.income.push(extraItems);
        appData.income.sort();
        appData.income.forEach(function(item) {
            alert("Способы доп. заработка:"+ item);
        });
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ":" + appData[key]);
}
