let allbtn = document.querySelector('.button-a');

            let hover = (e) =>{
                e.target.classList.add('hover');
            }

            let end = (e) => {
                e.target.classList.remove('hover');
            }

            allbtn.forEach(btn=>{
                btn.addEventByListener('touchmove', hover);

                btn.addEventByListener('touchend', end);
            })

  const hamburger=document.querySelector(".hamburger");
  const pagelink=document.querySelector(".page-link");

  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    pagelink.classList.toggle("active");
  })
