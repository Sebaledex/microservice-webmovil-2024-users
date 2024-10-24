import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMsg } from 'src/common/constants';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMsg.CREATE)
  create(@Payload() userDTO: CreateUserDto) {
    return this.userService.create(userDTO);
  }

  @MessagePattern(UserMsg.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMsg.FIND_ONE)
  findOne(@Payload() email: string) {
    return this.userService.findOne(email);
  }
  @MessagePattern(UserMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.userService.update(payload.id, payload.userDTO);
  }

  @MessagePattern(UserMsg.DELETE)
  delete(@Payload() id: string) {
    return this.userService.delete(id);
  }
}
