import fastify from "fastify";
import { teamRoutes } from "./team.route";

type Routes = fastify.RouteOptions[];

const routes: Routes = [...teamRoutes];

export default routes;
