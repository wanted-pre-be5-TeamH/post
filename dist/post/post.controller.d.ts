import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post | "PW must contain at least one number and length must be over 6 characters">;
    updatePost(id: string, pw: string, dto: UpdatePostDto): Promise<any>;
    remove(id: string, pw: string): Promise<any>;
    getPost(page: string, count: string): Promise<import(".prisma/client").Post[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): string;
}
