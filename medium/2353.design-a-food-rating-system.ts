// https://leetcode.com/problems/design-a-food-rating-system/

interface Food {
  name: string;
  cuisine: string;
  rating: number;
}

function compareFn(a: Food, b: Food): number {
  return b.rating - a.rating || (a.name < b.name ? -1 : 1);
}

class FoodRatings {
  private foodMap: Map<string, Food>;
  private cuisineQueue: Map<string, PriorityQueue<Food>>;

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foodMap = new Map();
    this.cuisineQueue = new Map();

    for (const cuisine of cuisines) {
      if (this.cuisineQueue.has(cuisine)) continue;
      this.cuisineQueue.set(cuisine, new PriorityQueue(compareFn));
    }

    for (let i = 0; i < foods.length; i++) {
      const name = foods[i];
      const cuisine = cuisines[i];

      const food: Food = {
        name,
        cuisine,
        rating: ratings[i],
      };

      this.foodMap.set(name, food);
      this.cuisineQueue.get(cuisine)!.enqueue({ ...food });
    }
  }

  changeRating(food: string, newRating: number): void {
    const f = this.foodMap.get(food)!;
    f.rating = newRating;

    this.cuisineQueue.get(f.cuisine)!.enqueue({ ...f });
  }

  highestRated(cuisine: string): string {
    const queue = this.cuisineQueue.get(cuisine)!;
    let highestFood = queue.front()!;

    while (highestFood.rating !== this.foodMap.get(highestFood.name)!.rating) {
      queue.dequeue();
      highestFood = queue.front()!;
    }

    return highestFood.name;
  }
}
