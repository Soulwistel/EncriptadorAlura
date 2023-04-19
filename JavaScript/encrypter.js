
function encriptador(mensaje){
    const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const lowercase= uppercase.map(v=> v.toLowerCase());
    const splitString = mensaje.split("");
    var text;
    for(var i=0;i<splitString.length;i++){
        if(splitString[i]==" "){
            splitString[i]='@';
        }else if(splitString[i]==splitString[i].toUpperCase()){
            for(var j=0;j<=uppercase.length;j++){
                if(splitString[i]==uppercase[j] && j%2==0){
                    splitString[i]=uppercase[j+1];
                    break;
                }else if(splitString[i]==uppercase[j]){
                    splitString[i]=uppercase[j-1];
                    break;
                }
            }
        }else if(splitString[i]==splitString[i].toLowerCase()){
            for(var j=0;j<=lowercase.length;j++){
                if(splitString[i]==lowercase[j] && j%2==0){
                    splitString[i]=lowercase[j+1];
                    break;
                }else if(splitString[i]==lowercase[j]){
                    splitString[i]=lowercase[j-1];
                    break;
                }
            }
        }
    }
    text=splitString.join("");
    return text;
}

function desencriptador(mensaje){
    const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const lowercase= uppercase.map(v=> v.toLowerCase());
    const splitString = mensaje.split("");
    var text;
    for(var i=0;i<splitString.length;i++){
        if(splitString[i]=="@"){
            splitString[i]=' ';
        }else if(splitString[i]==splitString[i].toUpperCase()){
            for(var j=0;j<=uppercase.length;j++){
                if(splitString[i]==uppercase[j] && j%2==1){
                    splitString[i]=uppercase[j-1];
                    break;
                }else if(splitString[i]==uppercase[j]){
                    splitString[i]=uppercase[j+1];
                    break;
                }
            }
        }else if(splitString[i]==splitString[i].toLowerCase()){
            for(var j=0;j<=lowercase.length;j++){
                if(splitString[i]==lowercase[j] && j%2==1){
                    splitString[i]=lowercase[j-1];
                    break;
                }else if(splitString[i]==lowercase[j]){
                    splitString[i]=lowercase[j+1];
                    break;
                }
            }
        }
    }
    text=splitString.join("");
    return text;
}

function getTextEncrypt(){
    var text= document.getElementById("txtArea").value;
    text=encriptador(text);
    setTextFinal(text);
    alert("encriptado");
}

function getTextDeEncrypt(){
    var text= document.getElementById("txtArea").value;
    text=desencriptador(text);
    setTextFinal(text);
    alert("desencriptado");
}

function setTextFinal(mensaje){
    var text= document.getElementById("txtEncri").value = mensaje;
}