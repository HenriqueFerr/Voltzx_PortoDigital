import { Injectable } from '@nestjs/common';
import { CreateLandDto } from './dto/create-land.dto';

@Injectable()
export class LandsService {
  private lands: any[] = []; // Simulando um banco de dados em memória

  create(data: CreateLandDto) {
    const newLand = { id: Date.now().toString(), ...data };
    this.lands.push(newLand);
    return newLand;
  }

  findAll() {
    return this.lands;
  }

  findOne(id: string) {
    return this.lands.find(land => land.id === id);
  }

  update(id: string, data: Partial<CreateLandDto>) {
    const landIndex = this.lands.findIndex(land => land.id === id);
    if (landIndex === -1) {
      return { message: 'Terreno não encontrado' };
    }
    this.lands[landIndex] = { ...this.lands[landIndex], ...data };
    return this.lands[landIndex];
  }

  remove(id: string) {
    const landIndex = this.lands.findIndex(land => land.id === id);
    if (landIndex === -1) {
      return { message: 'Terreno não encontrado' };
    }
    const removed = this.lands.splice(landIndex, 1);
    return removed[0];
  }
}


