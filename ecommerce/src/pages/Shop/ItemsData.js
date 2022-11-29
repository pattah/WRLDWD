import productOne from '../../assets/productOne.jpg';
import productTwo from '../../assets/productTwo.jpg';
import productThree from '../../assets/productThree.jpg';
import productFour from '../../assets/productFour.jpg';
import productFive from '../../assets/productFive.jpg';
import productSix from '../../assets/productSix.jpg';
import productSeven from '../../assets/productSeven.jpg';
import productEight from '../../assets/productEight.jpg';

const products = 
  [{id: 'price_1M9Z0oHuRfY9hVxVoDOJaLcK', 
    image: productOne, 
    brand: 'New Balance', 
    type: 'Windbreaker jacket', 
    price: 80.00, 
    desc: `This windbreaker jacket is made with polyester fabric that gives extreme resistance to abrasion and wear, 
    flexibility, inner ventilation, moisture control, 
    and slight water repellency. 
    The design incorporates a high collar, 
    adjustable hem with a drawstring.`}, 

   {id: 'price_1M9Z4iHuRfY9hVxVCkjn1cv3', 
   image: productTwo, 
   brand: 'Nike', 
   type: 'Sneaker', 
   price: 70.00 , 
   desc: `Basketball shoes from the ‘80s continue to sneak into mainstream fashion, 
   and one of the Swoosh pairs that haven’t waned at all is the Air Force 1 High. 
   Its strappy high-top collar seems to have a magnetic force that always finds a connection with every age group. 
   Comfort is remarkable. Price doesn’t sting. Loyalists can’t ask for more..`},
  
   {id: 'price_1M9Z8SHuRfY9hVxVSU1p1qhm', 
   image: productThree, 
   brand: 'Nike', 
   type: 'Windbreaker Jacket', 
   price: 120.00, 
   desc: `
   It features a full front zip and an internally lined hood that is adjustable with integrated drawstrings. 
   It has two side pockets with zippers for your hands. 
   Its cuffs and bottom hem are ribbed and slightly elasticated.
   Features raglan sleeves for greater freedom of movement. 
   The manufacturer´s logo is embroidered on the chest. On the chest it presents the iconic chevron line. 
   It is made of 100% polyester. CLASSIC RUNNER AT A MODERN SPEED.`}, 
                                                                                   
   {id: 'price_1M9ZA5HuRfY9hVxVcc2FEcFt', 
   image: productFour, 
   brand: 'Nike', 
   type: 'Windbreaker Jacket', 
   price: 90.00, 
   desc: `
   The Nike Sportswear Windrunner Jacket updates our first running windbreaker with lightweight fabric made from recycled materials.
   Design details pulled from the original version provide a heritage Nike look.
   This product is made with 100% recycled polyester fibers.`},
  
   {id: 'price_1M9ZCyHuRfY9hVxVLXHwqZLe', 
   image: productFive, 
   brand: 'Adidas', 
   type: 'Sweatshirt', 
   price: 70.00, 
   desc: `Varsity Crewneck Sweatshirt.
   A play on a classic campus aesthetic, this adidas sweatshirt stands out with bold, collegiate-inspired adidas branding.
   You´re set with total comfort thanks to the soft fleece material and a loose, casual fit.`}, 
  
   {id: 'price_1M9ZI0HuRfY9hVxV5nhVCJ7w', 
   image: productSix, 
   brand: 'Bershka', 
   type: 'White t-shirt', 
   price: 30.00, 
   desc: `Standard white t-shirt from high quality materials.`},
  
   {id: 'price_1M9ZKZHuRfY9hVxViC2MpqUZ', 
   image: productSeven, 
   brand: 'Bershka', 
   type: 'T-shirt - stripes pattern', 
   price: 35.00, 
   desc: `T-shirt with stripes pattern from high quality materials.`}, 
   
   {id: 'price_1M9ZMgHuRfY9hVxVBUBHsOjz', 
   image: productEight, 
   brand: 'YEEZY BOOST 350', 
   type: 'Shoes', 
   price: 80.00, 
   desc: `The adidas Yeezy Boost 350 V2 ‘Salt’, 
   also referred to as ‘Jade Ash’, 
   features a light green palette on the woven Primeknit upper, 
   intersected with a black contrasting streak on the lateral side with SPLY-350 branding. 
   Full-length Boost cushioning sits inside a TPU cage, 
   with a rubber outsole tinted in a similar Jade color as the rest of the shoe..`}]

 function getItemData(id) {
    let itemData = products.find (item => item.id === id);

    if (itemData === undefined) {
        console.log("Item doesn't exist" + id)
        return undefined
    }
    return  itemData
 }

export { products, getItemData }