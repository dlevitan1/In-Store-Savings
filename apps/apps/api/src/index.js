import Fastify from "fastify";
import dotenv from "dotenv";
dotenv.config();

const app = Fastify();

app.get("/health", async () => ({ ok: true }));

app.post("/v1/presence/enter", async (req) => {
  const { store_id } = req.body ?? {};
  return {
    activation_id: "act_demo",
    store_id: store_id || "st_demo",
    offers: [{ type: "percent", value: 7 }]
  };
});

app.post("/webhooks/cardlink/authorization", async () => ({ ok: true }));

const port = process.env.PORT || 3001;
app.listen({ port, host: "0.0.0.0" }).then(() =>
  console.log(`API on :${port}`)
);
