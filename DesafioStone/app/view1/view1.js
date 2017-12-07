'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        var contador = 30;
        $scope.contador = contador;
        function loadJSON(path, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success)
                            success(JSON.parse(xhr.responseText));
                    } else {
                        if (error)
                            error(xhr);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
        $scope.getCotacao = function () {
            loadJSON('https://forex.1forge.com/1.0.2/quotes?pairs=USDEUR,USDGBP,USDJPY,USDCNH&api_key=eBQyTZiqrgLVPSFHWCDpJ23tepFYnEXt',
                function (data) {
                    $scope.Lista = data;
                    console.log(data);
                    $scope.contador = 30;
                    setTimeout($scope.getCotacao, 30000);
                    $scope.$apply();
                },
                function (xhr) {
                    console.error(xhr);
                    $scope.$apply();
                }
            );
        }

        $scope.reduzirContador = function () {
            setTimeout(function () {
                $scope.contador = $scope.contador - 1;
                console.log('passeo');
                setTimeout($scope.reduzirContador, 0);
                $scope.$apply();
                $scope.reduzirContador;
            }, 1000);
        }
        $scope.reduzirContador();
        $scope.getCotacao();
    }]);