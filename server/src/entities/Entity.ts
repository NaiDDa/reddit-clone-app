import { instanceToPlain } from "class-transformer";
import { 
  BaseEntity, 
  CreateDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn 
} from "typeorm";
export default abstract class Entity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    toJSON() {
        return instanceToPlain(this);
      }
}