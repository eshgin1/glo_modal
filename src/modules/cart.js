'use strict';

const cart = () => {
    const cartBtn = document.getElementById('cart'),
          cartModal = document.querySelector('.cart'),
          cardCloseBtn = document.querySelector('.cart-close');

    function openModal (){
        cartModal.style.display = 'flex';
    };

    function closeModal(e){
        if(e.target === cardCloseBtn || e.target === cartModal){
            cartModal.style.display = 'none';
        };
    };

    cartBtn.addEventListener('click', openModal);
    cartModal.addEventListener('click', closeModal);
}

export default cart;