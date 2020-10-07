import fastify from "fastify";
import fastifyCors from "fastify-cors";
import multer from "fastify-multer";
import { Server, IncomingMessage, ServerResponse } from "http";
import routes from "../routes/index.route";
import { AddressInfo } from "net";
import { Service } from "./index.service";
interface FastifyService extends Service {}

let server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

const fastifyService: FastifyService = {
  init: async () => {
    try {
      server = fastify({});
      server.register(multer.contentParser);
      server.register(fastifyCors);

      routes.forEach((route) => {
        server.route(route);
      });

      await server.listen(Number(process.env.SERVER_PORT), "0.0.0.0");

      console.log(
        `[FASTIFY] Fastify service initialized on port ${
          (server.server.address() as AddressInfo).port
        }.`
      );
    } catch (error) {
      console.log("[FASTIFY] Error during fastify service initialization");
      throw error;
    }
  },
};

export { fastifyService };
