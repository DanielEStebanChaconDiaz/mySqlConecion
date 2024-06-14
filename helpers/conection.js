import mysql from 'mysql2/promise'
export const conection = await mysql.createConnection({
    host: '172.16.101.146',
    user: 'camper',
    password: 'campus2023',
    database: 'm2_danielestebanchacondiaz',
    port: 3306
});