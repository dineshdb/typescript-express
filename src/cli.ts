import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import config from "./config";

const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.static("public"));

app.get("/", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

try {
  app.listen(config.PORT, config.HOST, (): void => {
    console.log(`Listening on http://${config.HOST}:${config.PORT}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
