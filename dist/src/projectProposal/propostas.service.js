"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropostasService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let PropostasService = class PropostasService {
    async create(data) {
        return prisma.projectProposal.create({ data });
    }
    async findAll() {
        return prisma.projectProposal.findMany({ include: { projects: true, lands: true } });
    }
    async findOne(id) {
        return prisma.projectProposal.findUnique({ where: { id }, include: { projects: true, lands: true } });
    }
    async update(id, data) {
        return prisma.projectProposal.update({ where: { id }, data });
    }
    async remove(id) {
        return prisma.projectProposal.delete({ where: { id } });
    }
};
exports.PropostasService = PropostasService;
exports.PropostasService = PropostasService = __decorate([
    (0, common_1.Injectable)()
], PropostasService);
//# sourceMappingURL=propostas.service.js.map