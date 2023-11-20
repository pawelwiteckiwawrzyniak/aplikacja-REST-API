import express from "express";

import {
  get,
  getById,
  post,
  remove,
  put,
  patch,
  signup,
} from "../../controller/index.js";

export const router = express.Router();

router.get("/", get);

router.get("/:contactId", getById);

router.post("/", post);

router.delete("/:contactId", remove);

router.put("/:contactId", put);

router.patch("/:contactId/favorite", patch);

router.post("/users/signup", signup);
