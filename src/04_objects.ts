let order = {
  qty: 10,
  name: "DC Shoes",
  total: 200
}

// order.qty = '100'
order.total = 900
//order.size = 'large' // cant add properties that did not exist before

// the structure also has to be the same
// has to have same properties
// same types, you can change the values of the types thats fine.
/*order = {
  qty: 10
}*/

/*
    once a property type has been declared
    it cannot be changed to another type
*/

console.log(order);

// Explicit type: object
let address: {
  house_number: number,
  street: string,
  post_code: number,
  suburb: string
};

address = {
  house_number: 22,
  street: "blue street",
  post_code: 4567,
  suburb: "Oslo"
}
