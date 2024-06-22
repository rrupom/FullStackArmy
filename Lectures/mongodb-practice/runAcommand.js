const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");

    const result = await database.command({
      dbStats: 1,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((error) => {
  console.log(error);
});
