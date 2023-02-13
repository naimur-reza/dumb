        const firstBtn = document.getElementById('no').addEventListener('click', function(){
            const firstTake = document.getElementById('no')
            firstTake.style.position = 'relative'
            firstTake.style.left = '20px'
            const newBtn = document.createElement('h1')
            newBtn.classList.add('text')
            newBtn.innerText ='Error'
            document.body.append(newBtn)
        })
        document.getElementById('Yes').addEventListener('click', function(){
            const nano = document.getElementById('Yes')
            nano.style.display = 'none'
            const lastText = document.getElementById('text')
            lastText.innerText = 'Congratulation'

        })