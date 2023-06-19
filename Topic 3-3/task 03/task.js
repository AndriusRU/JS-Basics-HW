const quantityControls = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');


function deleteItem(event) {
    const cartProduct = event.target.closest('.cart__product');

    if (cartProduct) cartProduct.remove();

    const countCartProducts = cartProducts.querySelectorAll('.cart__product').length
    if (!countCartProducts) cart.style.display = 'none'

}

function addItem(event) {
    const elem = event.target;
    const product = elem.closest('.product');
    const productId = product.dataset.id;
    const count = Number(product.querySelector('.product__quantity-value').textContent)
    const src = product.querySelector('img').src;
   
    const curProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    cart.style.display = '';

    if (!curProduct) {
        let cartProduct = `<div class="cart__product" data-id=${productId}>
            <img class="cart__product-image" src=${src}>
            <div class="cart__product-count">${count}</div>
            <div class="product__del">Удалить</div>
        </div>`;
        cartProducts.insertAdjacentHTML('beforeend', cartProduct);
    } else {
        curProduct.querySelector('.cart__product-count').textContent = Number(curProduct.querySelector('.cart__product-count').textContent) + count;
    }
}

quantityControls.forEach((elem) => {
    elem.addEventListener('click', () => {
        const value = elem.parentElement.querySelector('.product__quantity-value');

        if (elem.classList.contains('product__quantity-control_inc')) {
            value.textContent = Number(value.textContent) + 1;
        } else if (elem.classList.contains('product__quantity-control_dec') && Number(value.textContent) > 1) {
            value.textContent = Number(value.textContent) - 1;
        }
    })
})

productAdd.forEach((elem) => {
    elem.addEventListener('click', addItem);
})

cart.addEventListener('click', deleteItem);

document.addEventListener('DOMContentLoaded', () => {
    const countCartProducts = cartProducts.querySelectorAll('.cart__product').length
    if (!countCartProducts) cart.style.display = 'none'
})