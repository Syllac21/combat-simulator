import { User } from "./User";

export interface LeaderBoard{
  user: User;
  wins: number;
  losses: number;
  totalBets: number;
  ranking: number;
}
