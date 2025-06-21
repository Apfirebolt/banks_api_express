// Import modules
import { createClient } from "redis";

// Connect to Redis
const client = createClient({
    host: "redis", // Change to your Redis host if needed
    port: 6380
    // host: "localhost",
    // port: 6379,
});

// Handle connection errors
client.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

const redisConnect = async () => {
  await client.connect();
  console.log("Connected to Redis");
};

export { client, redisConnect };

// Simple route to test connection
// app.get("/", async (req, res) => {
//   try {
//     // Set a key-value pair in Redis
//     await client.set("test_key", "Hello from Express!");

//     // Get the value from Redis
//     const value = await client.get("test_key");

//     res.send(`Connected to Redis! Value: ${value}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error connecting to Redis");
//   }
// });
