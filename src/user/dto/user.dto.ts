import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';

export class UserDTO {
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export class CreateUserDto {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}

export class UpdateUserDto extends PartialType(UserDTO) {}
