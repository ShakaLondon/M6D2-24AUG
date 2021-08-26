import { Router } from "express";

import * as reviewHandlers from "./handlers.js";

const route = Router();

route.get("/", reviewHandlers.list);

route.get("/:blog_id", reviewHandlers.single);

route.put("/:blog_id", reviewHandlers.update);

route.delete("/:blog_id", reviewHandlers.deleteReview);

route.post("/", reviewHandlers.create);

export default route;
