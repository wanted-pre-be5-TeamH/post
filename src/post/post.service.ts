import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import * as argon from 'argon2';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
  ) {

  }

  async create(dto: CreatePostDto) {
    console.log(dto)
    try {
      const regExp = /[0-9]/;
      if (regExp.test(dto.hash) && dto.hash.length > 5) {
        //비번에 숫자 포함, 6자 이상
        const newHash = await argon.hash(dto.hash);
        const post = await this.prisma.post.create({
          data: {
            title: dto.title,
            content: dto.content,
            hash: newHash,
            weather: dto.weather
            // ...dto
          }
        })
        // console.log(post)
        // hash는 리턴하지 않음
        delete post.hash;
        return post;
      } else {
        //비번에 숫자 포함되지 않거나 6자 이상이 아님
        return 'PW must contain at least one number and length must be over 6 characters'
      }

    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Post Create Err : ${err}`)
      }
      throw err;
    }
  }

  async updatePost(id: string, pw: string, dto: UpdatePostDto) {
    try {
      const postId = parseInt(id);
      const post = await this.prisma.post.findFirst({
        where: {
          id: postId
        }
      })
      if (post) {
        const pwMatches = await argon.verify(post.hash, pw);
        let result;
        if (pwMatches) {
          result = await this.prisma.post.update({
            where: {
              id: postId
            },
            data: {
              ...dto
            }
          })
          return result;
        } else {
          return 'PW is wrong'
        }
      } else {
        return 'ID is wrong'
      }
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Post Update Err : ${err}`)
      }
      throw err;
    }
  }

  async remove(id: string, pw: string) {
    try {
      const postId = parseInt(id);
      const post = await this.prisma.post.findFirst({
        where: {
          id: postId
        }
      })
      if (post) {
        const pwMatches = await argon.verify(post.hash, pw);
        let result;
        if (pwMatches) {
          result = await this.prisma.post.delete({
            where: {
              id: postId
            },
          })
          return result;
        } else {
          return 'PW is wrong'
        }
      } else {
        return 'ID is wrong'
      }
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Post Update Err : ${err}`)
      }
      throw err;
    }
  }

  async getPostPagination(page: string, count: string) {
    try {
      const pageNumber = parseInt(page);
      const countNumber = parseInt(count);
      // paginating
      const posts = this.prisma.post.findMany({
        skip: pageNumber * countNumber,
        take: countNumber,
        orderBy: {
          createdAt: 'desc'
        }
      })
      return posts;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        console.log(`Post Update Err : ${err}`)
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

}
