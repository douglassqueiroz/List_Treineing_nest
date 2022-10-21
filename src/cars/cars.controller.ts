import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCarDto, UpdateCarDto } from "../create-car.dto";
import { Cars } from "./cars";
import { CarsService } from "./cars.service";

@Controller('cars')
export class CarsController{

    constructor(
        private carsService: CarsService
    ){}
    
    @Get()
    async getAll() : Promise<Cars[]> {
        return this.carsService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Cars> {
        return this.carsService.getByid(id);
    }





/*
    @Post()
    create(@Body() createCarDto: CreateCarDto){
    return 'This action adds a new car';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return 'This action returns a #${id} car';
    }
    
    @Put(':id')
    update(@Param('id')id: string, @Body() updateCarDto: UpdateCarDto) {
        return 'This action update a #${id} cat';
    }
    
    @Delete(':id')
    remove(@Param('id')id: string){
        return 'This action removes a #${id}';
    }*/
}