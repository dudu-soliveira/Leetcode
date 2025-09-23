import { PriorityQueue } from "@datastructures-js/priority-queue";

// @leet start
interface Movie {
  rented: boolean;
  price: number;
}

class MovieRentingSystem {
  private availableMovies: Map<number, PriorityQueue<bigint>>;
  private movieMap: Map<bigint, Movie>;
  private rentQueue: PriorityQueue<bigint>;

  _encode(shop: number, movie: number): bigint {
    return (BigInt(shop) << 20n) | BigInt(movie);
  }

  constructor(n: number, entries: number[][]) {
    this.availableMovies = new Map();
    this.movieMap = new Map();

    const compare = (a: bigint, b: bigint): number => {
      return (
        this.movieMap.get(a)!.price - this.movieMap.get(b)!.price ||
        Number(a - b)
      );
    };

    for (const [shop, movie, price] of entries) {
      const key = this._encode(shop, movie);
      this.movieMap.set(key, { rented: false, price });

      if (!this.availableMovies.has(movie))
        this.availableMovies.set(movie, new PriorityQueue(compare));
      this.availableMovies.get(movie)!.enqueue(key);
    }

    this.rentQueue = new PriorityQueue(compare);
  }

  search(movie: number): number[] {
    let movieQueue = this.availableMovies.get(movie);

    if (movieQueue === undefined || movieQueue.isEmpty()) return [];

    let shops: number[] = [];
    let returnToQueue: bigint[] = [];
    let key = movieQueue.dequeue()!;

    if (!this.movieMap.get(key)!.rented) {
      shops.push(Number(key >> 20n));
      returnToQueue.push(key);
    }

    while (!movieQueue.isEmpty() && shops.length < 5) {
      const dup = key === movieQueue.front();
      key = movieQueue.dequeue()!;

      if (!this.movieMap.get(key)!.rented && !dup) {
        shops.push(Number(key >> 20n));
        returnToQueue.push(key);
      }
    }

    for (const key of returnToQueue) movieQueue.enqueue(key);

    return shops;
  }

  rent(shop: number, movie: number): void {
    const key = this._encode(shop, movie);
    this.movieMap.get(key)!.rented = true;
    this.rentQueue.enqueue(key);
  }

  drop(shop: number, movie: number): void {
    const key = this._encode(shop, movie);
    this.movieMap.get(key)!.rented = false;
    this.availableMovies.get(movie)!.enqueue(key);
  }

  report(): number[][] {
    if (this.rentQueue.isEmpty()) return [];

    let movies: number[][] = [];
    let returnToQueue: bigint[] = [];
    let key = this.rentQueue.dequeue()!;

    if (this.movieMap.get(key)!.rented) {
      movies.push([Number(key >> 20n), Number(key & ((1n << 20n) - 1n))]);
      returnToQueue.push(key);
    }

    while (!this.rentQueue.isEmpty() && movies.length < 5) {
      const dup = key === this.rentQueue.front();
      key = this.rentQueue.dequeue()!;

      if (this.movieMap.get(key)!.rented && !dup) {
        movies.push([Number(key >> 20n), Number(key & ((1n << 20n) - 1n))]);
        returnToQueue.push(key);
      }
    }

    for (const key of returnToQueue) this.rentQueue.enqueue(key);

    return movies;
  }
}

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * var obj = new MovieRentingSystem(n, entries)
 * var param_1 = obj.search(movie)
 * obj.rent(shop,movie)
 * obj.drop(shop,movie)
 * var param_4 = obj.report()
 */
// @leet end
