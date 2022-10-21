import { Injectable } from '@nestjs/common';
import { Cars } from './cars';

@Injectable()
export class CarsService {
    cars:Cars[]=[
    {id:1, description:'Fusca'},
    {id:2, description:'Civic'},
    {id:3, description:'Uno'}
    ];

    getAll(){
        return this.cars;
    }

    getByid(id: number){
        const car = this.cars.find((value) => value.id == id);
        return car;
    }

    create(car:Cars){

    }

    update(car:Cars){

    } 

    delete(id: number){

    }
}
