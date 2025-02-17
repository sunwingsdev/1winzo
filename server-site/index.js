const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { upload, deleteFile } = require("./utils");
const path = require("path");

const usersApi = require("./apis/usersApi/usersApi");
const depositsApi = require("./apis/depositsApi/depositsApi");
const withdrawsApi = require("./apis/withdrawsApi/withdrawsApi");
const homeControlApi = require("./apis/homeControlApi/homeControlApi");

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "https://betruss.com",
    "http://betruss.com",
    "https://www.betruss.com",
    "www.betruss.com",
    "betruss.com",
    "https://4rabbit.oracleapi.net",
    "http://4rabbit.oracleapi.net",
    "https://www.4rabbit.oracleapi.net",
    "www.4rabbit.oracleapi.net",
    "4rabbit.oracleapi.net",
    "*",
  ],
  credential: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

//middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// mongodb start

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes for image upload and delete
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({
    message: "File uploaded successfully",
    filePath: `/uploads/images/${req.file.filename}`,
  });
});

app.delete("/delete", async (req, res) => {
  const { filePath } = req.body;

  if (!filePath) {
    return res.status(400).json({ error: "File path not provided" });
  }

  try {
    await deleteFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //collections start
    const usersCollection = client.db("rabet").collection("users");
    const depositsCollection = client.db("rabet").collection("deposits");
    const withdrawsCollection = client.db("rabet").collection("withdraws");
    const homeControlsCollection = client
      .db("rabet")
      .collection("homeControls");
    //collections end

    // APIs start
    app.use("/users", usersApi(usersCollection));
    app.use("/deposits", depositsApi(depositsCollection));
    app.use("/withdraws", withdrawsApi(withdrawsCollection));
    app.use("/home-controls", homeControlApi(homeControlsCollection));

    // ---------=======>
    app.get("/api/users/:email", async (req, res) => {
      const { email } = req.params;
      const query = { email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });
    // APIs end

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!!!✅");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// mongodb end

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
