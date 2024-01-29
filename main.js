canvas = new fabric.Canvas('MeuCanva');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object = "";
block_image_object = "";

function player_update() {
    fabric.Image.fromURL("jogador.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object)
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({ top: player_y, left: player_x })
        canvas.add(block_image_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '67') {
        console.log("C e shift foram pressionadas juntas");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("largura").innerHTML = block_image_width
        document.getElementById("altura").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '68') {
        if (block_image_height && block_image_width > 10) {
            console.log("D e shift foram pressionadas juntas");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("largura").innerHTML = block_image_width
            document.getElementById("altura").innerHTML = block_image_height;
        }
        else {
            console.log("tamanha mínimo alcançado 10 px");
            window.alert("tamanha mínimo alcançado 10 px");
        }
    }

    if (keyPressed == '38') {
        cima();
        console.log("cima")
    }

    if (keyPressed == '39') {
        direita();
        console.log("direita")
    }

    if (keyPressed == '40') {
        baixo();
        console.log("baixo")
    }

    if (keyPressed == '37') {
        esquerda();
        console.log("esquerda")
    }

    if (keyPressed == '71') {
        new_image('grama.png')
        console.log("G")
    }

    if (keyPressed == '80') {
        new_image('parede.jpg')
        console.log("P")
    }

    if (keyPressed == '77') {
        new_image('madeira_tronco.jpg')
        console.log("M")
    }

    if (keyPressed == '86') {
        new_image('verde_claro.png')
        console.log("V")
    }

    if (keyPressed == '78') {
        new_image('nuvem.jpg')
        console.log("N")
    }

    if (keyPressed == '65') {
        new_image('parede_amarela.png')
        console.log("A")
    }

    if (keyPressed == '84') {
        new_image('telhado.jpg')
        console.log("T")
    }

    if (keyPressed == '85') {
        new_image('unico.png')
        console.log("U")
    }

    if (keyPressed == '69') {
        new_image('verde_escuro.png')
        console.log("E")
    }
}

function cima(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("altura da imagem do bloco ="+block_image_height);
        console.log("Quando seta para cima é pressionada x= "+player_x+" ,y= " +player_y)
        canvas.remove(player_object);
        player_update();
    }

}

function direita(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("altura da imagem do bloco =" +block_image_width);
        console.log("qunado seta para direira é pressionada x= "+player_x+" ,y " +player_y)
        canvas.remove(player_object);
        player_update();
    }


}

function baixo(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("altura da imagem do bloco =" +block_image_height);
        console.log("Quando seta para baixo é pressionada x= "+player_y+" ,y " +player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function esquerda(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("altura da imagem do bloco =" +block_image_width);
        console.log("quando seta para esquerda é pressionada x= "+player_x+" ,y " +player_x)
        canvas.remove(player_object);
        player_update();
    }
}
