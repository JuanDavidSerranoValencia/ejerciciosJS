let lista =[1,2,5,4,6,3,8];

function calcularNumeros (lista,valor){
    let array =[];
    for (let i=0;i<lista.length;i++){
        for(let k =i+1;k<lista.length;k++){
            if (lista[i]+lista[k] == valor){
                dupla = [lista[i],lista[k]];
                array.push(dupla);
            }
        }
    }
    return array
    
}

console.log(calcularNumeros(lista,9))


