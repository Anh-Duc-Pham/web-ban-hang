// CheckKed Cart
function checkKedCart() {
    const fakeCheckbox = document.querySelector('.fake_checkbox')
    fakeCheckbox.addEventListener('click',function() {
        const fakeCheckboxAll = document.querySelectorAll('.cart_new_products .fake_checkbox')
        fakeCheckboxAll.forEach(ele => {
            ele.classList.toggle('active')
        })
        fakeCheckbox.classList.toggle('active')
    })
}



// checked All cart
function checkAllCart() {
   const fakeCheckboxAll = document.querySelectorAll('.cart_new_products .fake_checkbox')
   fakeCheckboxAll.forEach(ele => {
   ele.onclick = function() {
    ele.classList.toggle('active')
   }
   })
}


// Next and Prev in cart
function nextAndPrev() {
    const newCartNextorPrev = document.querySelectorAll('.new_cart_quantity')
    newCartNextorPrev.forEach( ele => {
        const newCartNext = ele.querySelector('.cart_quantity_next')
        const newCartPrev = ele.querySelector('.cart_quantity_prev')
        let valueINput = ele.querySelector('input').value
        newCartNext.onclick = function() {
            valueINput ++;
            console.log(valueINput)
        }        
    })

}

// run app
function start() {
    
    // CheckKed Cart
    checkKedCart()

    // checked All cart
    checkAllCart()  

    // checked All cart
    nextAndPrev()
}

start() 