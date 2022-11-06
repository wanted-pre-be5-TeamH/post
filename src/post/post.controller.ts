import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Put(':id/:password')
  updatePost(
    @Query('id') id: string,
    @Query('password') pw: string,
    @Body() dto: UpdatePostDto
  ) {
    return this.postService.updatePost(id, pw, dto);
  }

  @Delete(':id/:password')
  remove(@Param('id') id: string, @Param('password') pw: string,) {
    return this.postService.remove(id, pw);
  }

  @Get()
  getPost(@Query('page') page:string, @Query('count') count: string) {
    return this.postService.getPostPagination(page, count);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }
}
