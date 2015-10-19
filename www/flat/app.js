(function() {
  angular.module('app', ['onsen'])
  .controller('MasterController', function($scope) {
    this.items = [
      {
        title: 'Item 1 Title',
        label: '4h',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Another Item Title',
        label: '6h',
        desc: 'Ut enim ad minim veniam.'
      },
      {
        title: 'Yet Another Item Title',
        label: '1day ago',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Yet Another Item Title',
        label: '1day ago',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ];

    this.showDetail = function(item) {
      $scope.myNavigator.pushPage('detail.html', {item: item});
    };
  })

  .controller('DetailController', function($scope) {
    this.item = $scope.myNavigator.getCurrentPage().options.item;
  });
})();
