var todo = angular.module('todo', ['ngDialog']);

todo.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default ngdialog-theme-flat',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log('default pre-close callback');
        }
    });
}]);


todo.controller('saveCtrl', function ($scope, $http, ngDialog) {

    $scope.saveForm = function () {

        ngDialog.close();

        console.log('ngDialog save: ' + JSON.stringify($scope));

        var formObj = {
            'amount': $scope.entity.amount,
            'type': $scope.entity.type,
            'date': $scope.entity.date,
            'description': $scope.entity.description
        };

        console.log('ngDialog save: ' + JSON.stringify(formObj));

        $http({
            method: 'POST',
            url: '/WebService.asmx/SaveData',
            data: "{'pFormData':" + JSON.stringify(formObj) + "}",
            contentType: 'application/json;charset=utf-8',
            dataType: "json"
        }).then(function (response) {
            if (response.data.d == true)
                alert('saved: ' + response.data.d);
            else
                alert('not saved: ' + response.data.d);
        });
    };

});


todo.controller('MainDialog', function ($scope, $rootScope, ngDialog, $timeout) {
    $rootScope.jsonData = '{"foo": "bar", "nameTitle": "This is only one"}';
    $rootScope.theme = 'ngdialog-theme-default';


    $scope.showDialog = function (title, value) {

        $scope.form = {};

        ngDialog.open({
            template: 'firstDialog',
            controller: 'saveCtrl',

            data: {
                nameTitle: title,
                date: new Date()
            },
            className: 'ngdialog-theme-default ngdialog-theme-flat'
        });

    }

    $scope.directivePreCloseCallback = function (value) {
        if (confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
            return true;
        }
        return false;
    };
    $scope.preCloseCallbackOnScope = function (value) {
        if (confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
            return true;
        }
        return false;
    };
    $scope.open = function () {
        var new_dialog = ngDialog.open({
            id: 'fromAService',
            template: 'popupTmpl.html',
            controller: 'InsideCtrl',
            data: {foo: 'from a service'}
        });
        // example on checking whether created `new_dialog` is open
        $timeout(function () {
            console.log(ngDialog.isOpen(new_dialog.id));
        }, 2000)
    };
    $scope.openDefault = function (title, value) {

        ngDialog.open({
            template: 'firstDialog',
            controller: 'InsideCtrl',
            nameTitle: 'For One only',
            data: {
                nameTitle: title,
                date: new Date()
            },
            className: 'ngdialog-theme-default ngdialog-theme-flat'
        });
    };
    $scope.openDefaultWithoutAnimation = function () {
        ngDialog.open({
            template: 'firstDialog',
            controller: 'InsideCtrl',
            className: 'ngdialog-theme-default',
            disableAnimation: true
        });
    };
    $scope.openDefaultWithPreCloseCallbackInlined = function () {


        ngDialog.open({
            template: 'firstDialogId',
            controller: 'InsideCtrl',
            className: 'ngdialog-theme-default',
            preCloseCallback: function (value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                    return true;
                }
                return false;
            }
        });
    };
    $scope.openConfirm = function () {
        ngDialog.openConfirm({
            template: 'modalDialogId',
            className: 'ngdialog-theme-default'
        }).then(function (value) {
            console.log('Modal promise resolved. Value: ', value);
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
    };
    $scope.openConfirmWithPreCloseCallbackOnScope = function () {
        ngDialog.openConfirm({
            template: 'modalDialogId',
            className: 'ngdialog-theme-default',
            preCloseCallback: 'preCloseCallbackOnScope',
            scope: $scope
        }).then(function (value) {
            console.log('Modal promise resolved. Value: ', value);
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
    };
    $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
        ngDialog.openConfirm({
            template: 'dialogWithNestedConfirmDialogId',
            className: 'ngdialog-theme-default',
            preCloseCallback: function (value) {
                var nestedConfirmDialog = ngDialog.openConfirm({
                    template: '<p>Are you sure you want to close the parent dialog?</p>' +
                    '<div class="ngdialog-buttons">' +
                    '<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No' +
                    '<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes' +
                    '</button></div>',
                    plain: true,
                    className: 'ngdialog-theme-default'
                });
                return nestedConfirmDialog;
            },
            scope: $scope
        })
            .then(function (value) {
                console.log('resolved:' + value);
                // Perform the save here
            }, function (value) {
                console.log('rejected:' + value);
            });
    };
    $scope.openPlain = function () {
        $rootScope.theme = 'ngdialog-theme-plain';
        ngDialog.open({
            template: 'firstDialogId',
            controller: 'InsideCtrl',
            className: 'ngdialog-theme-plain',
            closeByDocument: false
        });
    };
    $scope.openPlainCustomWidth = function () {
        $rootScope.theme = 'ngdialog-theme-plain custom-width';
        ngDialog.open({
            template: 'firstDialogId',
            controller: 'InsideCtrl',
            className: 'ngdialog-theme-plain custom-width',
            closeByDocument: false
        });
    };
    $scope.openInlineController = function () {
        $rootScope.theme = 'ngdialog-theme-plain';
        ngDialog.open({
            template: 'withInlineController',
            controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;

                function count() {
                    $scope.exampleExternalData = 'Counter ' + (counter++);
                    timeout = $timeout(count, 450);
                }

                count();
                $scope.$on('$destroy', function () {
                    $timeout.cancel(timeout);
                });
            }],
            className: 'ngdialog-theme-plain'
        });
    };
    $scope.openControllerAsController = function () {
        $rootScope.theme = 'ngdialog-theme-plain';
        ngDialog.open({
            template: 'controllerAsDialog',
            controller: 'InsideCtrlAs',
            controllerAs: 'ctrl',
            className: 'ngdialog-theme-plain'
        });
    };
    $scope.openTemplate = function () {
        $scope.value = true;
        ngDialog.open({
            template: 'externalTemplate.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });
    };
    $scope.openTemplateNoCache = function () {
        $scope.value = true;
        ngDialog.open({
            template: 'externalTemplate.html',
            className: 'ngdialog-theme-plain',
            scope: $scope,
            cache: false
        });
    };
    $scope.openTimed = function () {
        var dialog = ngDialog.open({
            template: '<p>Just passing through!</p>',
            plain: true,
            closeByDocument: false,
            closeByEscape: false
        });
        setTimeout(function () {
            dialog.close();
        }, 2000);
    };
    $scope.openNotify = function () {
        var dialog = ngDialog.open({
            template: '<p>You can do whatever you want when I close, however that happens.</p>' +
            '<div class="ngdialog-buttons"><button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
            plain: true
        });
        dialog.closePromise.then(function (data) {
            console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
        });
    };
    $scope.openWithoutOverlay = function () {
        ngDialog.open({
            template: '<h2>Notice that there is no overlay!</h2>',
            className: 'ngdialog-theme-default',
            plain: true,
            overlay: false
        });
    };
    $rootScope.$on('ngDialog.opened', function (e, $dialog) {
        console.log('ngDialog opened: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.closed', function (e, $dialog) {
        console.log('ngDialog closed: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.closing', function (e, $dialog) {
        console.log('ngDialog closing: ' + $dialog.attr('id'));
    });
    $rootScope.$on('ngDialog.templateLoading', function (e, template) {
        console.log('ngDialog template is loading: ' + template);
    });
    $rootScope.$on('ngDialog.templateLoaded', function (e, template) {
        console.log('ngDialog template loaded: ' + template);
    });
});


todo.controller('firstDialogCtrl', function ($scope, $http, ngDialog) {

    $scope.dialogModel = {
        message: 'message from passed scope'
    };

    $scope.openSecond = function () {
        ngDialog.open({
            template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
            plain: true,
            closeByEscape: false,
            controller: 'SecondModalCtrl'
        });
    };

});


todo.controller('SecondModalCtrl', function ($scope, ngDialog) {
    $scope.closeSecond = function () {
        ngDialog.close();
    };
});

todo.controller('InsideCtrl', function ($scope, ngDialog) {
    $scope.dialogModel = {
        message: 'message from passed scope'
    };
    $scope.openSecond = function () {
        ngDialog.open({
            template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
            plain: true,
            closeByEscape: false,
            controller: 'SecondModalCtrl'
        });
    };
});

todo.controller('InsideCtrlAs', function () {
    this.value = 'value from controller';
});
todo.controller('SecondModalCtrl', function ($scope, ngDialog) {
    $scope.closeSecond = function () {
        ngDialog.close();
    };
});

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

