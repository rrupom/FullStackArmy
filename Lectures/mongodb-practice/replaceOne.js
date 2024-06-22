const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const colletion = await database.collection("insertCollection");
    const query = {
      name: {
        $regex: "pancake",
      },
    };
    const options = {
      upsert: true,
    };
    const replacement = {
      title: `It is as delicious as ${Math.floor(Math.random() * 100)}`,
    };
    const result = await colletion.replaceOne(query, replacement);
    console.log(`${result.matchedCount} documents is updated successfully`);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((error) => {
  console.log(error);
});
