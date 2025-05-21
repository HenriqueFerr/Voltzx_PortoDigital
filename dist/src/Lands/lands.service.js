"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandsService = void 0;
const common_1 = require("@nestjs/common");
let LandsService = class LandsService {
    constructor() {
        this.lands = [];
    }
    create(data) {
        const newLand = Object.assign({ id: Date.now().toString() }, data);
        this.lands.push(newLand);
        return newLand;
    }
    findAll() {
        return this.lands;
    }
    findOne(id) {
        return this.lands.find(land => land.id === id);
    }
    update(id, data) {
        const landIndex = this.lands.findIndex(land => land.id === id);
        if (landIndex === -1) {
            return { message: 'Terreno não encontrado' };
        }
        this.lands[landIndex] = Object.assign(Object.assign({}, this.lands[landIndex]), data);
        return this.lands[landIndex];
    }
    remove(id) {
        const landIndex = this.lands.findIndex(land => land.id === id);
        if (landIndex === -1) {
            return { message: 'Terreno não encontrado' };
        }
        const removed = this.lands.splice(landIndex, 1);
        return removed[0];
    }
};
exports.LandsService = LandsService;
exports.LandsService = LandsService = __decorate([
    (0, common_1.Injectable)()
], LandsService);
//# sourceMappingURL=lands.service.js.map