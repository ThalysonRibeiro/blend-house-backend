import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors"
import { router } from "./routes";
import path from "path";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  limits: { fieldSize: 30 * 1024 * 1024 }
}));

app.use(router);

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //se for uma instacia de tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: "internal server error."
  })
})

app.listen(3333, () => console.log("servidor online!!"))