import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
  ) {

  }

  async create(dto: CreatePostDto) {
    console.log(dto)
    try {
      const post = await this.prisma.post.create({
        data:{
          ...dto
        }
      })
      return post;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Coupon Create Err : ${err}`)
      }
      throw err;
    }
  }

  async updatePost(id: string, dto: CreatePostDto){
    try{
      const postId = parseInt(id);
      const result = await this.prisma.post.update({
        where: {
          id: postId
        },
        data: {
          ...dto
        }
      })
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Coupon Create Err : ${err}`)
      }
      throw err;
    }
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
