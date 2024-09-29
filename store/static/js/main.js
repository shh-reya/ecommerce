let carts = document.querySelectorAll('.fal.fa-shopping-cart.cart');

let products = [
    {
        name: 'Sheer A-Line Dress',
        tag: 'd24',
        price: 3290,
        inCart: 0
    },

    {
        name: 'Rhinestone Cocktail Dress',
        tag: 'd25',
        price: 3900,
        inCart: 0
    },

    {
        name: 'Ruched Bodycon Dress',
        tag: 'd30',
        price: 1990,
        inCart: 0
    },

    {
        name: 'Rhinestone Cocktail Dress',
        tag: 'd29',
        price: 2790,
        inCart: 0
    },
    {
        name: 'Sequins Cocktail Dress',
        tag: 'd27',
        price: 3495,
        inCart: 0
    },
    {
        name: 'Backless Bodycon Dress',
        tag: 'd28',
        price: 995,
        inCart: 0
    },
    {
        name: 'Ruched Off-Shoulder Dress',
        tag: 'd23',
        price: 4900,
        inCart: 0
    },
    {
        name: 'Ruched Bodycon Dress',
        tag: 'd31',
        price:2990,
        inCart: 0
    },
    {
        name: 'Ruched Cocktail Dress',
        tag: 'd22',
        price: 5900,
        inCart: 0
    },
    {
        name:  'Sequins Cocktail Dress',
        tag: 'd34',
        price:3490,
        inCart: 0
    },
    {
        name: 'Backless Bodycon Dress',
        tag: 'd13',
        price:3900,
        inCart: 0
    },
    {
        name: 'Sequins Cocktail Dress',
        tag: 'd14',
        price:2900,
        inCart: 0
    },
    {
        name: 'White Simplicity Slip Dress',
        tag: 'd15',
        price:4500,
        inCart: 0
    },
    {
        name: 'Multicolor Cocktail Dress',
        tag: 'd16',
        price:4500,
        inCart: 0
    },
    {
        name: 'Ruched Bodycon Dress',
        tag: 'd17',
        price:2890,
        inCart: 0
    },
    {
        name: 'Frill Cocktail Dress',
        tag: 'd18',
        price:1900,
        inCart: 0
    },
    {
        name: 'Backless Bodycon Dress',
        tag: 'd13',
        price:3900,
        inCart: 0
    },
    {
        name: 'Sequins Cocktail Dress',
        tag: 'd14',
        price:2900,
        inCart: 0
    },
    {
        name: 'White Simplicity Slip Dress',
        tag: 'd15',
        price:4500,
        inCart: 0
    },
    {
        name: 'Multicolor Cocktail Dress',
        tag: 'd16',
        price:4500,
        inCart: 0
    },
    {
        name: 'Ruched Bodycon Dress',
        tag: 'd17',
        price: 2890,
        inCart: 0
    },
    {
        name: 'Frill Cocktail Dress',
        tag: 'd18',
        price:1900,
        inCart: 0
    },
    {
        name: 'Ruched Cocktail Dress',
        tag: 'd22',
        price: 5900,
        inCart: 0
    },
    {
        name: 'Ruched Off-Shoulder Dress',
        tag: 'd23',
        price: 4900,
        inCart: 0
    },
    {
        name: 'Sheer A-Line Dress',
        tag: 'd24',
        price: 3290,
        inCart: 0
    },
    {
        name: 'Rhinestone Cocktail Dress',
        tag: 'd25',
        price: 3900,
        inCart: 0
    },
    {
        name: 'Ruffle A-Line Dress',
        tag: 'd26',
        price: 1950,
        inCart: 0
    },
    {
        name: 'Asymmetrical Cocktail Dress',
        tag: 'd32',
        price: 2990,
        inCart: 0
    },
    {
        name: 'Ruffle Cocktail Dress',
        tag: 'd33',
        price: 4900,
        inCart: 0
    },
    {
        name: 'Sequins Cocktail Dress',
        tag: 'd34',
        price: 3490,
        inCart: 0
    },
    {
        name: 'Ruched Bodycon Dress',
        tag: 'd35',
        price: 5900,
        inCart: 0
    },
    {
        name: 'Split Cocktail Dress',
        tag: 'd36',
        price: 3900,
        inCart: 0
    },
    {
        name: 'Patchwork Cocktail Dress',
        tag: 'd37',
        price: 2990,
        inCart: 0
    },
    {
        name: 'Chain Cocktail Dress',
        tag: 'd39',
        price: 4900,
        inCart: 0
    },
    {
        name: 'Sequins A-Line Dress',
        tag: 'd39',
        price: 1990,
        inCart: 0
    },
]
 
for(let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]) 

    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent =productNumbers;
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1; 
        
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1; 
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    //console.log("my cartItems are",cartItems);
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
    cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
    }
}
    localStorage.setItem("productsInCart",JSON.stringify 
    (cartItems));
}  

 function totalCost(product) {
    //console.log("The products price is", product.price); 
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartCost is",cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);

    }  else{
        localStorage.setItem("totalCost", product.price);
    }
 }
  
 function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="../static/image/products/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
        
            <div class="price">
            Rs.${item.price}
            </div>

            <div class="quantity">
            <ion-icon name="caret-back-circle-outline">
            </ion-icon><span>${item.inCart}</span>
            <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
                 
            <div class="total">
               Rs.${item.inCart * item.price}
            </div>
            `

        });

        productContainer.innerHTML += `
        <div class="subtotal">
        <h3>Cart Total</h3>
        <table>
            <tr>
                <td>Cart Subtotal</td>
                <td>Rs.${cartCost}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><span>Total</span></td>
                <td><span>Rs.${cartCost}</span></td>
            </tr>
        </table>
        <button class="normal" type="button" onclick="location.href='/payment'">Proceed to checkout</button>
    </div>

        `;

        


    

    }
}



onLoadCartNumbers();
displayCart();