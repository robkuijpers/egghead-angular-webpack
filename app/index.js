import angular from 'angular';
import regsiterDirectives from './directives'

//const angular = require('angular');

if(ON_TEST) {
  var angularMocks = require('angular-mocks/angular-mocks');
}
const ngModule = angular.module('app', []);

//require('./directives')(ngModule);
regsiterDirectives(ngModule);