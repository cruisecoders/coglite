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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// internal imports
var auth_service_1 = require("../auth.service");
var common_services_1 = require("../../common/common.services");
var LogoutComponent = (function () {
    function LogoutComponent(router, authService, messageService, localStorageUtilityService) {
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.localStorageUtilityService = localStorageUtilityService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Call logout api
        this.authService.logout().subscribe(function (result) {
            // show message in toaster
            _this.messageService.showMessage({ type: 'success', message: 'Logged Out Successfully', duration: 3000 });
            // redirect to login page
            _this.router.navigate(['login']);
            window.location.reload();
        }, function (error) {
            // show error
            console.log(error);
        });
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace('/compiledSrc', ''),
        templateUrl: 'logout.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, common_services_1.MessageService,
        common_services_1.LocalStorageUtilityService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map