import { Router } from "express";

import productsRoutes from "./products/routes.js";

import reviewRoutes from "./review/routes.js";

const route = Router();

route.use("/products", productsRoutes);

route.use("/review", reviewRoutes);

export default route;
