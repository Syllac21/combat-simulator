export interface Bet{
  id?: string;
  userId: string;
  fightId: string;
  characterId: string;
  amount: number;
  result?: 'win' | 'lose';
}
