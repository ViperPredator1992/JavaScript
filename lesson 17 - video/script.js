document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    /* JSON */
    const smartphone = {

        brand: 'samsung',
        screen: '5.5',
        rom: '128',
        ram: '4',
        gps: true,
        sensor: ['Accelerometer', 'E-compass', 'Fingerscreen Sensor', 'Gyroscope'],
        camera: {
            back: [32, 5, 8],
            front: 16
        }

    };

    const jsonSmart = JSON.stringify(smartphone);

    console.log(JSON);
    console.log(JSON.stringify(smartphone));
    console.log(JSON.parse(jsonSmart));


    const select = document.getElementById('cars'),
        output = document.getElementById('output');
    
    select.addEventListener('change', () => {
        
        const request = new XMLHttpRequest();

        // request.addEventListener('loadstart', (event) => {
        //     console.log(event);
        // });

        // request.addEventListener('readystatechange', (event) => {
        //     console.log(request.readyState);
        // });

        request.open('GET', './cars.json');

        request.setRequestHeader('Content-type', 'application/json');

        request.send();

        // request.addEventListener('progress', (event) => {
        //     console.log(event);
        // });

        // request.addEventListener('abort', (event) => {
        //     console.log(event);
        // });

        // request.addEventListener('load', (event) => {
        //     console.log(event);
        // });

        // request.addEventListener('loadend', (event) => {
        //     console.log(event);
        // });

        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.status);
                // console.log(request.statusText);
                // console.log(request.response);
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                console.log(data);
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        console.log("TCL: item", item);
                        const {brand, model, price} = item;
                        output.innerHTML = `Тачка ${brand} ${model}<br> 
                        Цена: ${price}$`;
                    } else {
                        output.innerHTML = 'Произошла ошибка!';
                    }
                });
            }
        });

    });

});