const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    const database = await client.db("practices");
    const movies = await database.collection("movies");
    const query = { "imdb.runtime": { $lt: 15 } };
    const options = {
      sort: { title: 1 },
      projection: { _id: 0, title: 1, imdb: 1 },
    };

    // executing query
    const cursor = movies.find(query, options);

    // Print a message if no documents were found
    if ((await movies.countDocuments()) === 0) {
      console.log("No documents found");
    } else {
      // print returned documents
      for await (const doc of cursor) {
        console.dir(doc);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

main().catch((err) => console.log(err));
