import { uiModules } from 'ui/modules';

const app = uiModules.get('apps/opendistro_security/configuration', []);

app.directive('securitycFormNewResourceField', function () {
    return {
        template: require('./form_newresourcefield.html').default,
        replace: true,
        restrict: 'E'
    };
});
