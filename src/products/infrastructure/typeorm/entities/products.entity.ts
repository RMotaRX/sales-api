import { ProductModel } from '@/products/domain/models/products.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('produtos')
export class Product implements ProductModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'nome' })
  name: string;

  @Column('decimal', { name: 'preco' })
  price: number;

  @Column('int', { name: 'quantidade' })
  quantity: number;

  @CreateDateColumn({ name: 'criado_em' })
  created_at: Date;

  @UpdateDateColumn({ name: 'atualizado_em' })
  updated_at: Date;
}
