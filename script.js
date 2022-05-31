function iniciar() {
	window.location.href="perguntas.html"; 
}

function resultado() {
	let pontos = 0;
    
        let botao = document.getElementById("botao")
        if(document.getElementById('correct1').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct2').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct3').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct4').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct5').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct6').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct7').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct8').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct9').checked) {
            pontos++; 
        }
    
        if(document.getElementById('correct10').checked) {
            pontos++; 
        }
        document.getElementById("result").innerHTML = pontos; 
}