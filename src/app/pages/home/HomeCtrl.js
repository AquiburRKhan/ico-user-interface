(function () {
    'use strict';

    angular.module('BlurAdmin.pages.home')
        .controller('HomeCtrl', HomeCtrl);

    /** @ngInject */
    function HomeCtrl($rootScope,$scope,$location,cookieManagement,environmentConfig,$http,errorToasts,errorHandler,$window) {
        var vm = this;
        vm.token = cookieManagement.getCookie('TOKEN');
        $scope.loadingCurrencies = true;
        $scope.showView = '';

        vm.getUserAccounts = function(){
            if(vm.token) {
                $scope.loadingCurrencies = true;
                $http.get(environmentConfig.API + '/accounts/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    $scope.loadingCurrencies = false;
                    if (res.status === 200) {
                        $scope.currencies = res.data.data.results[0].currencies;
                        $scope.activeCurrency = $scope.currencies.find(function(element){
                            return element.currency.code === 'WAT';
                        });
                    }
                }).catch(function (error) {
                    $scope.loadingCurrencies = false;
                    if(error.status == 403){
                        errorHandler.handle403();
                        return;
                    }
                    errorToasts.evaluateErrors(error.data);
                });
            }
        };
        vm.getUserAccounts();

    }

})();