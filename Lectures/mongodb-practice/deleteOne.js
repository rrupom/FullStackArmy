const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const colletion = await database.collection("insertCollection");
    const query = {
      title: {
        $regex: "It is as delicious",
      },
    };

    const result = await colletion.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document");
    } else {
      console.log("No documents matched the query. Deleted 0 documents");
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((error) => {
  console.log(error);
});
