import { Router } from "express";

import signup from "./access/signup";

const router = Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use("/", apikey);
/*-------------------------------------------------------------------------*/

router.use("/signup", signup);

export default router;
