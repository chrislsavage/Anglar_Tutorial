(function(){
  var app = angular.module('store-directives', []);

  app.directive("productGallery", function(){
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery',
      };
  })

  app.directive("productReviews", function(){
    return {
      restrict: "E",
      templateUrl: "product-reviews.html",
    }
  })

  app.directive("productTabs", function(){
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function(){
        this.tab = 1;
        this.setTab = function(newValue){
          this.tab = newValue;
        };
        this.isSet = function(tabName){
          return this.tab === tabName;
        };
      },
      controllerAs: "tab",
    }
  });
// productTitle translates to product-title in HTML
  app.directive('productTitle', function(){
    return {
      retrict: "E", // E for element
      templateUrl: "product-title.html",
    };
  });
})();
