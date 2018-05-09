export class Spell {
  id: number;
  name: string;
  level: number;
  prepared = false;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}
