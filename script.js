
let grupo1 = [];
let grupo2 = [];
let grupoCafe1 = [];
let cafeCt = 0;

document.getElementById('adicionaGrupo1').onclick = function(){
    let nomePessoa = document.getElementById('pessoa1').value;

    if(nomePessoa.length < 1){
        alert('Nome da pessoa no grupo 1 esta vazio. ');
        return;
    }

    
    grupo1.push(nomePessoa);

    // AQUI VOCE PODE DEFINIR EM QUAL GRUPO A PESSOA VAI SER CADASTRADA

    grupoCafe1.push(nomePessoa+'_Grupo1')
    carregaListaGrupoCafe(1);

    nomePessoa = "";

    let ct = 0
    if(grupoCafe1.length-1 > 0) {
        ct = grupoCafe1.length-1;
    }

    carregaListaGrupo(1);
}
document.getElementById('adicionaGrupo2').onclick = function(){
    let nomePessoa = document.getElementById('pessoa2').value;

    if(nomePessoa.length < 1){
        alert('Nome da pessoa no grupo 2 esta vazio. ');
        return;
    }
    
    grupo2.push(nomePessoa);

    // AQUI VOCE PODE DEFINIR EM QUAL GRUPO A PESSOA VAI SER CADASTRADA
    grupoCafe1.push(nomePessoa+'_Grupo2')
    carregaListaGrupoCafe(1);

    nomePessoa = "";

    let ct = 0
    if(grupoCafe1.length-1 > 0) {
        ct = grupoCafe1.length-1;
    }

    carregaListaGrupo(2);
}

function carregaListaGrupo(grupoID){
    let lista = ""; 
    let content = ""; 
    switch(grupoID) {
        case 1:
            lista = document.getElementById('grupo1Lista');
            content = '';
            lista.innerHTML = '';
            
            if(grupo1.length < 1 ) {
                lista.innerHTML = "<p>Nenhuma pessoa cadastrada.</p>";
                return;
            }    
            
            grupo1.forEach((pessoa, index) => {
                content += `<p id='gp1_${index}'>${pessoa} <button onclick='removerPessoaGrupo1(${index})'>Remover</button></p>`;   
            })
            lista.innerHTML = content;
            break;
        
        case 2:
            lista = document.getElementById('grupo2Lista');
            content = '';
            lista.innerHTML = '';

            if(grupo2.length < 1 ) {
                lista.innerHTML = "<p>Nenhuma pessoa cadastrada.</p>";
                return;
            } 

            grupo2.forEach((pessoa, index) => {
                content += `<p id='gp2_${index}'>${pessoa} <button onclick='removerPessoaGrupo2(${index})'>Remover</button></p>`;    

            })
            lista.innerHTML = content;
            break;
    }
}

function carregaListaGrupoCafe(grupoID){
    let lista = ""; 
    let content = ""; 
    switch(grupoID) {
        case 1:
            lista = document.getElementById('grupo1CafeLista');
            content = '';
            lista.innerHTML = '';
            
            if(grupoCafe1.length < 1 ) {
                lista.innerHTML = "<p>Nenhuma pessoa cadastrada.</p>";
                return;
            }    
            
            grupoCafe1.forEach((pessoa, index) => {
                content += `<p id='gpc1_${index}'>${pessoa}<button onclick='removerCafe(${index})'>Remover</button></p>`;    
            })
            lista.innerHTML = content;
            break;
    
    }
}

function removerPessoaGrupo1(pessoaID) {
    console.log('cafe ', grupoCafe1)
    if (pessoaID > -1) {
        grupo1.splice(pessoaID, 1);
    }
    document.getElementById('gp1_'+pessoaID).remove();
    carregaListaGrupo(1);

}
function removerPessoaGrupo2(pessoaID) {
    if (pessoaID > -1) {
        grupo2.splice(pessoaID, 1);
    }
    document.getElementById('gp2_'+pessoaID).remove();
    carregaListaGrupo(2);
}

function removerCafe(pessoaID) {
    if (pessoaID > -1) {
        grupoCafe1.splice(pessoaID, 1)
        document.getElementById('gpc1_'+pessoaID).remove();

        carregaListaGrupoCafe(1)
    }
}