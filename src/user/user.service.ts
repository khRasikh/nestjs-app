import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose';
import { User , UserDocument} from './user.schema';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
  private readonly Users: IUser[] = [{unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"}]; 
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  // create(createUserDto: CreateUserDto) {
  //   // return 'This action adds a new user';
  //   this.Users.push({unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"})
  //   this.Users.push({unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"})
  //   return {success: true, message: "New Record has been added successfully", Data:  this.Users} 
  // }
  
  async create(userData: CreateUserDto): Promise<User> {
    const createdCat = new this.UserModel(userData);
    return createdCat.save();
  }

  findAll() {
    // return `This action returns all user`;
    this.Users.push({unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"})
    this.Users.push({unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"})
    this.Users.push({unique_no: "xyz100", name: "khudadad", email: "kh.rasikh542", password: "abcd123", createdAt: "2022-03-30", updatedAt: "2022-02-10"})
    return this.Users; 
  }
  //fetch data from DB
  async listAllUser(): Promise<UserDocument[]> {
    return this.UserModel.find().exec();
  }

  //fetch single data from DB
  async singleUser(unique_no: string): Promise<UserDocument[]> {
    return this.UserModel.find({unique_no: unique_no} ).exec(); 
  }

  async removeUser(unique_no: string): Promise<UserDocument[]> {
    return this.UserModel.remove({unique_no: unique_no}).exec(); 
  }

  async updateUsers(unique_no: string): Promise<UserDocument[]> {
    // return this.UserModel.find({unique_no: unique_no} ).exec(); 
    // Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)
    // return this.UserModel.findByIdAndUpdate({unique_no}, {name: "new Name"});  
    const userData = {
      name: "Rasikh", 
      email: "khudadad.rasikh@vertrical.com", 
      password: "rasikh123"
    }
    // const createdCat = new this.UserModel(userData);
    const updateUser = await this.UserModel.findByIdAndUpdate(unique_no, {userData}, {new: true})
    return updateUser.update()
 
  }

  async updateUser(id: string, updatedData) {
    const myUpdate = await this.UserModel
      .findByIdAndUpdate(id, updatedData)
      .setOptions({ overwrite: true, new: true })
    if (!myUpdate) {
      throw new NotFoundException();
    }
    return myUpdate;
  }

  findOne(id: string): CreateUserDto {
    // return `This action returns a #${id} user`;
    return this.Users.find(i => i.unique_no === id )
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
 
}
