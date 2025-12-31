import express from "express";
import invoiceActions from "./invoiceActions.js";
import auth from "./auth.js";
import authenticateUser from "../../middleware/authService.js";
const router = express.Router();

router.use("/auth", auth);
router.use("/invoices", authenticateUser, invoiceActions);

export default router;
