import { Router } from "express";

const router = Router(); 

router.get("/", (req, res) => {
    res.render("frontend/frontend", {
        title: "Documentation Wensite - Node.js",
        pageType: "frontpage"
    });
});

export default router;