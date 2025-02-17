const express = require("express");

const depositsApi = (depositsCollection) => {
  const router = express.Router();

  //   add a deposit
  router.post("/", async (req, res) => {
    const depositInfo = req.body;
    depositInfo.status = "pending";
    depositInfo.createdAt = new Date();
    const result = await depositsCollection.insertOne(depositInfo);
    res.send(result);
  });

  //   get all deposits
  router.get("/", async (req, res) => {
    try {
      const result = await depositsCollection
        .aggregate([
          {
            $addFields: {
              userId: { $toObjectId: "$userId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "userInfo.password": 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      res.status(500).send({ error: "Failed to fetch deposits" });
    }
  });

  //   status updated
  router.patch("/status/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const { status } = req.body;
    const updatedDoc = { $set: { status } };
    const result = await depositsCollection.updateOne(query, updatedDoc);
    res.send(result);
  });

  //  delete a deposit
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await depositsCollection.deleteOne(query);
    res.send(result);
  });

  return router;
};
module.exports = depositsApi;
