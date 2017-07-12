(function () {
    'use strict';

    angular.module('BlurAdmin.pages.settings')
        .directive('editTransactionsSwitch', editTransactionsSwitch);

    /** @ngInject */
    function editTransactionsSwitch() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/settings/transactionsSwitches/editTransactionsSwitch/editTransactionsSwitch.html'
        };
    }
})();
