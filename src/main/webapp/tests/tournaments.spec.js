// this is noraml controller testing way 
//describe('myController function', function () {

//   describe('PlayerListComponent', function () {
//     var $scope;
//     var PlayerService;
//     var deferred;
//     var $controller;
//     var q;

//     beforeEach(module('app', 'tournaments', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngComponentRouter', 'tournaments', 'results'));

//     beforeEach(module('tournaments'));

//     beforeEach(inject(function ($rootScope,_$q_, _$controller_, _PlayerService_) {
//       $scope = $rootScope.$new();
//       $controller = _$controller_;
//       PlayerService = _PlayerService_;
//       deferred = _$q_.defer();
//       q = _$q_;
//       spyOn(PlayerService, 'upvotePlayer').and.return(deferred.promise);
//       $controller('PlayerListComponent', 
//               { '$scope': $scope , 
//                'PlayerService': PlayerService 
//               });
//     }));

//     it('PlayerListComponent test', function () {
//       angular.mock.module('ngComponentRouter','app','tournaments')
//       dump($controller)

//       var player = {};
//       deferred = q.defer();
//       $scope.upvotePlayer(player);
//       expect($scope.spices.length).toBe(3);
//     });
//   });
// });

// component testing way
describe('PlayerListComponent controller', function () {
  var $rootScope, $q, $componentController, controller, playerService;
  var deferred;
  beforeEach(module('app', 'tournaments', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngComponentRouter', 'tournaments', 'results'));
  dump(10)
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $q = $injector.get('$q');
    $componentController = $injector.get('$componentController');
    playerService = $injector.get('playerService');
  }));


  it('should upvote player', function () {
    deferred = $q.defer();
    deferred.resolve();
    var promise = deferred.promise;
    var player = { $id: 1 }
    spyOn(playerService, 'upvotePlayer').and.returnValue(promise);
    controller = $componentController('playersList',
      { $scope: {}, playerService: playerService }
    );
    controller.upvotePlayer();
    expect(playerService.upvotePlayer).toHaveBeenCalled();
    // expect(controller.player.isUpVoted).toEqual(user);
    // expect(2 - 3).toEqual(10);
  });

});

describe('PlayerDetailComponent controller', function () {
  var $rootScope, $q, $componentController, controller, PlayerService;

  beforeEach(module('app', 'tournaments', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngComponentRouter', 'tournaments', 'results'));
  let router = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $q = $injector.get('$q');
    $componentController = $injector.get('$componentController');
    PlayerService = $injector.get('playerService');
  }));
  //TODO

  it('goToPlayers', function () {
    // var player = { $id: 1 }

    controller = $componentController('playerDetail',
      { $scope: {}, PlayerService: PlayerService }
    );

   // dump(router.navigate.)
    expect(router.navigate).toHaveBeenCalledWith(['/playersList']);

    //expect(PlayerService.upvotePlayer).toHaveBeenCalled();
    //expect(controller.player.isUpVoted).toEqual(user);
  });

});