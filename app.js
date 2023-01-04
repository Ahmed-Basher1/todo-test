
require('dotenv').config();
const app = express();
const express = require('express');
const morgan = require('morgan');
const helmet =  require('helmet');
const rateLimiter = require('express-rate-limit');
const cors =  require('cors');
const xss = require('xss-clean');

const connectMongo = require('./db/connect');


const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');

app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000,
      max: 60,
    })
  );
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  app.use(mongoSanitize());
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();



