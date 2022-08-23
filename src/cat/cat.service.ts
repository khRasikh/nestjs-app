import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.cats.push({name: "khudadad", age: 22, date: "2022-03-30"})
    this.cats.push({name: "arefa", age: 22, date: "2022-03-30"})
    this.cats.push({name: "mahdi", age: 22, date: "2022-03-30"})
    return this.cats;
  }
}
 