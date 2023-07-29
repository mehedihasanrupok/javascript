var student = {
    id: 115,
    name: 'Solaiman Khan',
    class: 9,
    avgMark: 75
}

var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64GB',
    camera: '8MP'
}

// properties key:value 

//get value
// console.log(mobile.price);

var shoppingCart = {
    books: 3,
    sunglass:4,
    keyboard: 5,
    mouse: 2,
    pen:25
}

//approach 1
var penCount = shoppingCart.pen;

//approach 2
var penCount2 = shoppingCart['pen'];

//approach 3
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

//All properties name
var properties = Object.keys(shoppingCart)

//all values
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

//set property values
//1
shoppingCart.mouse = 15;
console.log(shoppingCart);

//2
shoppingCart['mouse']= 25;
console.log(shoppingCart);

//3
shoppingCart[propertyName] = 30;
console.log(shoppingCart);


