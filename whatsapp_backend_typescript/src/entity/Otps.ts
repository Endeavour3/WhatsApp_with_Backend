import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Contacts } from './Contacts';

@Entity()
export class Otps {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  otp: string;

  @OneToOne(() => Contacts, (contact) => contact.otps)
  @JoinColumn()
  contact: Contacts;
}
