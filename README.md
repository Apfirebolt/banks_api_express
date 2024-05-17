# Banks API in Express

_👀 Banks API having IFSC code of Banks in India

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

This application contains data of around 160K banks in India with fields such as name, branch, ifsc code, state, contact and district.

Following is the script used to migrate data - bankSeeder.js

```
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

```

Properties of the bank as given the dataset used to create this API

```
const data = {
  BANK: 'Abhyudaya Co-operative Bank',
  IFSC: 'ABHY0065001',
  BRANCH: 'Abhyudaya Co-operative Bank IMPS',
  CENTRE: 'GREATER MUMBAI',
  DISTRICT: 'GREATER MUMBAI',
  STATE: 'MAHARASHTRA',
  ADDRESS: 'ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024',
  CONTACT: '+912225260173',
  IMPS: 'true',
  RTGS: 'true',
  CITY: 'MUMBAI',
  ISO3166: 'IN-MH',
  NEFT: 'true',
  MICR: '400065001',
  UPI: 'true',
  SWIFT: ''
};
```

Reading data using Pandas and Python - read_csv.py

```
import pandas as pd

# import IFSC.csv
data = pd.read_csv('data/IFSC.csv')

# get column names
print(data.columns)

# get number of entries, 164836 entries in the original database
print(len(data))

# group by BANK and get the number of entries for each bank, print the max 5 banks
print(data.groupby('BANK').size().nlargest(5))

# group by CITY and get the number of entries for city named LUCKNOW
print(data.groupby('CITY').size()['NOIDA'])
```

I was experimenting with advanced filters in the dataset for instance getting all banks in a given city. Grouping the data and more based on column names.

## Requirements 🏃

- Node
- MongoDB
- MongoDB Compass (Optional, GUI for MongoDB databases)
- Postman (Optional, for API testing)

## Install  💥

```
npm install
npm start
```

The Express app is configured to run by default on port 3000 but can be easily changed by tweaking server.js file

## Features

- User authentication 📦
- 
- Recipes can have multiple images 🍗
- Recipes can have multiple steps 🚶
- Recipes can have multiple ingredients 🔖

## API Docs

Detailed documentation for this API is not available yet, but below you can find some sample end points from the server.js file.

```
app.use('/api/users', userRoutes)
app.use('/api/banks', bankRoutes)
```

## Deployment

Planned to be deployed on Azure using Docker containers.

## Development

_Easily set up a local development environment!_

- clone
- `npm install`
- `npm start`

**Start coding!** 🎉

Clone this repo on your machine, navigate to its location in the terminal and run:

## Contributing

All contributions are welcome!  
Please take a moment to review guidelines [PR](.github/pull_request_template.md) | [Issues](https://github.com/Apfirebolt/express-recipe-api/issues/new/choose)


