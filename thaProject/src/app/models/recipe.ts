import { Ingredient } from './ingredient';

export interface Recipe {
  name?: string;
  timeNeeded?: number;
  peopleServed?: number;
  description?: string;
  steps?: Array<string>;
  ingredients?: Array<Ingredient>;
}
