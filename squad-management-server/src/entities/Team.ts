import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Player } from "./Player";

@Entity("Team", { schema: "squad-management" })
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 200 })
  name: string;

  @Column("varchar", { name: "description", length: 45 })
  description: string;

  @Column("varchar", { name: "formation", length: 45 })
  formation: string;

  @Column("varchar", { name: "site", length: 45 })
  site: string;

  @Column("tinyint", { name: "type", width: 1 })
  type: boolean;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
