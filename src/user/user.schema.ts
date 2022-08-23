import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document; //it means the User and Document should be same

@Schema()
export class User {
  @Prop({ required: true })
  unique_no: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;

  //in more complex scenarios, define: 
// @Prop([String])
// tags: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);