import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class ContentTree {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @OneToOne(() => Content)
  parentContent: Content;

  @OneToOne(() => Content)
  chiledContent: Content;

  @Column()
  order: number;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
