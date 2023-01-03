
require('dotenv').config();
const app = express();
const express = require('express');
const morgan = require('morgan');
const helmet =  require('helmet');
const rateLimiter = require('express-rate-limit');
const cors =  require('cors');
const xss = require('xss-clean');

const connectMongo = require('./db/connect');



