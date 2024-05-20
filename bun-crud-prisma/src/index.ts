import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Elysia()
  .get("/influencers", async () => {
    const influencers = await prisma.influencer.findMany();
    return influencers;
  })
  .post("/influencer", async (req) => {
    const { username, password }: any = req.body;
    const influencer = await prisma.influencer.create({
      data: {
        username,
        password,
      },
    });
    return influencer;
  })
  .put("/influencers/:id", async (req) => {
    const { id } = req.params;
    const { password }: any = req.body;
    const influencer = await prisma.influencer.update({
      where: {
        id: id,
      },
      data: {
        password,
      },
    });
    return influencer;
  })
  .delete("/influencers/:id", async (req) => {
    const { id } = req.params;
    const influencer = await prisma.influencer.delete({
      where: {
        id: id,
      },
    });
    return influencer;
  })
  .get("/influencers/:id", async (req) => {
    const { id } = req.params;
    const influencer = await prisma.influencer.findUnique({
      where: {
        id: id,
      },
    });
    return influencer;
  })
  .get("/", () => "Hello World!")
  .listen(3050);

console.log(
  `app running at ${app.server?.hostname}:${app.server?.port}`
);
