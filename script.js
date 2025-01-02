
const accordians = document.querySelectorAll('.accordin');

accordians.forEach(accordin => {
    const icon = accordin.querySelector('.icon');
    const answer = accordin.querySelector('.answer');

    accordin.addEventListener('click',() => {
        
        if(icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        }else{
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight+"px";
        }
    })

})