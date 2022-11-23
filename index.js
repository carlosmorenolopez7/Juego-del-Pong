var bola, barra1, barra2, puntos1, puntos2, contador1, contador2, posX, posY, direccionX, direccionY, velocidadX, velocidadY, radio;

window.onload = () =>{
    bola = document.getElementById("bola");
    barra1 = document.getElementById("barra1");
    barra2 = document.getElementById("barra2");
    puntos1 = document.getElementById("puntos1");
    puntos2 = document.getElementById("puntos2");
    contador1 = 1;
    contador2 = 1;
    posX = 500;
    posY = 300;
    direccionX = 1;
    direccionY = 1;
    velocidadX = 3;
    velocidadY = 2;
    radio = 40;
    setInterval(dibujarEscenario, 10);
    moverBarras();
}

function dibujarEscenario(){
    if(posX > (1350-radio) || posX < (0+radio))
        direccionX*=-1;

    if(posX > (1350-radio)){
        puntos1.innerHTML = contador1;
        contador1++;
    }

    if(posX < (0+radio)){
        puntos2.innerHTML = contador2;
        contador2++;
    }

    if(posX < (parseInt(barra1.getAttribute("x"))+parseInt(barra1.getAttribute("width"))+radio) && posX > (parseInt(barra1.getAttribute("x"))+parseInt(barra1.getAttribute("width"))-radio)){
        if(posY > parseInt(barra1.getAttribute("y")) && posY < (parseInt(barra1.getAttribute("y"))+parseInt(barra1.getAttribute("height"))))
            direccionX*=-1;
    }

    if(posX > (parseInt(barra2.getAttribute("x"))-radio) && posX < (parseInt(barra2.getAttribute("x"))+radio)){
        if(posY > parseInt(barra2.getAttribute("y")) && posY < (parseInt(barra2.getAttribute("y"))+parseInt(barra2.getAttribute("height"))))
            direccionX*=-1;
    }

    posX += direccionX*velocidadX;
    posY += velocidadY*direccionY;
    bola.setAttribute("cx", posX);

    if(posY > (600-radio) || posY < (0+radio)){
        direccionY*=-1;
    }

    posY += direccionY*velocidadY;
    bola.setAttribute("cy", posY);
}

function moverBarras(){
    document.addEventListener("keydown", (e)=>{
        switch(e.key){
            case "w":
                if(parseInt(barra1.getAttribute("y")) > 0)
                    barra1.setAttribute("y", parseInt(barra1.getAttribute("y"))-30);
                break;
            case "s":
                if(parseInt(barra1.getAttribute("y")) < 500)
                    barra1.setAttribute("y", parseInt(barra1.getAttribute("y"))+30);
                break;
            case "ArrowUp":
                if(parseInt(barra2.getAttribute("y")) > 0)
                    barra2.setAttribute("y", parseInt(barra2.getAttribute("y"))-30);
                break;
            case "ArrowDown":
                if(parseInt(barra2.getAttribute("y")) < 500)
                    barra2.setAttribute("y", parseInt(barra2.getAttribute("y"))+30);
                break;
        }
    });
}
