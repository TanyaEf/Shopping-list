import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe 2', 'This is a test 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg')
  ];

  getRecipes() {
    // TODO fix slice()
    // return this.recipes.slice();
    return this.recipes;
  }
}
