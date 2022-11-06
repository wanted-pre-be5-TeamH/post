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
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        console.log(dto);
        try {
            const post = await this.prisma.post.create({
                data: Object.assign({}, dto)
            });
            return post;
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Coupon Create Err : ${err}`);
            }
            throw err;
        }
    }
    async updatePost(id, dto) {
        try {
            const postId = parseInt(id);
            const result = await this.prisma.post.update({
                where: {
                    id: postId
                },
                data: Object.assign({}, dto)
            });
        }
        catch (err) {
            if (err instanceof runtime_1.PrismaClientKnownRequestError) {
                console.log(`Coupon Create Err : ${err}`);
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
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map