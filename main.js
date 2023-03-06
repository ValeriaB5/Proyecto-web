const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const asideShopping = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const productDetailLeft   = document.querySelector('.product-detail-left')
const productDetailClose  = document.querySelector('.product-detail-close')
const myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito = document.querySelector('.navbar-shopping-cart div')
let totalCarrito = document.querySelector('.total')
let modal = document.querySelector('.modal')
let cerrarModal = document.querySelector('.boton-modal')
let productImageInfor = document.querySelector('.product-detail-left > img:nth-child(2)')
let labelPriceInfo = document.querySelector('.product-info-left p:nth-child(1)')
let labelNameInfo = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo = document.querySelector('.product-info-left p:nth-child(3)')
let buttonInfo = document.querySelector('.add-to-cart-button')
let productosEnCarrito = []
let productoACarrito = []


countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$0.00'

menuEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMenuMobile);
menuCarIcon.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
buttonInfo.addEventListener('click', butonClick)
cerrarModal.addEventListener('click', closeModal)


function butonClick(){
    agregarCarrito(productoACarrito)
}
function toggleMenu(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    productDetailLeft.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
    productoACarrito = []
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
    return productosEnCarrito.some(function(articulo){
        return articulo === nameProduct
    })
}

function closeModal(){
    modal.style.display = 'none'
}

let productList = []
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    desc: 'Two-wheeled steerable machine that is pedaled by the riders feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork.'
})
productList.push({
    name:'Jacket',
    price:85,
    image:'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has sleeves, and fastens in the front or slightly on the side.'
})
productList.push({
    name:'Lamp',
    price:60,
    image:'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Device for producing illumination, originally a vessel containing a wick soaked in combustible material and subsequently such other light-producing instruments as gas and electric lamps.'
})
productList.push({
    name:'Chair',
    price:110,
    image:'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'A seat, especially for one person, usually having four legs for support and a rest for the back and often having rests for the arms.'
})
productList.push({
    name:'Wood toys',
    price:110,
    image:'https://images.pexels.com/photos/3661222/pexels-photo-3661222.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Rento casa amueblada en Fraccionamiento Quintas del Sol, muy cerca de la Av. Ortíz Mena, terreno amplio, cochera con capacidad de hasta 4 carros, sala, comedor, cocina, lavandería, medio baño, recamara completa, todo en planta baja'
})

productList.push({
    name:'Apple watch',
    price:600,
    image:'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email.'
})
productList.push({
    name:'Sport shoes',
    price:52,
    image:'https://images.pexels.com/photos/1166868/pexels-photo-1166868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock. Shoes are also used as an item of decoration and fashion.'
})
productList.push({
    name:'Xbox',
    price:406,
    image:'https://images.pexels.com/photos/14642112/pexels-photo-14642112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Xbox is a video gaming brand created and owned by Microsoft. The brand consists of five video game consoles, as well as applications (games), streaming services, an online service by the name of Xbox network, and the development arm by the name of Xbox Game Studios.'
})
productList.push({
    name:'Monitor',
    price:263,
    image:'https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: 'Spatial resolution, screen size, bit depth, dot pitch and luminance are characteristics of monitors which may affect image quality. The spatial resolution of a monitor is most often expressed in terms of the size of the pixel matrix.'
})
productList.push({
    name:'Table',
    price:350,
    image:'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'A table is an item of furniture with a raised flat top and is supported most commonly by 1 or 4 legs (although some can have more), used as a surface for working at, eating from or on which to place things.'
})


function renderListProduct(productList){
    for (const product of productList) {
        const divproductCard = document.createElement('div')
        const imgproductcard = document.createElement('img')
        const divproductinfo = document.createElement('div')
        const divdivproductinfo = document.createElement('div')
        const pprice = document.createElement('p')
        const pname = document.createElement('p')
        const figureproductinfo = document.createElement('figure')
        const imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        cardsContainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name, product.desc)
            openProductDetail()
        });


        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            agregarCarrito(productoAgregado)
        })
    }
}

/* Adding products to cart function */
function agregarCarrito(producto){
    if(verificarProducto(producto[0].name)){
        productoACarrito= []
        return modal.style.display = 'grid'
    }

    /* const creation */
    const divShoppingCart = document.createElement('div')
    const figureShoppingCart = document.createElement('figure')
    const imgfigureShoppingCart = document.createElement('img')
    const pnameShoppingCart = document.createElement('p')
    const ppriceShoppingCart = document.createElement('p')
    const imgcloseShoppingCart = document.createElement('img')

    /* Adding elements content */
    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    pnameShoppingCart.innerText = producto[0].name
    ppriceShoppingCart.innerText ='$' + producto[0].price
    imgcloseShoppingCart.setAttribute('src','./icons/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')

    /* Elements organization */
    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)
    myordercontentContainer.appendChild (divShoppingCart)

    /* Products quantity and prices */
    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
    productosEnCarrito.push(producto[0].name)
    
    /* Removing products from cart function */
    imgcloseShoppingCart.addEventListener('click', function(){
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
    }) 

}

function mostrarInfoProduct(imagen, precio, nombre, descripcion){
    productImageInfor.setAttribute('src', imagen)
    labelPriceInfo.innerText = '$' + precio
    labelNameInfo.innerText = nombre
    labelInforInfo.innerText = descripcion
    productoACarrito = []
    productoACarrito.push({
        name: nombre,
        price: precio,
        image: imagen
    })
}

renderListProduct(productList);