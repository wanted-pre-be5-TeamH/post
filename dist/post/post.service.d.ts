import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePostDto): Promise<import(".prisma/client").Post | "PW must contain at least one number and length must be over 6 characters">;
    updatePost(id: string, pw: string, dto: UpdatePostDto): Promise<any>;
    remove(id: string, pw: string): Promise<any>;
    getPostPagination(page: string, count: string): Promise<import(".prisma/client").Post[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
}
