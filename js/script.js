var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "id":1
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    "id":2
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg",
    "id":3
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg",
    "id":4
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg",
    "id":5
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg",
    "id":6
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png",
    "id":7
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg",
    "id":8
  }
]

var cart = [
  /*{ name: "Blue chukka boots", price: 17.99, id: "item001" },
  { name: "comfortable slippers", price: 50, id: "item002" }*/
]

function addCart (value) {
  event.preventDefault();

  for (var index = 0; index < products.length; index++) {
    /*if (products[index].name == document.addForm.submitItem.id){*/
    if (products[index].id == value){
      var itemToAdd = products[index];
      cart.push(itemToAdd);
      console.log("Added " + itemToAdd.name + " to cart.");
      console.log(cart.length);
      /*console.log(value);*/
    }
  }
}

function removeCart (value) {
  event.preventDefault();

  for (var index = 0; index < cart.length; index++) {
    if (cart[index].id == value){
      var itemToRemove = cart[index];
      cart.splice(index, 1);
      console.log("Removed " + itemToRemove.name + " from cart.");
      console.log(cart.length);
      return;
    }
  }
}
