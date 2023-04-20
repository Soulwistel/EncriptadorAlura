
function encriptador(mensaje){
    const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowercase= uppercase.map(v=> v.toLowerCase());
    const number= ["0","1","2","3","4","5","6","7","8","9"];
    const especial=["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","\\","|",";",":","'","\"",",","<",".",">","/","?"]
    const splitString = mensaje.split("");
    var text;
    for(var i=0;i<splitString.length;i++){
        if(splitString[i]==" "){
            splitString[i]='▓';
        }else if(splitString[i]=="▓"){
            splitString[i]=' ';
        }else if(splitString[i]==splitString[i].toUpperCase()){
            for(var j=0;j<=especial.length;j++){
                if(splitString[i]==uppercase[j] && j%2==0){
                    splitString[i]=uppercase[j+1];
                    break;
                }else if(splitString[i]==uppercase[j]){
                    splitString[i]=uppercase[j-1];
                    break;
                }else if(splitString[i]==number[j]){
                    if(j%2==0){
                        splitString[i]=number[j+1];
                        break;
                    }else{
                        splitString[i]=number[j-1];
                        break;
                    }
                }else if(splitString[i]==especial[j]){
                    if(j%2==0){
                        splitString[i]=especial[j+1];
                        break;
                    }else{
                        splitString[i]=especial[j-1];
                        break;
                    }
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

function getTextEncrypt(){
    var text= document.getElementById("txtArea").value;
    text=encriptador(text);
    setTextFinal(text);
    alert("Se a completado el Encriptado o Desencriptado.");
}

function setTextFinal(mensaje){
    var text= document.getElementById("txtEncri").value = mensaje;
}