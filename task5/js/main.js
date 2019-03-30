'use strict';
let start  = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

    items = document.getElementsByClassName('expenses-item'),

    approve = document.getElementsByTagName('button')[0],
    approve2 = document.getElementsByTagName('button')[1],
    cuclulate = document.getElementsByTagName('button')[2],

    optionalexpenses2 = document.querySelectorAll('.optionalexpenses-item'),

    income2 = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    