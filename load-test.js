import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
    
    stages: [

        { duration: '1m', target: 10}, //Aumento do tráfego de 1 até 10 VUs em 1 minuto
        { duration: '2m', target: 10}, //Mantém a carga de 10 VUs por 2 minutos
        { duration: '1m', target: 0}, //Diminui a carga de VUs para 0 em 1 minuto

    ],

};

export default () => {

    const urlRes = http.get('https://jsonplaceholder.typicode.com/users');

    sleep (1);

};