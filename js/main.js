let right = document.querySelector('.right')

let card = document.querySelector('.item-cards')
if (window.innerWidth > 926) {
  for (let i = 0; i < 8; i++) {
    let saleprice =
      products[i].price - (products[i].price * products[i].sale) / 100
    card.innerHTML += ` <div class="item-card">
  <div class="span"> 
  ${
    products[i].status != ''
      ? `<div class="status">${products[i].status}</div>`
      : ''
  }
  ${
    products[i].rating != ''
      ? `<div class="rating">${products[i].rating}</div>`
      : ''
  }
${
  products[i].sale != ''
    ? `<div class="sale">Скидка -${products[i].sale}%</div>`
    : ''
} 
  </div>
   <div class="img-div">
      <div class="swiper productSlide" >
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${
                products[i].image[0]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[1]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[2]
              }" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
   </div>
   <div class="main">
   <span class="id">Код: ${products[i].id}</span>
   <h2 data-id=${products[i].id}>${products[i].title}
   </h2>
   <p>${products[i].description}</p></div>
  <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
    saleprice,
  )} p.</span>  ${
    products[i].sale != ''
      ? `<span class="old-price">${products[i].price} p.</span>`
      : ''
  } </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
 </div>`
  }
}

let newItemBtn = document.querySelector('.newitembtn')
let hitsBtn = document.querySelector('.hitsbtn')
let saleItemBtn = document.querySelector('.saleitembtn')
let select = document.getElementById('btn-group1')
if (window.innerWidth > 926) {
  function newItem() {
    const result = products.filter((a) => a.status == 'Новинка')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice = result[i].price - (result[i].price * result[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
    <div class="span">  ${
      result[i].status != ''
        ? `<div class="status">${result[i].status}</div>`
        : ''
    }
    ${
      result[i].rating != ''
        ? `<div class="rating">${result[i].rating}</div>`
        : ''
    }
  ${
    result[i].sale != ''
      ? `<div class="sale">Скидка -${result[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id" >Код: ${result[i].id}</span>
     <h2 data-id = ${result[i].id} >${result[i].title}
     </h2>
     <p>${result[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
      saleprice,
    )} p.</span>  ${
        result[i].sale != ''
          ? `<span class="old-price">${result[i].price} p.</span>`
          : ''
      }  </div><button class="add-to-cart" data-id=${
        result[i].id
      }><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
      console.log(result.id)
    }
  }
}
if (window.innerWidth > 926) {
  function hitsItem() {
    const result1 = products.filter((a) => a.rating == 'ХИТ!')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice =
        result1[i].price - (result1[i].price * result1[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
    <div class="span"> 
    ${
      result1[i].status != ''
        ? `<div class="status">${result1[i].status}</div>`
        : ''
    }
    ${
      result1[i].rating != ''
        ? `<div class="rating">${result1[i].rating}</div>`
        : ''
    }
  ${
    result1[i].sale != ''
      ? `<div class="sale">Скидка -${result1[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result1[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result1[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result1[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${result1[i].id}</span>
     <h2 data-id = ${result1[i].id}>${result1[i].title}
     </h2>
     <p>${result1[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv <span class="price">${Math.round(saleprice)} p.</span>  ${
      result1[i].sale != ''
        ? `<span class="old-price">${result1[i].price} p.</span>`
        : ''
    } </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
    }
  }
}
if (window.innerWidth > 926) {
  function saleItem() {
    const result2 = products.filter((a) => a.sale !== '')
    card.innerHTML = ''
    for (let i = 0; i < 8; i++) {
      let saleprice =
        result2[i].price - (result2[i].price * result2[i].sale) / 100
      card.innerHTML += ` <div class="item-card">
    <div class="span"> 
    ${
      result2[i].status != ''
        ? `<div class="status">${result2[i].status}</div>`
        : ''
    }
    ${
      result2[i].rating != ''
        ? `<div class="rating">${result2[i].rating}</div>`
        : ''
    }
  ${
    result2[i].sale != ''
      ? `<div class="sale">Скидка -${result2[i].sale}%</div>`
      : ''
  } 
    </div>
     <div class="img-div">
        <div class="swiper productSlide" >
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="${
                  result2[i].image[0]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result2[i].image[1]
                }" alt=""></div>
                <div class="swiper-slide"><img src="${
                  result2[i].image[2]
                }" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
     </div>
     <div class="main">
     <span class="id">Код: ${result2[i].id}</span>
     <h2 data-id = ${result2[i].id}>${result2[i].title}
     </h2>
     <p>${result2[i].description}</p></div>
    <div class="cardfooter"> <div class="pricediv">
    <span class="price">${Math.round(
      saleprice,
    )} p.</span> <span class="old-price">${
        result2[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
   </div>`
    }
  }
}
newItemBtn.addEventListener('click', () => {
  newItem()
  incard()

})
hitsBtn.addEventListener('click', () => {
  hitsItem()
  incard()
})
saleItemBtn.addEventListener('click', () => {
  saleItem()
  incard()
})
select.addEventListener('change', () => {
  if (select.value == 'Новинки') {
    newItem()
  }
  if (select.value == 'Хиты продаж') {
    hitsItem()
  }
  if (select.value == 'Выгодные скидки') {
    saleItem()
  }
})

// ---------------------------FORSMALLSCREENS-----------------------------

if (window.innerWidth <= 926) {
  for (let i = 0; i < 4; i++) {
    let saleprice =
      products[i].price - (products[i].price * products[i].sale) / 100
    card.innerHTML += ` <div class="item-card">
  <div class="span">
  ${
    products[i].status != ''
      ? `<div class="status">${products[i].status}</div>`
      : ''
  }
  ${
    products[i].rating != ''
      ? `<div class="rating">${products[i].rating}</div>`
      : ''
  }
${
  products[i].sale != ''
    ? `<div class="sale">Скидка -${products[i].sale}%</div>`
    : ''
} 
  </div>
   <div class="img-div">
      <div class="swiper productSlide" >
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${
                products[i].image[0]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[1]
              }" alt=""></div>
              <div class="swiper-slide"><img src="${
                products[i].image[2]
              }" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
   </div>
   <div class="main">
   <span class="id">Код: ${products[i].id}</span>
   <h2 data-id = ${products[i].id}>${products[i].title}
   </h2>
   <p>${products[i].description}</p></div>
  <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
    saleprice,
  )} p.</span>  ${
    products[i].sale != ''
      ? `<span class="old-price">${products[i].price} p.</span>`
      : ''
  } </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
 </div>`
  }
}
if (window.innerWidth <= 926) {
  function newItem() {
    const result = products.filter((a) => a.status == 'Новинка')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice = result[i].price - (result[i].price * result[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
      <div class="span"> 
      ${
        result[i].status != ''
          ? `<div class="status">${result[i].status}</div>`
          : ''
      }
      ${
        result[i].rating != ''
          ? `<div class="rating">${result[i].rating}</div>`
          : ''
      }
    ${
      result[i].sale != ''
        ? `<div class="sale">Скидка -${result[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result[i].id}</span>
       <h2 data-id=${result[i].id}>${result[i].title}
       </h2>
       <p>${result[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span>  ${
        result[i].sale != ''
          ? `<span class="old-price">${result[i].price} p.</span>`
          : ''
      } </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}
if (window.innerWidth <= 926) {
  function hitsItem() {
    const result1 = products.filter((a) => a.rating == 'ХИТ!')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice =
        result1[i].price - (result1[i].price * result1[i].sale) / 100

      card.innerHTML += ` <div class="item-card">
      <div class="span"> 
      ${
        result1[i].status != ''
          ? `<div class="status">${result1[i].status}</div>`
          : ''
      }
      ${
        result1[i].rating != ''
          ? `<div class="rating">${result1[i].rating}</div>`
          : ''
      }
    ${
      result1[i].sale != ''
        ? `<div class="sale">Скидка -${result1[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result1[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result1[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result1[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result1[i].id}</span>
       <h2 data-id = ${result1[i].id}>${result1[i].title}
       </h2>
       <p>${result1[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span>  ${
        result1[i].sale != ''
          ? `<span class="old-price">${result1[i].price} p.</span>`
          : ''
      } </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}
if (window.innerWidth <= 926) {
  function saleItem() {
    const result2 = products.filter((a) => a.sale !== '')
    card.innerHTML = ''
    for (let i = 0; i < 4; i++) {
      let saleprice =
        result2[i].price - (result2[i].price * result2[i].sale) / 100
      card.innerHTML += ` <div class="item-card">
      <div class="span"> 
      ${
        result2[i].status != ''
          ? `<div class="status">${result2[i].status}</div>`
          : ''
      }
      ${
        result2[i].rating != ''
          ? `<div class="rating">${result2[i].rating}</div>`
          : ''
      }
    ${
      result2[i].sale != ''
        ? `<div class="sale">Скидка -${result2[i].sale}%</div>`
        : ''
    } 
      </div>
       <div class="img-div">
          <div class="swiper productSlide" >
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="${
                    result2[i].image[0]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result2[i].image[1]
                  }" alt=""></div>
                  <div class="swiper-slide"><img src="${
                    result2[i].image[2]
                  }" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
       </div>
       <div class="main">
       <span class="id">Код: ${result2[i].id}</span>
       <h2 data-id = ${result2[i].id}>${result2[i].title}
       </h2>
       <p>${result2[i].description}</p></div>
      <div class="cardfooter"> <div class="pricediv"><span class="price">${Math.round(
        saleprice,
      )} p.</span> <span class="old-price">${
        result2[i].price
      } p.</span> </div><button><img src="img/shopping1.svg" alt=""> В корзину</button></div>
     </div>`
    }
  }
}

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


