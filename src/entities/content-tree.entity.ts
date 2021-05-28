import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class ContentTree {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ManyToOne(() => Content, { primary: false, onDelete: 'CASCADE' })
  @JoinColumn()
  parentContent: Content;

  @ManyToOne(() => Content, { primary: false, onDelete: 'CASCADE' })
  @JoinColumn()
  chiledContent: Content;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
