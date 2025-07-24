import { Router } from "express";

export const spaceRouter:Router = Router()

spaceRouter.post("/")

spaceRouter.get("/all")

spaceRouter.get("/:spaceId")

spaceRouter.post("/element")

spaceRouter.delete("/element")

spaceRouter.delete("/:spaceId")