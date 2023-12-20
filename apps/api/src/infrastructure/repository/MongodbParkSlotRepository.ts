import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParkSlot } from 'src/domain/entities/ParkSlot';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';
import { ParkSlotDocument, ParkSlotModelName } from './parkslot.model';

export class MongodbParkSlotRepository implements ParkSlotRepository {
  public constructor(
    @InjectModel(ParkSlotModelName)
    private parkSlotModel: Model<ParkSlotDocument>,
  ) { }

  public async create(parkSlot: ParkSlot): Promise<void> {
    await this.parkSlotModel.create(parkSlot);
  }

  public async list(): Promise<ParkSlot[]> {
    const listParkSlots = await this.parkSlotModel.find({});
    return listParkSlots.map((state) => ParkSlot.fromState(state));
  }

  public async deleteById(parkSlotId: string): Promise<void> {

    try {
      await this.parkSlotModel.deleteOne({ id: parkSlotId });

      console.log(`ParkSlot with ID ${parkSlotId} deleted successfully`);
    } catch (error) {
      console.error(`Error in deleteById for ID: ${parkSlotId}`, error);
      throw error; // Rethrow the error or handle it accordingly
    }

  }
}
