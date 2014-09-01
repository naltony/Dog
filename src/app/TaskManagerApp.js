(function() {

    function TaskManagerAppController(scope) {

        scope.task = {
            title: '',
            desc: '',
            done: false
        };
    }

    angular.module('taskApp',[]).controller('TaskManagerAppController', ['$scope', TaskManagerAppController])
})();