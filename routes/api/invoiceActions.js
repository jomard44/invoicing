import Invoice from "../../models/Invoice.js";
import express from "express";
import mongoose from "mongoose";
const invoiceActions = express();

invoiceActions.post("/", async (req, res) => {
  try {
    const newInvoice = req.body;
    const createdInvoice = await Invoice.create(newInvoice);
    res.status(201).json({
      message: "Record created successfully",
      invoice: createdInvoice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating record",
      error: error.message,
    });
  }
});

invoiceActions.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching records",
      error: error.message,
    });
  }
});

invoiceActions.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findById(id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({
      message: "Error fetching records",
      error: error.message,
    });
  }
});

invoiceActions.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({
      message: "Record updated successfully",
      invoice: updatedInvoice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating records",
      error: error.message,
    });
  }
});

invoiceActions.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await Invoice.findByIdAndDelete(id);
    if (!deletedInvoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }
    res.status(200).json({
      message: "Record has been deleted succesfully",
      invoice: deletedInvoice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error deleting record",
      error: error.message,
    });
  }
});

export default invoiceActions;
