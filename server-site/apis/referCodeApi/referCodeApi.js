const express = require("express");
const { ObjectId } = require("mongodb");

const refercodeApi = (refersCollection) => {
  const router = express.Router();

  //   add a refer link
  router.post("/generate-referral", async (req, res) => {
    const { userId, username, referralCode, referLink } = req.body;

    if (!userId || !username || !referralCode || !referLink) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Step 1: Check if referral already exists for this user
      const existing = await refersCollection.findOne({
        userId: new ObjectId(userId),
      });

      if (existing) {
        return res.status(200).json({ referralCode: existing.referralCode });
      }

      // Step 2: Store the referral sent from frontend
      const newReferral = {
        userId: new ObjectId(userId),
        username,
        referralCode,
        referLink,
        createdAt: new Date(),
      };

      await refersCollection.insertOne(newReferral);

      res.status(201).json({ referralCode });
    } catch (err) {
      console.error("Error generating referral code:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //   get all refer links
  router.get("/", async (req, res) => {
    try {
      const result = await refersCollection
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

  return router;
};
module.exports = refercodeApi;
