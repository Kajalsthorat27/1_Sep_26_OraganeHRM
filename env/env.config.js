import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

dotenv.config({path : `./env/${envName}.env`, override : true});

module.exports =
{
    BASE_URL : process.env.BASE_URL,
    USERNAME : process.env.USERNAME1,
    PASSWORD : process.env.PASSWORD1
}