import fastify from "fastify";
import { Player } from "../entities/Player";
import { Team } from "../entities/Team";

interface teamController {
  store: fastify.RequestHandler;
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let teamController: teamController = {
  store: async (request, reply) => {
    try {
      const { team, players } = request.body;

      console.log(request.body);

      const teamAux: Team = await Team.save({ ...team });
      await Player.createQueryBuilder("player")
        .innerJoin("player.team", "team")
        .where("team.id =:teamId", { teamId: team.id })
        .delete()
        .execute();

      players.map(async (player) => {
        await Player.save({
          ...player,
          idTeam: teamAux.id,
        });
      });

      reply.status(200).send(teamAux);
    } catch (error) {
      console.log(error);
      reply.status(500).send("Erro interno do servidor.");
    }
  },
  get: async (request, reply) => {
    try {
      const teams: any[] = await Team.createQueryBuilder("team")
        .innerJoinAndSelect("team.players", "players")
        .getMany();

      console.log(teams);

      teams.forEach((team, index) => {
        let totalAge = 0;
        team.players.forEach((player) => {
          totalAge += player.age;
        });
        teams[index].averageAge = totalAge / teams[index].players.length;
      });

      reply.code(200).send(teams);
    } catch (error) {
      console.log(error);
      reply.status(500).send("Erro interno do servidor.");
    }
  },
  find: async (request, reply) => {
    try {
      const { teamId } = request.params;

      const team: Team = await Team.createQueryBuilder("team")
        .innerJoinAndSelect("team.players", "players")
        .where("team.id=:teamId", { teamId })
        .getOne();

      reply.code(200).send(team);
    } catch (error) {
      console.log(error);
      reply.status(500).send("Erro interno do servidor.");
    }
  },
  delete: async (request, reply) => {
    try {
      const { teamId } = request.params;

      await Player.createQueryBuilder("player")
        .innerJoin("player.team", "team")
        .where("team.id =:teamId", { teamId })
        .delete()
        .execute();

      const team = await Team.delete({ id: teamId });

      reply.status(200).send(team);
    } catch (error) {
      console.log(error);
      reply.status(500).send("Erro interno do servidor.");
    }
  },
};

export { teamController };
