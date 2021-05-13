import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContentDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;
}
