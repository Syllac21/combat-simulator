import { Character } from "./personnage";
import { Round } from "./Round";

export interface Fight {
  id?: string;
  player1: Character;
  player2: Character;
  winner?: Character;
  rounds: Round[];
  timestamp: number;
}
