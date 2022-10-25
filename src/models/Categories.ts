import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as NewId } from 'uuid';

@Entity("Categories")
class Categories {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {

    if (!this.id) {
      this.id = NewId();
    }
  }
}
export { Categories }
