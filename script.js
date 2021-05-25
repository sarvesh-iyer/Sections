let img = document.querySelector('img');
        let bt1 = document.querySelector('#teal');
        let bt2 = document.querySelector('#green');
        let bt3 = document.querySelector('#pink');
        let bt4 = document.querySelector('#black');
        

        bt1.addEventListener('click', () => {
            img.src = 'images/teal.png';
        })

        bt2.addEventListener('click', () => {
            img.src = 'images/green.png';
        })

        bt3.addEventListener('click', () => {
            img.src = 'images/pink.png';
        })

        bt4.addEventListener('click', () => {
            img.src = 'images/black.png';
        })

        act = document.querySelector(".variant").querySelectorAll("div");
        
        act.forEach(element => {
            
            element.addEventListener("click", function(){
                act.forEach(ele=>ele.classList.remove("active"))

                this.classList.add("active");
            })
        });