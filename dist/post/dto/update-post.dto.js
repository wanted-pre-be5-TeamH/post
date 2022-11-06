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
exports.UpdatePostDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
const create_post_dto_1 = require("./create-post.dto");
class UpdatePostDto extends (0, mapped_types_1.PartialType)(create_post_dto_1.CreatePostDto) {
}
__decorate([
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "content", void 0);
exports.UpdatePostDto = UpdatePostDto;
//# sourceMappingURL=update-post.dto.js.map