import fs from 'fs';
import axios from 'axios';
import mysql from 'mysql2/promise';
import shortUUID from 'short-uuid';
import bcrypt from 'bcrypt';

const dbConfig = {
    host: 'brava-db.cil54y9frn21.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Externo.14',
    database: 'bravadb',
};

async function insertUsers() {
    try {
        const connection = await mysql.createConnection(dbConfig);

        // Read users data from the JSON file
        const usersData = JSON.parse(fs.readFileSync('./findapproval.json', 'utf8'));

        // Start a transaction
        await connection.beginTransaction();

        try {
            // Perform batch insertion
            const insertPromises = usersData.map(async user => {
                const userData = [
                    shortUUID.generate(),
                    user.username,
                    user.email,
                    user.phone,
                    await bcrypt.hash(user.password, 10),
                    new Date(),
                    new Date(),
                ];

                return userData;
            });

            const insertedData = await Promise.all(insertPromises);

            await connection.query('INSERT INTO users (id, username, email, phone, password, registered, last_login) VALUES ?', [insertedData]);

            // Commit the transaction if successful
            await connection.commit();

            // Log user details after successful insertion
            insertedData.forEach(user => {
                console.log(`Account created: ${user.slice(1, 4).join(', ')}`);
            });

            console.log('All users inserted successfully');
        } catch (error) {
            // Rollback the transaction if an error occurs
            await connection.rollback();
            console.error('Error inserting users:', error);
        } finally {
            // Close the connection
            await connection.end();
        }
    } catch (error) {
        console.error('Error establishing a database connection:', error);
    }
}

// Call the function to insert users
insertUsers();
