
let botaoAdicionar = document.getElementById('criar-tarefa');
let botaoApagar = document.getElementById('apaga-tudo');
let listaCriada = document.querySelector('#lista-tarefas');



botaoAdicionar.addEventListener("click", fadicionar);

function fadicionar(event) {
  
    // let entrada = document.querySelector("textso-tarefa");
    // let texto = entrada.value;
       //https://www.fabiobmed.com.br/site/verificar-se-um-campo-do-formulario-esta-vazio-via-javascript/
       if(document.getElementById("texto-tarefa").value == ""){
        alert('Por favor, preencha o campo');
        document.getElementById("texto-tarefa").focus();
        return false
    } else {

        let lista =  document.getElementById("lista-tarefas");
        const tarefas = document.createElement('li');

        tarefas.innerText = document.getElementById('texto-tarefa').value;
        tarefas.className = 'tarefas';
        lista.appendChild(tarefas);
        document.getElementById("texto-tarefa").value = ""


        // retirado hoje 
        // let entrada =  document.querySelector("#texto-tarefa");
        // let captura = document.getElementById('texto-tarefa').value; 
        // console.log(captura);
       
        
    
    
    
        //retirado hoje fazer consoloe aqui 
        // document.getElementById('lista-tarefas').innerHTML = captura;//a pagar esese e testar
        
    
        //https://stackoverflow.com/questions/20549241/how-to-reset-input-type-file
    
        // const tarefas = document.createElement('li');
        // lista.appendChild(itemPro);
    }
}


// outraSelecao.addEventListener('click', outra);

//     function outra(event)  {
    
//     let currentSelected = document.querySelector('tarefas selected cinza');
         
//     if (event.target.classList.contains('tarefas')) {

//       currentSelected.classList.remove('selected cinza');
  
//       event.target.classList.add('selected cinza');



//     }
// }


     



        listaCriada.addEventListener('click', selecao);



        function selecao(event)  {

            let currentSelected = document.querySelector('.selected');
            let clicked = event.target;

            if (clicked.classList.contains('selected')) {

                clicked.classList.remove('selected');
                clicked.classList.remove('cinza');
                


            } else {

                   
                clicked.classList.add('selected');
                clicked.classList.add('cinza');

                if (currentSelected !== null){
                currentSelected.classList.remove('selected');
                currentSelected.classList.remove('cinza');
            }
          
            } 
      
    }

        listaCriada.addEventListener('dblclick', clicaDuas);

   
        function clicaDuas(event)  {

            let currentSelected = document.querySelector('.completed');
            let clicked = event.target;
            
            if (clicked.classList.contains('completed')) {

                clicked.classList.remove('completed');

            } else {

                clicked.classList.add('completed');


            }
            

    }

    
    let itensDaLista = document.getElementsByClassName('tarefas');
    // console.log(itensDaLista);

    botaoApagar.addEventListener('click', apagaTudo);

    function apagaTudo(event)  {


        const div = document.getElementById("lista-tarefas");
    

            div.innerText = "";
           //https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript
    }

   
     
    let botaoRemove = document.getElementById('remover-finalizados');
   

    botaoRemove.addEventListener('click', apagaFinalizados);

    function apagaFinalizados(event)  {
         
        // let itens = document.getElementsByClassName('tarefas');
      

         for (let index = 0; index < itensDaLista.length; index += 1){
             console.log(index);
             let element = itensDaLista[index];
           
             if (element.classList.contains('completed')) {

                // console.log(itensDaLista[index]);
                listaCriada.removeChild(itensDaLista[index]);
                index = -1;
             }
        
         }
    
    

    }

