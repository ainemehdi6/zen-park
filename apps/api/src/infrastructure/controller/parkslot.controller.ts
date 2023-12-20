import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateParkDTO } from '../../dto/CreatePark.dto';
import { CreateParkSlot } from '../../domain/services/CreateParkSlot.service';
import { DeleteParkSlot } from 'src/domain/services/DeleteParkSlot.service';
import { ListParkSlot } from 'src/domain/services/ListParkSlot.service';

@Controller('parks')
export class ParkSlotController {
  constructor(
    private readonly createParkSlot: CreateParkSlot,
    private readonly deleteParkSlot: DeleteParkSlot,
    private readonly listParkSlots: ListParkSlot,
  ) { }

  @Post()
  createPark(@Body() body: CreateParkDTO) {
    this.createParkSlot.handle(body);
    return HttpStatus.NO_CONTENT;
  }

  @Get()
  async listPark() {
    const parkSlots = await this.listParkSlots.handle();
    return parkSlots;
  }

  @Delete(':id')
  async deletePark(@Param('id') parkSlotId: string): Promise<void> {
    try {
      await this.deleteParkSlot.handle(parkSlotId);
    } catch (error) {
      // Handle the error or send an appropriate response
      console.error(`Error in deletePark for ID: ${parkSlotId}`, error);
      // Send an appropriate response, e.g., return 404 for not found
    }
  }
}
