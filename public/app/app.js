/* global angular */
angular.module('app', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    template: `<question></question>
    `
  })
  .otherwise({ redirectTo: '/' })
})
.directive('newOption', function () {
  return {
    template: `
    Add option: <input type="text" ng-model="option">
    <button class="btn btn-primary" ng-click="ctrl.addOption(option)">Add</button>
    `
  }
})
.directive('question', function () {
  return {
    controller: function ($scope) {
      this.options = [2, 'test']
      this.addOption = function (text) {
        this.options.push(text)
      }
      this.removeOption = function (index) {
        this.options.splice(index, 1)
      }
    },
    controllerAs: 'ctrl',
    template: `
    {{ctrl.title}}
    <ul>
      <li ng-repeat="(index, option) in ctrl.options track by $index">
      {{option}}
      <button class="btn btn-danger" ng-click="ctrl.removeOption(index)">Del</button>
      </li>
    </ul>
    <new-option></new-option>
    `
  }
})
