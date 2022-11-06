import { PartialType } from '@nestjs/mapped-types';
import { MaxLength } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @MaxLength(20)
    title: string;

    @MaxLength(200)
    content: string;
}
