const soma = function (a,b){
        return a + b
}

const imprimirResultado = function  (a,b, param = soma) {
    console.log(param(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function (x,y){return x - y})
imprimirResultado(3,4,(h,n) => h * n)

const obj ={
    falar : function (){
        console.log("Vai com Deus !!!")
    }
}
obj.falar()