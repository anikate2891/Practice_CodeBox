import dotenv from 'dotenv'; 
dotenv.config();

if (!process.env.PORT) {
    console.error('Error: PORT is not defined');
    process.exit(1);
}

if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI is not defined');
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    console.error('Error: JWT_SECRET is not defined');
    process.exit(1);
}


export const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
};
