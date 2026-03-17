import express from "express";
import documentationRouter from "./routers/documentationRouter.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("frontend/frontend", {
        title: "Documentation Website - Node.js",
        pageType: "frontend"
    });
});

app.use("/documentation", documentationRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Could not start the server on: " + PORT);
        return;
    }

    console.log("Server is running on port: " + server.address().port);
});