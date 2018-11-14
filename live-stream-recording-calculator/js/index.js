var app = angular.module('bmrApp', []);

//TextCtrl
app.controller('headerCtrl', function($scope){
  $scope.header = "Qarva aQua Recording Calculator";
  $scope.mySite = "Nikolay";
});

//MainCtrl
app.controller('mainCtrl', function ($scope){
  $scope.stats = {
    channels: 0,
    bitrate: 0,
    recorging: 0,
    space: 0,
    spaceplus: 0};
  
  var computeBMR = function(){
  
    $scope.stats.space = ($scope.stats.channels) * ($scope.stats.bitrate / 8 * 60) * ($scope.stats.recorging / 10);
    $scope.stats.spaceplus = ($scope.stats.channels) * ($scope.stats.bitrate / 8 * 60) * ($scope.stats.recorging / 10) * 1.4;

  }
  
  
  $scope.$watch('stats.channels', computeBMR);
  $scope.$watch('stats.bitrate', computeBMR);
  $scope.$watch('stats.recorging', computeBMR);
});