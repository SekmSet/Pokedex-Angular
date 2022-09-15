export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url?: string;
}

export interface PokemonResponse {
  abilities: Abilities[];
  moves: Moves[];
  sprites: {
    front_default?: string;
    back_default?: string;
  };
  types: Type[];
}

export interface Abilities {
  ability: {
    name?: string;
    url?: string;
  };
}

interface Moves {
  move: {
    name?: string;
    url?: string;
  };
}

interface Type {
  type: {
    name?: string;
    url?: string;
  };
}
