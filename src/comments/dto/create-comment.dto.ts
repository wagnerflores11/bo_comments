import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  resource_name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  resource_id: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  comment: string;
}
