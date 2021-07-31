import { cleanEnv, port, str } from "envalid";

const env = cleanEnv(process.env, {
  HOST: str({ default: "0.0.0.0" }),
  PORT: port({ default: 3000 }),
});

export default env;
