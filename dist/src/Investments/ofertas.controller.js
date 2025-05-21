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
exports.OfertasController = void 0;
const common_1 = require("@nestjs/common");
const ofertas_service_1 = require("./ofertas.service");
const create_oferta_dto_1 = require("./dto/create-oferta.dto");
let OfertasController = class OfertasController {
    constructor(ofertasService) {
        this.ofertasService = ofertasService;
    }
    create(data) {
        return this.ofertasService.create(data);
    }
    findAll() {
        return this.ofertasService.findAll();
    }
    findOne(id) {
        return this.ofertasService.findOne(id);
    }
    update(id, data) {
        return this.ofertasService.update(id, data);
    }
    remove(id) {
        return this.ofertasService.remove(id);
    }
};
exports.OfertasController = OfertasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_oferta_dto_1.CreateOfertaDto]),
    __metadata("design:returntype", void 0)
], OfertasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OfertasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OfertasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OfertasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OfertasController.prototype, "remove", null);
exports.OfertasController = OfertasController = __decorate([
    (0, common_1.Controller)('ofertas'),
    __metadata("design:paramtypes", [ofertas_service_1.OfertasService])
], OfertasController);
//# sourceMappingURL=ofertas.controller.js.map