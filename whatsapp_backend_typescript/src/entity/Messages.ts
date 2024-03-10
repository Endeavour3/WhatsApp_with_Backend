import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contacts } from './Contacts';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message_content: string;

  @ManyToOne(() => Contacts, (contact) => contact.sent_messages)
  send_from_id: Contacts;

  @ManyToOne(() => Contacts, (contact) => contact.received_messages)
  send_to_id: Contacts;

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column({ type: 'datetime', default: null })
  delivered_at: Date;

  @Column({ type: 'datetime', default: null })
  read_at: Date;
}
