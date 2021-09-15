var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Details = /** @class */ (function () {
    function Details(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    return Details;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, profession) {
        var _this = _super.call(this, name, profession) || this;
        _this.name = name;
        _this.profession = profession;
        return _this;
    }
    Person.prototype.details = function () {
        return this.name + " is " + this.profession;
    };
    return Person;
}(Details));
var obj1 = new Person("A", "android developer");
var obj2 = new Person("B", "PHP developer");
console.log(obj1.details());
console.log(obj2.details());
