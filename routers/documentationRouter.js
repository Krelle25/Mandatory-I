import { Router } from "express";
import { documentationPages } from "../util/documentationUtil.js";

const router = Router();

router.get("/:slug", (req, res) => {
  const page = documentationPages.find((page) => page.slug === req.params.slug);

  if (!page) {
    return res.status(404).send("Page not found");
  }

  res.render(`documentation/${page.slug}`, {
    title: page.title,
    pageType: "documentation",
    heading: page.heading,
    date: page.date,
  });
});

export default router;
