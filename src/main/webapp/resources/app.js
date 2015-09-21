var todo = angular.module('todo', []);

todo.controller('todoController',
    function todoController($scope, entityData) {
        $scope.allList = entityData.entities;

        /*		var collection = function (name, age) {
         this.name = name;
         this.age = age;
         };

         var getCollection = function (){
         return [
         new  collection ("First employee", 21),
         new  collection ("Second employee", 44),
         new  collection ("Third employee", 34)
         ];
         };

         $scope.employeeData = {
         collection: getCollection()
         };
         */
    }
);

todo.controller('editTodoController',

    function editTodoController($scope, entityData) {
        $scope.SaveEntity = function (entity) {
            var newEntity = new function () {
                this.title = entity.title;
                this.description = entity.description;
                this.impotant = 1;
                this.category = "Category #2";
            }


            entityData.entities.push(newEntity);
        };

        $scope.CancelEdit = function () {
            window.alert('alert:[' + ']');
        };

    }
);

todo.factory('entityData', function () {
        return {
            entities: [{
                'title': 'Приготовить обед',
                'description': 'Готовка обеда на каждый день',
                'impotant': 1,
                'category': "Category #1"
            },
                {
                    'title': 'Сходить за молоком',
                    'description': 'Принести молоко из магазина и вскипять его',
                    'impotant': 2,
                    'category': "Category #1"
                }
            ]

        };
    }
)