const grocerys = [
    {
        id: 1,
        item: "Milk",
        price: 2.99,
        brand: "AE Dairy",
        type: "whole",
        size: "quart"
    },
    {
        id: 2,
        item: "Eggs",
        price: 3.99,
        brand: "Kroger",
        type: "Brown",
        size: "18"
    },
    {
        id: 3,
        item: "Steak",
        price: 25.00,
        brand: "Kroger",
        type: "Rib Eye",
        size: "3 Ct"
    },
    {
        id: 4,
        item: "Chicken",
        price: 10.99,
        brand: "Heritage Farms",
        type: "Tenders",
        size: "5 lbs"
    },
    {
        id: 5,
        item: "Broccoli",
        price: 1.00,
        brand: "Kroger",
        type: "Frozen",
        size: "6 cup"
    },

]

for (const grocery of grocerys) {
    console.log(`The cost of ${grocery.item} is $${grocery.price}`)
}
const beer = {
    item: "Beer",
    price: 8.50,
    brand: "Corona",
    type: "bottle",
    size: "6 pack"
}

const tortillas = {
    item: "Tortillas",
    price: 3.99,
    brand: "El Gato",
    type: "Flour",
    size: "25 count"
}

const cheese = {
    item: "Cheese",
    price: 6.99,
    brand: "Kroger",
    type: "Cheddar",
    size: "1 lb"
}
 
const jalapenos = {
    item: "Jalapenos",
    price: 0.59,
    brand: "Kroger",
    type: "Fresh",
    size: "Medium"
}
    
const wine = {
    item: "Wine",
    price: 25.00,
    brand: "Coppola",
    type: "Cab Sav",
    size: "1 bottle"
}
 
const paperTowels = {
    item: "Paper Towels",
    price: 20.00,
    brand: "Bounty",
    type: "Mega Roll",
    size: "12 Rolls"
}
const addToShoppingList = (groceryObject) => {
        const lastIndex = grocerys.length - 1
        const currentLastGrocery = grocerys[lastIndex]
        const maxId = currentLastGrocery.id
        const idForNewGrocery = maxId + 1
        groceryObject.id = idForNewGrocery
        grocerys.push(groceryObject)
}
addToShoppingList(beer)  
addToShoppingList(tortillas)
addToShoppingList(cheese)
addToShoppingList(jalapenos)
addToShoppingList(wine)
addToShoppingList(paperTowels)

console.log(grocerys)
