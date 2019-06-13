// boolean
var isCool = true;
// number
var age = 55;
// string
var eyeColor = 'brown';
var favouriteQuote = "'I'm not old, i'm only " + age;
// array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// ============================
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[1];
var sizeName2 = Size.Small;
// ========================
// Any - (be careful)
var whatever = 'agh';
whatever = 5;
whatever = true;
whatever = basket;
// Void
var sing = function () {
    console.log('lalala');
};
// Never
var error = function () {
    // return 5
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
// ========================
// Function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('roar');
lion.greet();
// lion.sing; // - cant access private prop
// ========================
// Union
var confused = 'hello';
confused = 5;
// confused = true;
