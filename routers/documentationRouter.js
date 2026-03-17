import { Router } from "express";

const router = Router();

router.get("/day-one", (req, res) => {
    res.render("documentation/day-one", {
        title: "Day 1",
        pageType: "documentation",
        heading: "JavaScript Fundamentals & REST API Design",
        date: "January 29th"
    });
});

router.get("/day-two", (req, res) => {
    res.render("documentation/day-two", {
        title: "Day 2",
        pageType: "documentation",
        heading: "First Server (Express), Functions & NPM",
        date: "February 5th"
    });
});

router.get("/day-three", (req, res) => {
    res.render("documentation/day-three", {
        title: "Day 3",
        pageType: "documentation",
        heading: "Loop Methods, MOVIES CRUD REST API (Continued), URLs & XSS",
        date: "February 12th"
    });
});

router.get("/day-four", (req, res) => {
    res.render("documentation/day-four", {
        title: "Day 4",
        pageType: "documentation",
        heading: "HTML, Time, Fetch & Deployment",
        date: "February 19th"
    });
});

router.get("/day-five", (req, res) => {
    res.render("documentation/day-five", {
        title: "Day 5",
        pageType: "documentation",
        heading: "Export / Import, Static Files and Modules",
        date: "February 26th"
    });
});

router.get("/day-six", (req, res) => {
    res.render("documentation/day-six", {
        title: "Day 6",
        pageType: "documentation",
        heading: "Development & Frontend Structure",
        date: "March 5th"
    });
});

router.get("/day-seven", (req, res) => {
    res.render("documentation/day-seven", {
        title: "Day 7",
        pageType: "documentation",
        heading: "Server-Side Rendering & Code Structure",
        date: "March 12th"
    });
});

export default router;