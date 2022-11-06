import { MaxLength } from 'class-validator';

export class CreatePostDto {
    @MaxLength(20)
    title: string;

    @MaxLength(200)
    content: string;

    hash: string;

    weather: string;
}