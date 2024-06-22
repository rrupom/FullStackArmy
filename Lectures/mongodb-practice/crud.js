const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const crud = await database.collection("crud");
    // await crud.updateOne(
    //   { name: "Pizza Rat's Pizzaria" },
    //   { $inc: { violations: 3 }, $set: { Closed: true } },
    //   { w: "majority", wtimeout: 100 }
    // );
    // await crud.updateMany(
    //   { violations: { $gt: 3 } },
    //   { $set: { Review: true } }
    // );
    // await crud.insertMany([
    //   { _id: 1, name: "Central Perk Cafe", violations: 3 },
    //   { _id: 2, name: "Rock A Feller Bar and Grill", violations: 2 },
    //   { _id: 3, name: "Empire State Sub", violations: 5 },
    //   { _id: 4, name: "Pizza Rat's Pizzaria", violations: 8 },
    // ]);
    //

    await crud.updateMany({ points: { $gt: 50 } }, [
      { $set: { brilliant: true, lastUpdate: "$$NOW" } },
    ]);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((err) => console.log(err));
