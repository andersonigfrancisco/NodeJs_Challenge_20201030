import {
  Entity,
  PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, ManyToMany
} from "typeorm";

import { v4 as uuid } from 'uuid';


import { PurchasePlaces } from './PurchasePlaces'

@Entity("Cities")

class Cities {
  @PrimaryColumn()
  readonly id: string;

  @PrimaryColumn()
  readonly name: string;

  @Column()
  PurchasePlaces_id: string;

  @JoinColumn({ name: "PurchasePlaces_id" })
  @ManyToOne(() => PurchasePlaces)
  PurchasePlaces: PurchasePlaces;

  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id)
      this.id = uuid();
  }
}
export { Cities }