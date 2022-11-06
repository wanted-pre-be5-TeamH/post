import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePostDto): Promise<import(".prisma/client").Post>;
    updatePost(id: string, dto: CreatePostDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
