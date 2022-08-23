import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express'; 

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

 @Get('list')
  listAllUser() {
    // return "list users"
    return this.userService.listAllUser();
  }
  @Get('list/:id')
  singleUser(@Param('id') pid: string) {
    return this.userService.singleUser(pid);
  }

  @Delete('list/:uid')
  removeUser(@Param('uid') uid: string) {
    return this.userService.removeUser(uid);
  }

  @Patch('list/:pid')
  updateUser(@Param('pid') pid: string, @Body() updatedData: CreateUserDto){
    return this.userService.updateUser(pid, updatedData)
  }
  //previous codes
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  /**more practices */
  @Post('me')
  PostUser(@Req() request: Request, @Body() data: CreateUserDto): object{
    // console.log(request)
    // return {succcess: true, route: request.route, body: request.body, Data: data}
    // const myData = {name: "rasikh", age: 22, date: "2022-08-09"}
    // return {success: true, code: request.statusCode, data: myData}
    return {date: data}
  }

}
