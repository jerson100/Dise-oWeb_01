const toogle = (element,parentElement,classs) =>{
    element.addEventListener('click',()=>{
        parentElement.classList.toggle(classs);
    });
};