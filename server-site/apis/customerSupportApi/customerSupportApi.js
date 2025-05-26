const express = require("express");
const { ObjectId } = require("mongodb");

const customerSupportApi = (customerSupportCollection) => {
  const router = express.Router();

  // Create new support entry (Telegram/WhatsApp)
  router.post("/", async (req, res) => {
    const data = req.body;

    try {
      data.createdAt = new Date();
      data.updatedAt = new Date();
      const result = await customerSupportCollection.insertOne(data);
      res.send(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to create support info" });
    }
  });

  // Get all support info
  router.get("/", async (req, res) => {
    try {
      const result = await customerSupportCollection.find().toArray();
      res.send(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch support info" });
    }
  });

  // Get single support info by ID
  router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
      const result = await customerSupportCollection.findOne({
        _id: new ObjectId(id),
      });

      if (!result) {
        return res.status(404).json({ error: "Support info not found" });
      }

      res.send(result);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch support info" });
    }
  });

  // Update support info by ID
  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
      updateData.updatedAt = new Date();

      const result = await customerSupportCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Support info not found" });
      }

      res.status(200).json({ message: "Support info updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update support info" });
    }
  });

  // Delete support info by ID
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
      const result = await customerSupportCollection.deleteOne({
        _id: new ObjectId(id),
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Support info not found" });
      }

      res.status(200).json({ message: "Support info deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete support info" });
    }
  });

  return router;
};

module.exports = customerSupportApi;
