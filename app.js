(function() {
  var app = angular.module('store', ['store-directives']);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function (product){
      this.review.createdOn = Date.now();
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
    reviews: [],
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
      reviews: [],
    },
  ]
})();
