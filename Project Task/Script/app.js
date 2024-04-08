const element = document.querySelector('#load_page');
const un_display = () => {
    element.style.display = 'none';
}

window.addEventListener('load', () => {    
    setTimeout( () => {
        un_display();
    }, 5000);  
});

// --------------------------------------------------------------------------
//                            Explore Categories (1)                         
// --------------------------------------------------------------------------

const left = document.querySelector('.left_arrow');
const right = document.querySelector('.right_arrow');
const products = document.querySelectorAll('#products_cards div:not(.arrow)');


scroll.addEventListener('wheel', (event) =>
{
    element.preventdefault();
    products.scrollleft += event.deltaY;
});

left.addEventListener('click', (event) =>
{
    products.style.scrollBehavior ='smooth';
    products.scrollleft += 500;
});

right.addEventListener('click', (event) =>
{
    products.style.scrollBehavior ='smooth';
    products.scrollleft -= 500;
});


