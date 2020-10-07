import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Team } from "./Team";

@Index("fk_Player_Team_idx", ["idTeam"], {})
@Entity("Player", { schema: "squad-management" })
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Column("int", { name: "age" })
  age: number;

  @Column("int", { name: "position" })
  position: number;

  @Column("int", { name: "id_team" })
  idTeam: number;

  @ManyToOne(() => Team, (team) => team.players, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_team", referencedColumnName: "id" }])
  team: Team;
}
