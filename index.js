// let rect = {
//   length : 30,
//   width : 20,

//   area : function(){
//     return this.length*this.width;
//   }
// }
// console.log(rect.area());

// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// let data = {
//   name : ["Rice", "Dal", "Salt"],
//   quantity : [2, 3, 1],
//   price : [60, 50, 20],

//   total : function(){
//     let sum = 0;
//     for(let i =0; i<this.name.length; i++){
//       sum += this.quantity[i]*this.price[i];
//     }
//     return sum;
//   }
// }
// console.log(data.total());

// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

let data = {
  sales : [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
],
  calculateSalesTotals : function(){
    let arr = [];
    for(let i = 0; i<this.sales.length; i++){
      let obj = {};
      if(this.sales[i].discount == undefined){
        obj.item = this.sales[i].item;
        obj.original = this.sales[i].original;
        obj.sale = this.sales[i].original;
        obj.stock = this.sales[i].stock;
        obj.total = this.sales[i].original*this.sales[i].stock;
        arr.push(obj);
      }
      else{
        obj.discount = this.sales[i].discount;
        obj.item = this.sales[i].item;
        obj.original = this.sales[i].original;
        obj.sale = this.sales[i].original - this.sales[i].original*this.sales[i].discount;
        obj.stock = this.sales[i].stock;
        obj.total = obj.sale*this.sales[i].stock;
        arr.push(obj);
      }
    }
    return arr;
  }
}
let ans = data.calculateSalesTotals();
console.log(ans);