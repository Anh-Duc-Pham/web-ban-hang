
// CheckKed Cart
function checkKedCart() {
    const fakeCheckbox = document.querySelector('.fake_checkbox')
    fakeCheckbox.addEventListener('click',function() {
        fakeCheckbox.classList.toggle('active')
    })
}



function start() {
    checkKedCart()
}
start()