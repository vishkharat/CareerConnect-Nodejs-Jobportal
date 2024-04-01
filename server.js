//API codumentation
import swaggerUI  from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
//package imports 
//const express = require ('express')
import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
// security packages 
import helmet from 'helmet';
import xssClean from 'xss-clean'
import ExpressMongoSanitize from 'express-mongo-sanitize';


// files imports
import connectDB from './config/db.js'
// routes import 
import testRoutes from './routes/testRoutes.js'
import authRoutes from './routes/authRoutes.js'
import errroMiddelware from './middlewares/errroMiddleware.js'
import jobsRoutes from './routes/jobsRoutes.js'
import  userRoutes from './routes/userRoutes.js'



// config 
dotenv.config()

//mongo db connection 
connectDB();

// Swagger api config
// swagger api options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CareerConnect",
      description:  "A platform that helps you find your dream job and make a meaningful career move.",
    },
    servers: [
      {
              // url: "http://localhost:8080",
            url: "https://careerconnect-nodejs-jobportal.onrender.com"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spec = swaggerJSDoc(options);


// rest object 
const app = express();
//middlewares
app.use (helmet());
app.use(xssClean());
app.use(ExpressMongoSanitize());
app.use (express.json());
app.use(cors());
app.use(morgan("dev"));


//routes 
app.use ("/api/v1/test",testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);


// home Routes root
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(spec));

//validation middleware
app.use(errroMiddelware);

//port 
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  // console.log(
  //   `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  //     .bgCyan.white
  // );
});
