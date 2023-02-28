var pointsUser     = 0 
var pointsOpponent = 0 

let inviteUser = () => {
    let invite = alert('Você gostaria de jogar?')

    if (invite === true) {
        startGame()
        
    } else {
        alert('Obrigado por visitar a página') 
    }
    
}
let startGame = () => {

    let jogadaUsuario  = Number(prompt('O que você deseja jogar? 1=Pedra, 2=Papel, 3=Tesoura'))
    let jogadaOponente = Math.floor(Math.random()*3)+1

    if(jogadaUsuario != 1 && jogadaUsuario != 2 && jogadaUsuario != 3) {
        alert('Digite um número valido')
    }
    if (jogadaUsuario==='') {
        alert('Digite algo!')
    }

    verifyWinner(jogadaUsuario,jogadaOponente)

}
let verifyWinner = (usuario,oponente) => {
    if(usuario ===1 && oponente==2) {
        alert('Você perdeu!')
        pointsOpponent++
    }
    if(usuario===2 && oponente===3) {
        alert('Você perdeu!')
        pointsOpponent++
    }
    if(usuario===3 && oponente===1) {
        alert('Você perdeu!')
    }
    if(oponente ===1 && usuario===2) {
        alert('Você ganhou!')
        pointsUser++
    }
    if(oponente=== 2 && usuario===3) {
        alert('Você ganhou!')
        pointsUser++
    }
    if(oponente==3 && usuario===1) {
        alert('Você ganhou!')
        pointsUser++
    } 
    if (oponente===usuario) {
        alert('empate')
    }
    if (pointsUser===2) {
        alert('Usuário ganhou')
    }
    if (pointsOpponent===2) {
        alert('bot ganhou')
    }

    startGame()
}



startGame()