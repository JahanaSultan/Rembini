let categoryShow = JSON.parse(localStorage.getItem('category'))
let rightDiv = document.querySelector('#searchResult')
let buttonFilter = document.querySelector('#get-filter-result')
let from = document.querySelector('#price-from')
let to = document.querySelector('#price-to')
let range = document.querySelector('#price-range')
let color = document.querySelectorAll('#color-checkbox input')
let brand = document.querySelectorAll('#brand-checkbox input')
let country = document.querySelectorAll('#country-checkbox input')
let size = document.querySelectorAll('#size-checkbox input')
let myCheck = document.querySelector('#my-check')
let productcount = document.querySelector('.productCount')


productcount.innerHTML = `${categoryShow.length}`

// Display Products

function display(){
if (categoryShow.length !== 0) {
  rightDiv.innerHTML = ''
  categoryShow.forEach((e) => {
    let saleprice = e.price - (e.price * e.sale) / 100
    rightDiv.innerHTML += `<div class="item-card">
  <div class="span"> ${
    e.status != '' ? `<div class="status">${e.status}</div>` : ''
  }
  ${e.rating != '' ? `<div class="rating">${e.rating}</div>` : ''}
${e.sale != '' ? `<div class="sale">Скидка -${e.sale}%</div>` : ''} 
  </div>
   <div class="img-div">
      <div class="swiper productSlide" >
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${e.image[0]}" alt=""></div>
              <div class="swiper-slide"><img src="${e.image[1]}" alt=""></div>
              <div class="swiper-slide"><img src="${e.image[2]}" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
   </div>
   <div class="main">
   <span class="id" >Код: ${e.id}</span>
   <h2 data-id=${e.id}>${e.title}
   </h2>
   <p>${e.description}</p></div>
  <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
    saleprice,
  )} p.</span>  ${
    e.sale != ''
      ? `<span class="old-price">${e.price} p.</span>`
      : ''
  } </div><button class="add-to-cart" data-id=${
      e.id
    }><img src="img/shopping1.svg" alt=""> В корзину</button></div>
 </div>`
 productcount.innerHTML = `${categoryShow.length}`
  })
} else {
  container.innerHTML = `<div class="noresult">
<div>
    <h1>404</h1>
    <h3>Страница не найдена</h3>
    <p>Страница, которую вы ищете, была перемещена, удалена, переименована или никогда не существовала.</p>
    <a href="index.html"><button>Перейти на главную</button></a>
</div>
</div>`
}
}
display()

function incard() {
  let itemCard = [...document.querySelectorAll('.item-card')]
  let itemCardClick = [...document.querySelectorAll('.item-card h2')]
  itemCardClick.forEach((click) => {
    let clickId = click.dataset.id
    click.addEventListener('click', () => {
      console.log(click.dataset.id)
      let productInfo = products.find((item) => item.id === Number(clickId))

      localStorage.setItem('productInfo', JSON.stringify(productInfo))
      location.href = 'incard.html'
    })
  })
}

incard()

// Filter

buttonFilter.addEventListener('click', () => {
    myCheck.setAttribute('checked', 'checked')
    rightDiv.innerHTML = ''
    let a = [...color].filter((e) => e.checked)
    color = a.map((e) => e.value)
  
    let b = [...country].filter((e) => e.checked)
    country = b.map((e) => e.value)
  
    let c = [...brand].filter((e) => e.checked)
    brand = c.map((e) => e.value)
  
    let s = [...size].filter((e) => e.checked)
    size = s.map((e) => e.value)
  
    let x = categoryShow.filter(
      (e) =>
        (from.value.length > 0
          ? e.price - (e.price * e.sale) / 100 >= Number(from.value)
          : true) &&
        (to.value.length > 0
          ? e.price - (e.price * e.sale) / 100 <= Number(to.value)
          : true) &&
        (color.length > 0 ? color.includes(e.color) : true) &&
        (country.length > 0 ? country.includes(e.country) : true) &&
        (brand.length > 0 ? brand.includes(e.brand) : true) &&
        (size.length > 0 ? size.some((a) => e.size.some((k) => a == k)) : true),
    )
  
    productcount.innerHTML = `${x.length}`
  
    rightDiv.innerHTML = ''
    if (x.length !== 0) {
      x.forEach((e) => {
        let saleprice = e.price - (e.price * e.sale) / 100
        rightDiv.innerHTML += `<div class="item-card">
        <div class="span"> ${
          e.status != '' ? `<div class="status">${e.status}</div>` : ''
        }
        ${e.rating != '' ? `<div class="rating">${e.rating}</div>` : ''}
      ${e.sale != '' ? `<div class="sale">Скидка -${e.sale}%</div>` : ''} 
        </div>
         <div class="img-div">
            <div class="swiper productSlide" >
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="${
                      e.image[0]
                    }" alt=""></div>
                    <div class="swiper-slide"><img src="${
                      e.image[1]
                    }" alt=""></div>
                    <div class="swiper-slide"><img src="${
                      e.image[2]
                    }" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
         </div>
         <div class="main">
         <span class="id" >Код: ${e.id}</span>
         <h2 data-id=${e.id}>${e.title}
         </h2>
         <p>${e.description}</p></div>
        <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
          saleprice,
        )} p.</span>  ${
            e.sale != ''
              ? `<span class="old-price">${e.price} p.</span>`
              : ''
          } </div><button class="add-to-cart" data-id=${
          e.id
        }><img src="img/shopping1.svg" alt=""> В корзину</button></div>
       </div>`
      })
    } else {
      container.innerHTML = `<div class="noresult">
      <div>
          <h1>404</h1>
          <h3>Продукт не найдена</h3>
          <a href="index.html"><button>Перейти на главную</button></a>
      </div>
    </div>`
    }
   getitemcard1()
  })

myCheck.addEventListener('change', () => {
    if (myCheck.checked == false) {
      rightDiv.innerHTML = ''
      display()
      productcount.innerHTML = `${categoryShow.length}`
    }
    getitemcard1()
})

// Reset Filter
resetFilter.addEventListener('click', () => {
    rightDiv.innerHTML = ''
    productcount.innerHTML = `${categoryShow.length}`
    display()
    myCheck.removeAttribute('checked', 'checked')
    getitemcard1()
})



