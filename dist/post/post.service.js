"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const runtime_1 = require("@prisma/client/runtime");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        console.log(dto);
        try {
            const regExp = /[0-9]/;
            if (regExp.test(dto.hash) && dto.hash.length > 5) {
                const newHash = await argon.hash(dto.hash);
                const post = await this.prisma.post.create({
                    data: {
                        title: dto.title,
                        content: dto.content,
                        hash: newHash,
                        weather: dto.weather
                    }
                });
                delete post.hash;
                return post;
            }
            else {
                return 'PW must contain at least one number and length must be over 6 characters';
            }
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Post Create Err : ${err}`);
            }
            throw err;
        }
    }
    async updatePost(id, pw, dto) {
        try {
            const postId = parseInt(id);
            const post = await this.prisma.post.findFirst({
                where: {
                    id: postId
                }
            });
            if (post) {
                const pwMatches = await argon.verify(post.hash, pw);
                let result;
                if (pwMatches) {
                    result = await this.prisma.post.update({
                        where: {
                            id: postId
                        },
                        data: Object.assign({}, dto)
                    });
                    return result;
                }
                else {
                    return 'PW is wrong';
                }
            }
            else {
                return 'ID is wrong';
            }
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Post Update Err : ${err}`);
            }
            throw err;
        }
    }
    async remove(id, pw) {
        try {
            const postId = parseInt(id);
            const post = await this.prisma.post.findFirst({
                where: {
                    id: postId
                }
            });
            if (post) {
                const pwMatches = await argon.verify(post.hash, pw);
                let result;
                if (pwMatches) {
                    result = await this.prisma.post.delete({
                        where: {
                            id: postId
                        },
                    });
                    return result;
                }
                else {
                    return 'PW is wrong';
                }
            }
            else {
                return 'ID is wrong';
            }
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Post Update Err : ${err}`);
            }
            throw err;
        }
    }
    async getPostPagination(page, count) {
        try {
            const pageNumber = parseInt(page);
            const countNumber = parseInt(count);
            const posts = this.prisma.post.findMany({
                skip: pageNumber * countNumber,
                take: countNumber,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            return posts;
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Post Update Err : ${err}`);
            }
            throw err;
        }
    }
    findAll() {
        return `This action returns all post`;
    }
    findOne(id) {
        return `This action returns a #${id} post`;
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map