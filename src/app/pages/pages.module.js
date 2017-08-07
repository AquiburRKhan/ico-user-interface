/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.changePassword',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.transactions',
    'BlurAdmin.pages.login',
    'BlurAdmin.pages.register',
    'BlurAdmin.pages.verification',
    'BlurAdmin.pages.companyNameRequest',
    'BlurAdmin.pages.verifyMobile',
    'BlurAdmin.pages.confirmMobile'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
