"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.firstName = 'vicky';
        this.lastName = 'bhatt';
        this.address = 'khatima';
        this.age = 25;
        this.isDisabled = false;
        this.coloumnSpan = 2;
        this.class = 'btn_class1 btn_class2';
        this.applyClass1 = false;
        this.showDetail = false;
        this.name = 'vicky';
    }
    EmployeeComponent.prototype.addClass = function () {
        this.applyClass1 = !this.applyClass1;
        this.ngClass = this.applyClass1 ? this.class : '';
        this.ngSytle = {
            'width': '100px',
            'height': '40px'
        };
    };
    EmployeeComponent.prototype.toogleDetail = function () {
        this.showDetail = !this.showDetail;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    })
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map