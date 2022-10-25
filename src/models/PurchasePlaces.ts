import {
  Entity,
  PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, ManyToMany
} from "typeorm";

import { v4 as uuid } from 'uuid';



@Entity("PurchasePlaces")

class PurchasePlaces {
  @PrimaryColumn()
  readonly id: string;

  @PrimaryColumn()
  readonly name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id)
      this.id = uuid();
  }
}
export { PurchasePlaces }