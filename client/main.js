import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('socially-ng1', [
    angularMeteor
  ])
    .controller('PartiesListCtrl', function($scope) {
        'ngInject';

        $scope.parties = [{
            'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep'
        }, {
            'name': 'All dubstep all the time',
            'description': 'Get it again.'
        }, {
            'name': 'Savage lounging',
            'description': 'Leisure suit required.'
        }];
    });