const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const insertCollection = await database.collection("insertCollection");

    const doc = {
      title: "Record of the Experiment in the BD",
      content:
        "It is a country run by mafia government. people have no rights of their own. moral and contitution of the country is totally broken",
    };
    const docs = [
      { name: "cake", healthy: false },
      { name: "lettuce", healthy: true },
      { name: "donut", healthy: false },
    ];

    const result = await insertCollection.insertMany(docs, { ordered: true });
    console.log(result.insertedCount);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((err) => {
  console.log(err);
});
