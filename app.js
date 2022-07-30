let produto1 = [5,0,0,0,0,0];
let produto2 = [8,0,0,0,0,0];
let produto3 = [10,0,0,0,0,0];
let produto4 = [12,0,0,0,0,0];
let nome = '';
function inicio(){
    document.getElementById('p1total').innerHTML = produto1[0];
    document.getElementById('p1precoentrada').innerHTML = produto1[3];
    document.getElementById('p1precosaida').innerHTML = produto1[4];
    produto1[5] = produto1[4] - produto1[3];
    document.getElementById('p1lucro').innerHTML = produto1[5];

    document.getElementById('p2total').innerHTML = produto2[0];
    document.getElementById('p2precoentrada').innerHTML = produto2[3];
    document.getElementById('p2precosaida').innerHTML = produto2[4];
    produto2[5] = produto2[4] - produto2[3];
    document.getElementById('p2lucro').innerHTML = produto2[5];

    document.getElementById('p3total').innerHTML = produto3[0];
    document.getElementById('p3precoentrada').innerHTML = produto3[3];
    document.getElementById('p3precosaida').innerHTML = produto3[4];
    produto3[5] = produto3[4] - produto3[3];
    document.getElementById('p3lucro').innerHTML = produto2[5];

    document.getElementById('p4total').innerHTML = produto4[0];
    document.getElementById('p4precoentrada').innerHTML = produto4[3];
    document.getElementById('p4precosaida').innerHTML = produto4[4];
    produto4[5] = produto4[4] - produto4[3];
    document.getElementById('p4lucro').innerHTML = produto4[5];
}

function identProd(prod){
    nome = prod;
    document.getElementById('locprod').innerHTML = prod;
}

function entrada(){
    // PRODUTO 1 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    if(nome == 'Produto1'){
        produto1[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p1entrada').innerHTML = produto1[1];
        
        produto1[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p1precoentrada').innerHTML = produto1[3];
        
        produto1[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p1precosaida').innerHTML = produto1[4];
    }
    // PRODUTO 2 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto2'){
        produto2[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p2entrada').innerHTML = produto2[1];

        produto2[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p2precoentrada').innerHTML = produto2[3];
        
        produto2[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p2precosaida').innerHTML = produto2[4];
    }
    // PRODUTO 3 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto3'){
        produto3[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p3entrada').innerHTML = produto3[1];

        produto3[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p3precoentrada').innerHTML = produto3[3];
        
        produto3[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p3precosaida').innerHTML = produto3[4];
    }
    // PRODUTO 4 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto4'){
        produto4[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p4entrada').innerHTML = produto4[1];

        produto4[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p4precoentrada').innerHTML = produto4[3];
        
        produto4[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p4precosaida').innerHTML = produto4[4];
    }
    else{
        alert('Selecione um Produto');
    }
    
}