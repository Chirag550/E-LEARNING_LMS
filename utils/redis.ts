import { Redis } from "ioredis";
require("dotenv").config();

const redisCLient = () => {
  if (process.env.REDIS_URL) {
    console.log(`Redis Connected`);
    return process.env.REDIS_URL;
  }

  throw new Error("Redis connection failed");
};

export const redis = new Redis(redisCLient());
