import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Messages } from './Messages';
import { Otps } from './Otps';

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  contact_no: string;

  @Column()
  contact_name: string;

  @Column({ default: null })
  profile_picture: string;

  @Column({ default: null })
  contact_about: string;

  @Column({ type: 'datetime', default: null })
  last_seen: Date;

  @OneToMany(() => Messages, (messages) => messages.send_from_id)
  sent_messages: Messages[];

  @OneToMany(() => Messages, (messages) => messages.send_to_id)
  received_messages: Messages[];

  @OneToMany(() => Otps, (otp) => otp.contact)
  otps: Otps[];
}
