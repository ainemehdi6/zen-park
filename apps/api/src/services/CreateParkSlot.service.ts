import { CreateParkDTO } from 'src/dto/CreatePark.dto';
import { ParkSlot } from 'src/entities/ParkSlot';

export class CreateParkSlot {
  public constructor() {}

  public handle(payload: CreateParkDTO): void {
    const slot = ParkSlot.createByUser(payload);
    console.log(slot);
  }
}
