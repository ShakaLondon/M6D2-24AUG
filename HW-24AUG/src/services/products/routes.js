import { Router } from "express";

import * as productsHandlers from "./handlers.js";

import { parseFile, productUploadFile } from "../upload/index.js"

const route = Router();

route.get("/", productsHandlers.list);

route.get("/:product_id", productsHandlers.single);

route.put("/:product_id", parseFile.single("image"), productUploadFile, productsHandlers.updateProductImage);

route.put("/:product_id", productsHandlers.update);

route.delete("/:product_id", productsHandlers.deleteProduct);

route.post("/", productsHandlers.create);

export default route;
