import express from "express"
import invoiceActions from "./invoiceActions.js"
import auth from "./auth.js"
const router = express.Router()


router.use("/invoices", invoiceActions)
router.use("/auth",auth)


export default router