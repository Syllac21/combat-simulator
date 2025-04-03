import { CharacterClass } from "../enums/classe-type.enum";


export interface Character {
  id?: number;
  name: string;
  class: CharacterClass;
  health: number; // Points de vie
  attack: number; // Puissance d'attaque
  defense: number; // Valeur de défense
  speed: number; // Vitesse d’action
  imageUrl: string;

  
}
