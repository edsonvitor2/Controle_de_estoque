let produto1 = [5,0,0,0,0,0];
let produto2 = [8,0,0,0,0,0];
let produto3 = [10,0,0,0,0,0];
let produto4 = [12,0,0,0,0,0];
let nome = '';
let idvenda = '';
var total = 0;
var pE = 0;
var pS = 0;
var lucro = 0;
var entrada1 = 0;
function inicio(){
    document.getElementById('p1total').innerHTML = produto1[0];
    document.getElementById('p1precoentrada').innerHTML = produto1[3];
    document.getElementById('p1precosaida').innerHTML = produto1[4];

    document.getElementById('p2total').innerHTML = produto2[0];
    document.getElementById('p2precoentrada').innerHTML = produto2[3];
    document.getElementById('p2precosaida').innerHTML = produto2[4];

    document.getElementById('p3total').innerHTML = produto3[0];
    document.getElementById('p3precoentrada').innerHTML = produto3[3];
    document.getElementById('p3precosaida').innerHTML = produto3[4];

    document.getElementById('p4total').innerHTML = produto4[0];
    document.getElementById('p4precoentrada').innerHTML = produto4[3];
    document.getElementById('p4precosaida').innerHTML = produto4[4];
}

function identProd(prod){
    nome = prod;
    document.getElementById('locprod').innerHTML = prod;
}
function identVenda(prod){
    idvenda = prod;
    document.getElementById('desc').innerHTML = prod;
    if(prod == 'Produto1'){
        document.getElementById('preco').innerHTML = produto1[4];
    }
    else if(prod == 'Produto2'){
        document.getElementById('preco').innerHTML = produto2[4];
    }
    else if(prod == 'Produto3'){
        document.getElementById('preco').innerHTML = produto3[4];
    }
    else if(prod == 'Produto4'){
        document.getElementById('preco').innerHTML = produto4[4];
    }
    
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

        total = parseFloat(produto1[0]);
        entrada1 = parseFloat(produto1[1]);
        total += entrada1; 

        pE = parseFloat(produto1[3]);
        pS = parseFloat(produto1[4]);
        lucro = pS - pE; 

        document.getElementById('p1lucro').innerHTML = lucro;
        document.getElementById('p1total').innerText = total;
    }
    // PRODUTO 2 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto2'){
        produto2[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p2entrada').innerHTML = produto2[1];

        produto2[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p2precoentrada').innerHTML = produto2[3];
        
        produto2[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p2precosaida').innerHTML = produto2[4];

        total = parseFloat(produto2[0]);
        entrada1 = parseFloat(produto2[1]);
        total += entrada1; 

        pE = parseFloat(produto2[3]);
        pS = parseFloat(produto2[4]);
        lucro = pS - pE; 

        document.getElementById('p2lucro').innerHTML = lucro;
        document.getElementById('p2total').innerText = total;
    }
    // PRODUTO 3 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto3'){
        produto3[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p3entrada').innerHTML = produto3[1];

        produto3[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p3precoentrada').innerHTML = produto3[3];
        
        produto3[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p3precosaida').innerHTML = produto3[4];

        total = parseFloat(produto3[0]);
        entrada1 = parseFloat(produto3[1]);
        total += entrada1; 

        pE = parseFloat(produto3[3]);
        pS = parseFloat(produto3[4]);
        lucro = pS - pE; 

        document.getElementById('p3lucro').innerHTML = lucro;
        document.getElementById('p3total').innerText = total;
    }
    // PRODUTO 4 QUANTIDADE DE PRODUTOS QUE ENTROU, VALOR DE COMPRA E VALOR DE VENDA!!!
    else if(nome == 'Produto4'){
        produto4[1] = document.getElementById('NumeroEntrada').value;
        document.getElementById('p4entrada').innerHTML = produto4[1];

        produto4[3] = document.getElementById('ValorEntrada').value;
        document.getElementById('p4precoentrada').innerHTML = produto4[3];
        
        produto4[4] = document.getElementById('ValorSaida').value;
        document.getElementById('p4precosaida').innerHTML = produto4[4];

        total = parseFloat(produto4[0]);
        entrada1 = parseFloat(produto4[1]);
        total += entrada1; 

        pE = parseFloat(produto4[3]);
        pS = parseFloat(produto4[4]);
        lucro = pS - pE; 

        document.getElementById('p4lucro').innerHTML = lucro;
        document.getElementById('p4total').innerText = total;
    }
    else{
        alert('Selecione um Produto');
    }
    
}

function vender(){
    // PRODUTO 1 QUANTIDADE DE PRODUTOS QUE SAIU, E VENDA!!!
    if(idvenda == 'Produto1'){
        produto1[1] = document.getElementById('qtd').value;
        document.getElementById('p1saida').innerHTML = produto1[1];
        

        
    }
    // PRODUTO 2 QUANTIDADE DE PRODUTOS QUE SAIU, E VENDA!!!
    else if(idvenda == 'Produto2'){
        
    }
    // PRODUTO 3 QUANTIDADE DE PRODUTOS QUE SAIU, E VENDA!!!
    else if(idvenda == 'Produto3'){
        
    }
    // PRODUTO 4 QUANTIDADE DE PRODUTOS QUE SAIU, E VENDA!!!
    else if(idvenda == 'Produto4'){
         
    }
    else{
        alert('Selecione um Produto');
    }
}