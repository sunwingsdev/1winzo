const express = require("express");
const { ObjectId } = require("mongodb");
const homeControlApi = (homeControlCollection) => {
  const router = express.Router();

  // Add a home control data
  router.post("/", async (req, res) => {
    const controlInfo = req.body;
    controlInfo.createdAt = new Date();
    controlInfo.isSelected = false;
    const result = await homeControlCollection.insertOne(controlInfo);
    res.send(result);
  });

  // Get all home control data
  router.get("/", async (req, res) => {
    const result = await homeControlCollection.find().toArray();
    res.send(result);
  });

  router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    // ObjectId চেক করা হচ্ছে
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid ObjectId format" });
    }

    try {
      const selectedObject = await homeControlCollection.findOne({
        _id: new ObjectId(id),
      });

      if (!selectedObject) {
        return res.status(404).send({ error: "Object not found" });
      }

      const { category, isSelected } = selectedObject;
      if (category === "logo") {
        await homeControlCollection.updateMany(
          { category: "logo" },
          { $set: { isSelected: false } }
        );
        await homeControlCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { isSelected: true } }
        );
      } else if (category === "notice") {
        await homeControlCollection.updateMany(
          { category: "notice" },
          { $set: { isSelected: false } }
        );
        await homeControlCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { isSelected: true } }
        );
      } else if (
        category === "slider" ||
        category === "favorite" ||
        category === "featured-game"
      ) {
        await homeControlCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { isSelected: !isSelected } }
        );
      } else {
        return res.status(400).send({ error: "Invalid category" });
      }
      res.send({ success: true, message: "Update successful" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "An error occurred" });
    }
  });

  // Delete a home control data by ID
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const result = await homeControlCollection.deleteOne({
        _id: new ObjectId(id),
      });

      if (result.deletedCount === 0) {
        return res.status(404).send({ error: "No document found to delete" });
      }

      res.send({ success: true, message: "Deleted successfully" });
    } catch (error) {
      console.error("Delete Error:", error);
      res.status(500).send({ error: "Failed to delete the document" });
    }
  });

  return router;
};

module.exports = homeControlApi;
