import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

async function main() {
  try {
    await mongoose.connect(`mongodb://0.0.0.0:27017/mongoose-task`);

    app.listen(port, () => {
      console.log(`Database listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

main();
