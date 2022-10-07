let iteminfo = JSON.parse(localStorage.getItem('productInfo'))
let incard=document.querySelector('#product-in-card')
console.log(iteminfo);
incard.innerHTML=` <div class="product-image">
<div class="cover-image">
    <div class="img img-cover"><img src="${iteminfo.image[0]}" alt=""></div>
</div>
<div class="bottom-image">
    <div class="img img-bottom"><img src="${iteminfo.image[0]}" alt=""></div>
    <div class="img img-bottom"><img src="${iteminfo.image[1]}" alt=""></div>
    <div class="img img-bottom"><img src="${iteminfo.image[2]}" alt=""></div>
</div>
</div>
<div class="product-info">
<div class="product-name">
    <h1>${iteminfo.title}</h1>
    <p>Код: ${iteminfo.id}</p>
</div>

<h3>Характеристики</h3>

<ul>
    <li>Страна бренда ............................<span>${iteminfo.country}</span></li>
    <li>Бренд ............................................<span>${iteminfo.brand}</span></li>
    <li>Габариты ......................................<span>35 x 26 x 12 см</span></li>
    <li>Состав ...........................................<span>Натуральная кожа</span></li>
    <li>Гарантия .......................................<span>1 год</span></li>
    <li>Вес .................................................<span>1 400г.</span></li>
    <li>Цвет ...............................................<span>${iteminfo.color}</span></li>
</ul>
</div>`
let headlineName=document.querySelector('.headlineName')
let headlineCategory=document.querySelector('.headlineCategory')
headlineName.innerHTML=`${iteminfo.title}`
headlineCategory.innerHTML=`${iteminfo.category}`
let itemPrice=document.querySelector('#itemPrice')
let salePrice= Math.round(iteminfo.price - iteminfo.price * iteminfo.sale / 100)
itemPrice.innerText=`${salePrice} p.`


let imgCover=document.querySelector('.img-cover img')
let imgBottom=document.querySelectorAll('.img-bottom img')

imgBottom.forEach(img=>{
    img.addEventListener('click',()=>{
   imgCover.src=img.src
    })
})
