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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetosController = void 0;
const common_1 = require("@nestjs/common");
const projetos_service_1 = require("./projetos.service");
const create_projeto_dto_1 = require("./dto/create-projeto.dto");
let ProjetosController = class ProjetosController {
    constructor(projetosService) {
        this.projetosService = projetosService;
    }
    create(data) {
        return this.projetosService.create(data);
    }
    findAll() {
        return this.projetosService.findAll();
    }
    findOne(id) {
        return this.projetosService.findOne(id);
    }
    update(id, data) {
        return this.projetosService.update(id, data);
    }
    remove(id) {
        return this.projetosService.remove(id);
    }
};
exports.ProjetosController = ProjetosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_projeto_dto_1.CreateProjetoDto]),
    __metadata("design:returntype", void 0)
], ProjetosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjetosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjetosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProjetosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjetosController.prototype, "remove", null);
exports.ProjetosController = ProjetosController = __decorate([
    (0, common_1.Controller)('projetos'),
    __metadata("design:paramtypes", [projetos_service_1.ProjetosService])
], ProjetosController);
//# sourceMappingURL=projetos.controller.js.map