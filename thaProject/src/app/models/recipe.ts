import { Ingredient } from './ingredient';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public steps: Array<string>;
  public ingredients: Array<Ingredient>;
  public timeNeeded?: number;
  public peopleServed?: number;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
