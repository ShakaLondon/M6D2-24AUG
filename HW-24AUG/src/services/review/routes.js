import { Router } from "express";

import * as reviewHandlers from "./handlers.js";

const route = Router();

route.get("/", reviewHandlers.list);

route.get("/:review_id", reviewHandlers.single);

route.put("/:review_id", reviewHandlers.update);

route.delete("/:review_id", reviewHandlers.deleteReview);

route.post("/", reviewHandlers.create);

export default route;
