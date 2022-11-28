import productOne from '../../assets/productOne.jpg';
import productTwo from '../../assets/productTwo.jpg';
import productThree from '../../assets/productThree.jpg';
import productFour from '../../assets/productFour.jpg';
import productFive from '../../assets/productFive.jpg';
import productSix from '../../assets/productSix.jpg';
import productSeven from '../../assets/productSeven.jpg';
import productEight from '../../assets/productEight.jpg';

const products = 
[{id: '52b7d614', image: productOne, brand: 'New Balance', type: 'Windbreaker jacket', price: '$80.00', desc: `Poly with contrast panels and piping. 
                                                                                                               Full zip closure and welt hand pockets at lower front. 
                                                                                                               Knit rib cuffs and hem. 
                                                                                                               Jacquard knit logos at front, sides and back.`}, 

 {id: 'd87e1aac', image: productTwo, brand: 'Nike', type: 'Sneaker', price: '$70.00' , desc: `Poly with contrast panels and piping. 
                                                                                              Full zip closure and welt hand pockets at lower front. 
                                                                                              Knit rib cuffs and hem. 
                                                                                              Jacquard knit logos at front, sides and back.`},


 {id: '4b4bf6e0', image: productThree, brand: 'Nike', type: 'Windbreaker Jacket', price: '$120.00', desc: `Poly with contrast panels and piping. 
                                                                                              Full zip closure and welt hand pockets at lower front. 
                                                                                              Knit rib cuffs and hem. 
                                                                                              Jacquard knit logos at front, sides and back.`}, 

                                                                                              
 {id: '5fb7fb12', image: productFour, brand: 'Nike', type: 'Windbreaker Jacket', price: '$90.00', desc: `Poly with contrast panels and piping. 
 Full zip closure and welt hand pockets at lower front. 
 Knit rib cuffs and hem. 
 Jacquard knit logos at front, sides and back.`},

 {id: 'b942367a', image: productFive, brand: 'Adidas', type: 'Sweatshirt', price: '$70.00', desc: `Poly with contrast panels and piping. 
 Full zip closure and welt hand pockets at lower front. 
 Knit rib cuffs and hem. 
 Jacquard knit logos at front, sides and back.`}, 

 {id: '5bba4f26', image: productSix, brand: 'Bershka', type: 'T-shirt', price: '$30.00', desc: `Poly with contrast panels and piping. 
 Full zip closure and welt hand pockets at lower front. 
 Knit rib cuffs and hem. 
 Jacquard knit logos at front, sides and back.`},

 {id: 'bb5a3464', image: productSeven, brand: 'Bershka', type: 'T-shirt', price: '$35.00', desc: `Poly with contrast panels and piping. 
 Full zip closure and welt hand pockets at lower front. 
 Knit rib cuffs and hem. 
 Jacquard knit logos at front, sides and back.`}, 
 
 {id: '51b717d4', image: productEight, brand: 'Yeezy', type: 'Shoes', price: '$80.00', desc: `Poly with contrast panels and piping. 
 Full zip closure and welt hand pockets at lower front. 
 Knit rib cuffs and hem. 
 Jacquard knit logos at front, sides and back.`}]

 function getItemData(id) {
    let itemData = products.find (item => item.id === id);

    if (itemData === undefined) {
        console.log("Item doesn't exist" + id)
        return undefined
    }
    return  itemData

 }


export { products, getItemData }