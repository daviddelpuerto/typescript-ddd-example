import { BaseEntity, Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
    id!: string;

  @Column({
    unique: true,
  })
  @Generated('uuid')
    uuid!: string;

  @Column({
    unique: true,
    nullable: false,
  })
    email!: string;

  @Column({
    nullable: false,
    default: false,
  })
    is_email_verified!: boolean;

  @Column({
    nullable: false,
  })
    password!: string;

  @CreateDateColumn()
    created_at!: Date;

  @UpdateDateColumn()
    updated_at!: Date;

}