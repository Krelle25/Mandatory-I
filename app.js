import express from "express";
import frontpageRouter from "./routers/frontpageRouter.js";
import documentationRouter from "./routers/documentationRouter.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", frontpageRouter)
app.use("/documentation", documentationRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Could not start the server on: " + PORT);
        return;
    }

    console.log("Server is running on port: " + server.address().port);
});