angular.module('starter.controllers', ['ionic.cloud'])

.controller('LoginCtrl', function($scope, $ionicAuth, $ionicUser) {
    console.log('anda');
})


/*
.controller('RegistroCtrl', function($scope, user) {
    $scope.registro = function(us, pass, pass2, em) {

        user.esString(us);
        user.passOk(pass, pass2);
        user.emailOk(em);
        console.log(us);
        console.log(pass);
        console.log(pass2);
        console.log(em);

    }
})

.controller('PerfilCtrl', function($scope, $http) {

    /* $http.get("http://app.eatnow.com.do/regions").success(function(data){
       
       console.log(data);
})

});*/