const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const colletion = await database.collection("insertCollection");
    const filter = { name: "cake" };
    const options = {
      upsert: true,
    };
    const updateDoc = {
      $set: {
        name: "pancake",
      },
    };
    const result = await colletion.updateOne(filter, updateDoc, options);
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
