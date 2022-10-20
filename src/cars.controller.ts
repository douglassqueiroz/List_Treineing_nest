import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCarDto, UpdateCarDto } from "./create-car.dto";

@Controller('cars')
export class CarsController{

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
    }
}