"use strict";
var Restaurant = /** @class */ (function () {
    function Restaurant(id_restaurant, name, address, lat, lng, kind_food) {
        this.id_restaurant = id_restaurant;
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.kind_food = kind_food;
        this.coordinates = [this.lat, this.lng];
        Restaurant.restaurants.push(this);
    }
    Object.defineProperty(Restaurant, "getListRestaurants", {
        get: function () {
            return Restaurant.restaurants;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getId", {
        // getters
        get: function () {
            return this.id_restaurant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getAddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getLat", {
        get: function () {
            return this.lat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getLng", {
        get: function () {
            return this.lng;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getKind_food", {
        get: function () {
            return this.kind_food;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getCoordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "setKind", {
        // setters
        set: function (kind_food) {
            this.kind_food = kind_food;
        },
        enumerable: false,
        configurable: true
    });
    Restaurant.restaurants = [];
    return Restaurant;
}());
