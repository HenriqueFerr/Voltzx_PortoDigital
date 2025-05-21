"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetosService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ProjetosService = class ProjetosService {
    async create(data) {
        return prisma.project.create({ data });
    }
    async findAll() {
        return prisma.project.findMany({ include: { landProject: true, company: true } });
    }
    async findOne(id) {
        return prisma.project.findUnique({ where: { id }, include: { landProject: true, company: true } });
    }
    async update(id, data) {
        return prisma.project.update({ where: { id }, data });
    }
    async remove(id) {
        return prisma.project.delete({ where: { id } });
    }
};
exports.ProjetosService = ProjetosService;
exports.ProjetosService = ProjetosService = __decorate([
    (0, common_1.Injectable)()
], ProjetosService);
//# sourceMappingURL=projetos.service.js.map