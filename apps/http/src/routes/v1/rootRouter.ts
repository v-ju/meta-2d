import { Router } from "express";
import { userRouter } from "./userRouter";
import { adminRouter } from "./adminRouter";
import { spaceRouter } from "./spaceRouter";

export const router: Router = Router();


router.post("/signin")

router.get("/elements")

router.get("/avatars")


router.use("/user", userRouter)
router.use("/admin", adminRouter)
router.use("/space", spaceRouter)