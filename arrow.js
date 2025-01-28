// const user = {
//     userName : "Piraj",
//     price : 999,

//     welcomeMessage: function() {

//         console.log(`${this.userName}, Welcome to the website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMessage()
// user.userName = "Vishal"
// user.price = 1000
// user.welcomeMessage()
// console.log(this);



// function admin(){
//     let adminName = "Viraj"
//     console.log(this.adminName);
    
// }

// admin()
// console.log(this);



//+++++++++++++++++++++IIFE+++++++++++++


// immideately invoke function expresssion

((name)  => {
    console.log(`DB Connected ${name}`);
    })('Piraj');

( function root (lastName) {
    // Named IIFE 
    console.log(`DB Connected ${lastName}`);
    })('Shinde')