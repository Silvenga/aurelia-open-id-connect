var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./open-id-connect-roles"], function (require, exports, aurelia_framework_1, open_id_connect_roles_1) {
    "use strict";
    var OpenIdConnectRoleFilterValueConverter = (function () {
        function OpenIdConnectRoleFilterValueConverter() {
        }
        OpenIdConnectRoleFilterValueConverter.prototype.toView = function (navigation, user) {
            return navigation.filter(function (element) {
                var roles = element.settings.roles;
                if (roles.indexOf(open_id_connect_roles_1.default.Everyone) >= 0) {
                    return true;
                }
                if (roles.indexOf(open_id_connect_roles_1.default.Authorized) >= 0) {
                    return user !== null;
                }
                if (roles.indexOf(open_id_connect_roles_1.default.Administrator) >= 0) {
                }
            });
        };
        return OpenIdConnectRoleFilterValueConverter;
    }());
    OpenIdConnectRoleFilterValueConverter = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.noView,
        aurelia_framework_1.valueConverter("open-id-connect-role-filter")
    ], OpenIdConnectRoleFilterValueConverter);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = OpenIdConnectRoleFilterValueConverter;
});
//# sourceMappingURL=open-id-connect-role-filter.js.map