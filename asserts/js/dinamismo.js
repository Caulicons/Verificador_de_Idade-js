function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let fano = document.getElementById('textAno')
    let res = document.getElementById('Resposta')

    if (fano.value < 1930 || fano.value > anoAtual){
        window.alert('[ERRO] Verifique para ver ser está tudo correto.')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = anoAtual - Number(fano.value)  
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') 
         if (fsex[0].checked) {
             gênero = 'Homem'
             if (idade > 0 && idade <= 10){
                 //criação 
                 img.setAttribute('src', 'asserts/imgs/criancaMas.jpg')
             }
             else if (idade > 10 && idade < 21) {
                 //adolescente 
                 img.setAttribute('src', 'asserts/imgs/adolescenteMas.jpg')
             }
             else if (idade >= 21 && idade < 50) {
                 //Adulto 
                 img.setAttribute('src', 'asserts/imgs/adultoMas.jpg')
             } 
             else {
                 //velho
                 img.setAttribute('src', 'asserts/imgs/velhoMas.jpg')
             }
         } else if (fsex[1].checked){
                gênero = 'Feminino'
                if (idade > 0 && idade <= 10){
                    //criação 
                    img.setAttribute('src', 'asserts/imgs/criancaFem.jpg')
                }
                else if (idade > 10 && idade < 21) {
                    //adolescente 
                    img.setAttribute('src', 'asserts/imgs/adolescenteFem.jpg')
                }
                else if (idade >= 21 && idade < 50) {
                    //Adulto 
                    img.setAttribute('src', 'asserts/imgs/adultoFem.jpg')
                } 
                else {
                    //velho
                    img.setAttribute('src', 'asserts/imgs/velhoFem.jpg')
                }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         res.appendChild(img)
    }
        
        }

        document.addEventListener("keypress", (event) => {
            if(event.key === 'Enter') 
            verificar()
        })