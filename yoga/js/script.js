window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadLine = '2020-09-10';

    function gerTimeRemaining(endTime){
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t)/1000 % 60),
        minutes = Math.floor((t)/1000/60 % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = gerTimeRemaining(endTime);
                hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
                minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
                seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

                if(t.total < 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    }

    setClock('timer', deadLine);

    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form

    let message = {
        loading: 'Загрука...',
        success: 'Спасибо! Скоро с Вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        inpunt = document.getElementsByTagName('input'),
        stausMessage = document.createElement('div');

        stausMessage.classList.add('staus');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(stausMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;

        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                stausMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                stausMessage.innerHTML = message.success; 
            } else {
                stausMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < inpunt.length; i++) {
            inpunt[i].value = '';
        }

    });

});