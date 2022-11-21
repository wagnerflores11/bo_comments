import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'comments',
})
export class Comment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  user_id: string;

  @Column({
    nullable: false,
  })
  user_name: string;

  @Column({
    nullable: false,
  })
  resource_name: string;

  @Column({
    nullable: false,
  })
  resource_id: string;

  @Column({
    nullable: false,
  })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    nullable: false,
  })
  teste: string;
}
