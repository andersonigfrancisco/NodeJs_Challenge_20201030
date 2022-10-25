import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as NewId } from 'uuid';

@Entity()
class Users {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password:string;

  @Column()
  admin: boolean;

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
export { Users }
