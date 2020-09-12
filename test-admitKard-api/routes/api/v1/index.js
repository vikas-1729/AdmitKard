const express = require("express");
const router = express.Router();
const searchController = require("../../../controller/api/v1/search");

const insertController = require("../../../controller/api/v1/insert");
router.get("/search", searchController.home);
router.post("/insert", insertController.home);
module.exports = router;
