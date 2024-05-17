import fs from 'fs';
import { parse } from 'csv-parse';
import dotenv from 'dotenv';
import Bank from "./models/Bank.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const filePath = 'data/IFSC.csv';

await Bank.deleteMany();

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    try {
        const records = await new Promise((resolve, reject) => {
            parse(data, { columns: true }, (err, records) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(records);
                }
            });
        });

        // print only first 5 records
        records.forEach((record) => {
            Bank.create({
                name: record.BANK,
                ifsc: record.IFSC,
                branch: record.BRANCH,
                centre: record.CENTRE,
                district: record.DISTRICT,
                city: record.CITY,
                state: record.STATE,
                address: record.ADDRESS,
                contact: record.CONTACT,
                upi: record.UPI === 'true' ? true : false,
                rtgs: record.RTGS ? true : false,
                neft: record.NEFT ? true : false,
            }).then((record) => {
                // console.log(record);
            }).catch((err) => {
                console.error('failed to create record', err);
            });
        });
        
    } catch (err) {
        console.error(err);
    }
});
