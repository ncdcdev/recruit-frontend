import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateContentDTO {
  @ApiProperty({ description: '紐づく親コンテンツID', example: 1 })
  @Type(() => Number)
  @IsNumber()
  parentId: number;

  @ApiProperty({ description: 'コンテンツのタイトル', example: 'Hello Title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'コンテンツのボディ', example: 'Hello Body' })
  @IsOptional()
  @IsString()
  body?: string;
}

export class UpdateContentDTO {
  @ApiProperty({ description: 'コンテンツのタイトル', example: 'Update Title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'コンテンツのボディ', example: 'Update Body' })
  @IsOptional()
  @IsString()
  body?: string;
}
