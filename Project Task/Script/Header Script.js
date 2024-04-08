const form_box = document.querySelector('.model');
const signin_button = document.querySelector('#signup'); // Change the selector to match the button class correctly
const close_box1 = document.querySelector('.close-model');

const form_box2 = document.querySelector('.model2');
const cartlist_button = document.querySelector('#cartlist'); // Change the selector to match the button class correctly
const close_box2 = document.querySelector('.close-model2');



signin_button.addEventListener('click', () => {
  form_box.style.left = '92.2%';                    // Change to '50%' to center the box horizontally
  form_box.style.display = 'block';                 // Show the sign-in column
  document.querySelector('.overlay').style.display = 'block';   // Show the overlay
});

close_box1.addEventListener('click', () => {
  form_box.style.left = '-100%';                // Slide the sign-in column back offscreen  
  setTimeout(() => {
    form_box.style.display = 'none';            // Hide the sign-in column after the transition completes
    document.querySelector('.overlay').style.display = 'none';       // Hide the overlay
  }, 1000);                                     // Wait for 1 second before hiding the sign-in column
});



cartlist_button.addEventListener('click', () => {
  form_box2.style.left = '94.20%';                        // Change to '50%' to center the box horizontally
  form_box2.style.display = 'block';                     // Show the cartlist column
  document.querySelector('.overlay').style.display = 'block'; // Show the overlay
});

close_box2.addEventListener('click', () => {
  form_box2.style.left = '-100%';               // Slide the cartlist column back offscreen
  setTimeout(() => {
    form_box2.style.display = 'none';           // Hide the cartlist column after the transition completes
    document.querySelector('.overlay').style.display = 'none';  // Hide the overlay
  }, 1000);                                     // Wait for 1 second before hiding the cartlist column
});






document.addEventListener('DOMContentLoaded' , ()=>{
  const signpage = document.querySelector('.signform');
  const loginpage = document.querySelector('.loginform');

  document.querySelector('.Signin-page').addEventListener('click' , () =>{
     loginpage.style.display = 'none'
     signpage.style.display = 'block'
     
  });

  document.querySelector('.login-page').addEventListener('click' , () =>{
    signpage.style.display = 'none'
    loginpage.style.display = 'block'

 });

});

