
const inputs= 10 
let numeros=[]


for (let i = 0; i < inputs; i++) {

   do(numeros[i] = prompt("Ingrese el primer numero: "))
    
    while(isNaN(numeros[i]))
       
    

}

for(let i=0;i<=numeros.length;i++){
    if(numeros[i]>0 && (numeros[i]%2)==0){
        console.log(numeros[i]+" Es un numero positivo y par");
    }else if(numeros[i]>0){
        console.log(numeros[i]+" Es un numero positivo e impar");
    }
    else if (numeros[i]<0){
        console.log(numeros[i]+" Es un numero negativo");
    }
    
}