import fastify from "fastify";
import { teamController } from "../controllers/team.controller";

type Routes = fastify.RouteOptions[];

const teamRoutes: Routes = [
  {
    method: "GET",
    url: "/team",
    handler: teamController.get,
  },
  {
    method: "GET",
    url: "/team/:teamId",
    handler: teamController.find,
  },
  {
    method: "POST",
    url: "/team",
    handler: teamController.store,
  },
  {
    method: "DELETE",
    url: "/team/:teamId",
    handler: teamController.delete,
  },
];

export { teamRoutes };
