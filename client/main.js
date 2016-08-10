import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('socially-ng1', [
    angularMeteor
  ])
    .controller('PartiesListCtrl', function($scope) {
        'ngInject';

        $scope.helpers({
            parties() {
                return Parties.find({});
            }
        })
    });