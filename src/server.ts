import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.generated.js";
import { PrismaClient } from "@prisma/client";
import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  if (req.body.ref === 'refs/heads/main') {
    // Skrypt do wykonania po otrzymaniu webhooka
    exec('sh ./deploy-script.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }
  res.status(200).send('Webhook received');
  console.log('Webhook received');
});

const { url } = await new Promise(async (resolve) => {
  app.listen(4000, async () => {
    console.log(`🚀  Server ready at http://localhost:4000/`);
    resolve({ url: `http://localhost:4000/` });
  });

  await server.start();
  app.use('/graphql', expressMiddleware(server, {
    context: async () => ({
      prisma,
    }),
  }));
});

console.log(`🚀  GraphQL server running at: ${url}graphql`);
console.log(`🚀  Test: ${url}webhook`);