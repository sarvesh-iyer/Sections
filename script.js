let img = document.querySelector('img');
        let bt1 = document.querySelector('#one');
        let bt2 = document.querySelector('#two');
        let bt3 = document.querySelector('#three');
        let bt4 = document.querySelector('#four');
        let bt5 = document.querySelector('#five');
        let bt6 = document.querySelector('#six');
        

        bt1.addEventListener('click', () => {
            img.src = 'images/1.jpg';
        })

        bt2.addEventListener('click', () => {
            img.src = 'images/2.jpg';
        })

        bt3.addEventListener('click', () => {
            img.src = 'images/3.jpg';
        })

        bt4.addEventListener('click', () => {
            img.src = 'images/4.jpg';
        })

        bt5.addEventListener('click', () => {
            img.src = 'images/5.jpg';
        })

        bt6.addEventListener('click', () => {
            img.src = 'images/6.jpg';
        })

        act = document.querySelector(".variant").querySelectorAll("div");
        
        act.forEach(element => {
            
            element.addEventListener("click", function(){
                act.forEach(ele=>ele.classList.remove("active"))

                this.classList.add("active");
            })
        });