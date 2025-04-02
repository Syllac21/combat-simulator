import { Character } from "./personnage";

export interface CharacterRanking{
  userId: string;
  character: Character;
  wins: number;
  losses: number;
  totalFights: number;
  ranking: number;
}
