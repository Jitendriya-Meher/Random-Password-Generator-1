
const password = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".copy-icon");
const range = document.querySelector(".range-box input");
const slider = document.querySelector(".slider");
const btn = document.querySelector(".btn");

console.log(password,copyIcon,range,slider,btn);

range.addEventListener("input", (e) => {
    copyIcon.classList.replace("fa-file-circle-check","fa-copy");
    password.value="";
    console.log(range.value);
    slider.innerHTML = range.value;
});

btn.addEventListener("click", (e) => {
    copyIcon.classList.replace("fa-file-circle-check","fa-copy");

    const chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]:<>?;',./|!@#$%^&*()_+=-~`;

    let len = range.value;
    let newPassword = "";

    for( let i=0; i<len; i++ ){
        newPassword += chars[Math.floor(Math.random()*chars.length)];
    }
    password.value = newPassword;
})

copyIcon.addEventListener( 'click', ()=>{
    if( password.value.length == 0){
        return;
    }
    copyIcon.classList.replace("fa-copy","fa-file-circle-check");
    console.log(copyIcon);

    navigator.clipboard.writeText(password.value);
})