import { Inject } from '@nestjs/common';
import { ParkSlotRepository } from 'src/domain/interface/ParkSlotRepository.interface';

export class DeleteParkSlot {
  public constructor(
    @Inject(ParkSlotRepository)
    private parkSlotRepository: ParkSlotRepository,
  ) { }

  public async handle(id: string): Promise<void> {
    try {
      await this.parkSlotRepository.deleteById(id);
    } catch (error) {
      console.error(`Error in DeleteParkSlot for ID: ${id}`, error);
      throw error; // Rethrow the error or handle it accordingly
    }
  }
}
