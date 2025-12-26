import express from "express"
import invoiceActions from "./invoiceActions.js"
const router = express.Router()


router.use("/invoices", invoiceActions)


export default router