import { Router } from "express";

import * as productsHandlers from "./handlers.js";

const route = Router();

route.get("/", productsHandlers.list);

route.get("/:product_id", productsHandlers.single);

route.put("/:product_id", productsHandlers.update);

route.delete("/:product_id", productsHandlers.deleteProduct);

route.post("/", productsHandlers.create);

export default route;
