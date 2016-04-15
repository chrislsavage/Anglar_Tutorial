(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function () {
               this.current = 0;
  this.setCurrent = function (value){
    if (value) {
     this.current = value;
      } else {
        this.current = 0;
      }
  };
               });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function (product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Dode you want one?',
    canPurchase: true,
    soldOut: false,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Pen-talking about this gem for a long time",
      canPurchase: true,
      soldOut: false,
      images: [
        "images/gem-01.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
    },
  ]
})();
