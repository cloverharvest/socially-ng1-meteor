import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as PartiesList } from '../imports/ui/components/partiesList/partiesList';

angular.module('socially-ng1', [
    angularMeteor,
    PartiesList
]);