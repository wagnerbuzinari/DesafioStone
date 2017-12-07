'use strict';

angular.module('myApp.mainView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mainView', {
            templateUrl: 'main-view/mainView.html',
            controller: 'MainViewCtrl'
        });
    }])

    .controller('MainViewCtrl', ['$scope', function ($scope) {
        $scope.mesas = [];
        $scope.alimentos = [];

         ////objetos mockados
        var alimento1 = new Object();
        alimento1.nome = "Cerveja Amanteigada";
        alimento1.valor = 26.00;
        var alimento2 = new Object();
        alimento2.nome = "Suco de Abobora";
        alimento2.valor = 16.00;
        var alimento3 = new Object();
        alimento3.nome = "Whisky de Fogo";
        alimento3.valor = 11.00;
        var alimento4 = new Object();
        alimento4.nome = "Hidromel";
        alimento4.valor = 8.00;
        var alimento5 = new Object();
        alimento5.nome = "Sapo de Chocolate";
        alimento5.valor = 11.90;
        var alimento6 = new Object();
        alimento6.nome = "Vomitilha";
        alimento6.valor = 11.50;

        $scope.popularInterface = function () {
            $scope.alimentos.push(alimento1, alimento2, alimento3, alimento4, alimento5, alimento6)
        };
        $scope.cadastrarMesa = function () {

        };

        $scope.popularInterface()

    }]);

////mesas
            //$scope.mesa1 = new { numero: "1", valorTotalConsumido: number, participantes: [] };
            //$scope.mesa2 = new { numero: "2", valorTotalConsumido: number, participantes: [] };
            //$scope.mesa3 = new { numero: "3", valorTotalConsumido: number, participantes: [] };
            ////clientes
            //$scope.pessoa1 = new { nome: "Harry Potter", valorConsumido: number }
            //$scope.pessoa2 = new { nome: "Hermione Granger", valorConsumido: number }
            //$scope.pessoa3 = new { nome: "Ronald Weasley", valorConsumido: number }
            //$scope.pessoa4 = new { nome: "Neville longbottom", valorConsumido: number }
            //$scope.pessoa5 = new { nome: "Dino Thomas", valorConsumido: number }

            //$scope.mesa1.participantes.push($scope.pessoa1, $scope.pessoa2, $scope.pessoa3)
            //$scope.mesa2.participantes.push($scope.pessoa2, $scope.pessoa4, $scope.pessoa5)
            //$scope.mesa3.participantes.push($scope.pessoa1, $scope.pessoa3, $scope.pessoa5)
            //$scope.mesas.push($scope.mesa1, $scope.mesa2, $scope.mesa3)