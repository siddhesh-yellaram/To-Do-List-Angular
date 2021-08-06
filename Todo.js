var app = angular.module("todoList", []);
app.controller("todo", function ($scope) {
    $scope.list = ['Read A Book', 'Watch a Movie']
    $scope.addItem = function () {
        $scope.list.push($scope.addToDo);
    }
})