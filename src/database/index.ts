import mongoose, { ConnectOptions } from "mongoose";

import { DB, URI } from "../config";

const options: ConnectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, // Mantain up to 10 socket connections
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

mongoose
  .connect(URI, options)
  .then(() => {
    console.info("MONGOOSE CONNECTION DONE");
  })
  .catch((e) => {
    console.info("MONGOOSE CONNECTION ERROR");
    console.error(e);
  });

//   CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.info("Mongoose default connection open to " + URI);
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.error("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.info("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.info(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
