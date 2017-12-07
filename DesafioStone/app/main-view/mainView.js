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
        $scope.cadastrandoMesa = false;
        $scope.alterandoMesa = false;
        $scope.realizandoPedido = false;
        $scope.novaMesa = new Object();
        $scope.numeroMesaNova = 1;
        $scope.paginaAtual = "principal";

        ////dados mockados
        var alimento1 = new Object();
        alimento1.nome = "Cerveja Amanteigada";
        alimento1.valor = 26.00;
        alimento1.quantidade = 1;
        var alimento2 = new Object();
        alimento2.nome = "Suco de Abobora";
        alimento2.valor = 16.00;
        alimento2.quantidade = 1;
        var alimento3 = new Object();
        alimento3.nome = "Whisky de Fogo";
        alimento3.valor = 11.00;
        alimento3.quantidade = 1;
        var alimento4 = new Object();
        alimento4.nome = "Hidromel";
        alimento4.valor = 8.00;
        alimento4.quantidade = 1;
        var alimento5 = new Object();
        alimento5.nome = "Sapo de Chocolate";
        alimento5.valor = 11.90;
        alimento5.quantidade = 1;
        var alimento6 = new Object();
        alimento6.nome = "Vomitilha";
        alimento6.valor = 11.50;
        alimento6.quantidade = 1;


        $scope.popularInterface = function () {
            $scope.alimentos.push(alimento1, alimento2, alimento3, alimento4, alimento5, alimento6)
        };
        $scope.cadastrarMesa = function () {
            $scope.cadastrandoMesa = true;
            $scope.paginaAtual = "cadastroMesa"
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };

        $scope.cancelarCadastro = function () {
            $scope.cadastrandoMesa = false;
            $scope.alterandoMesa = false;
            $scope.paginaAtual = "principal";
        }

        $scope.salvarMesa = function () {
            if (validarNomeMesa($scope.novaMesa.nome)) {
                document.getElementById('alert').style.display = 'flex';
            }
            else {
                $scope.novaMesa.valorConsumido = 0;
                $scope.novaMesa.valorPago = 0;
                $scope.novaMesa.itensComprados = [];
                $scope.mesas.push($scope.novaMesa);
                $scope.novaMesa = new Object();
                $scope.cadastrandoMesa = false;
                $scope.paginaAtual = "principal";
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            }
        }

        $scope.selecionarMesa = function (mesa) {
            $scope.mesaSelecionada = mesa;
            $scope.alterandoMesa = true;
            $scope.paginaAtual = "alterandoMesa";
        };

        $scope.realizarPedido = function () {
            $scope.realizandoPedido = true;
            $scope.alterandoMesa = false;
            $scope.paginaAtual = "realizandoPedido";
        };

        $scope.voltarParaMesaSelecionada = function () {
            $scope.alterandoMesa = true;
            $scope.realizandoPedido = false;
            $scope.paginaAtual = "alterandoMesa";
        };

        $scope.adcionarItemMesa = function () {
            var itemExistente = false;
            for (var i = 0; i < $scope.mesas.length; i++) {
                if ($scope.mesas[i].nome === $scope.mesaSelecionada.nome) {
                    for (var k = 0; k < $scope.mesas[i].itensComprados.length; k++) {
                        if ($scope.mesas[i].itensComprados[k].nome === $scope.itemSelecionado.nome) {
                            $scope.mesas[i].itensComprados[k].quantidade++;
                            $scope.mesas[i].valorConsumido += $scope.itemSelecionado.valor
                            itemExistente = true;
                        }
                    }
                    if (!itemExistente) {
                        $scope.mesas[i].valorConsumido += $scope.itemSelecionado.valor
                        $scope.mesaSelecionada.itensComprados.push($scope.itemSelecionado)
                    }
                }
            };
        };

        $scope.selecionarItem = function (item) {
            $scope.itemSelecionado = item;
        };

        //Funções privadas
        function validarNomeMesa(nome) {
            if (!nome) {
                $scope.mensagemDeErro = "Nome vazio ou invalido"
                return true;
            };
            if (nome.length > 15) {
                $scope.mensagemDeErro = "O nome deve ter menos do que 15 caracteres"
                return true;
            };
            if ($scope.mesas.length) {
                for (var i = 0; i < $scope.mesas.length; i++) {
                    if ($scope.mesas[i].nome === nome) {
                        $scope.mensagemDeErro = "Nome de mesa ja existente"
                        return true;
                    }
                };
            }
        }

        $scope.popularInterface()

    }]);
