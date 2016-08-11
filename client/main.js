import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('socially-ng1', [
    angularMeteor
  ])
    .controller('PartiesListCtrl', function($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            parties() {
                return Parties.find({});
            }
        });
    });