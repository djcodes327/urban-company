import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { serviceRouter } from "./routes/service.routes";
import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import config from "./ormconfig";
dotenv.config();

createConnection(config as ConnectionOptions)
  .then(async (connection) => {
    if (connection.isConnected) {
      console.log(`🐘 PostgreSQL is connected!`);
    }
    var app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //* Routes

    app.use("/service", serviceRouter); //! Service

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is up and 🚀 at ${port}`);
    });
  })
  .catch((err: any) => {
    console.log(`${err}`);
  });
