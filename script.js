// escutar eventos

// 1- selecionar o botão de adicionar (foi usando DATA ATTRIBUTES - deve ser colocada entre [])
// 2- criar a uma variavel para armazenar, pois vamos usar em outro momento
// 3- colocar um escutador de eventos - método addEventListener
// 3.1 - evento - click
// 3.2 - onde colocar o evento - variavel novaTarefa
// 3.3 - o que acontecer depois de escutar o evento - 
// 3.3.1 - deve ter uma acao (saber que foi clicado) que é feita por uma funcao 
 
//Duas maneiras de escutar o evento

// const novaTarefa = document.querySelector('[data-form-button]');
//  // console.log(novaTarefa)

//  novaTarefa.addEventListener("click", () => { 
//      // funcao anonima
//      console.log("fui clicado")
    
//     });

// const novaTarefa = document.querySelector('[data-form-button]');
//  novaTarefa.onclick = function (event) {
//         console.log("fui clicado");

//     };

 // capturar  valor  

 // 1 - selecionar o input
 // 2 - variavel para buscar o valor(o que foi digitado pelo usuario)
 // 2.1 - pegar atraves do value, mas é preciso criar outra variavel.
 
 
//  const novaTarefa = document.querySelector('[data-form-button]');


//  novaTarefa.onclick = function (event) {

//     const input = document.querySelector('[data-form-input]');
//     //console.log(input)
//     let valor = input.value;   
// //     console.log(valor)

// //  };

//  // comportamento do formulário
 
//  // 1 - preventeDefault() - prevenir o refresh da página
//  // 2 - variavel com arrow functions
//  // 3 - reorganizou as variavel criadas anteriormente

// //  const criarTarefa = (evento) => {

// //     event.preventDefault();
// //     const input = document.querySelector('[data-form-input]');
// //     let valor = input.value;   
// //     console.log(valor)
// //     input.value = " ";

// //  };

// //  const novaTarefa = document.querySelector('[data-form-button]');
// //   novaTarefa.onclick = criarTarefa;

//  // Adicionar a tarefa no corpo da página

//  // 1 - adicionar com DOM a lista<li>
//  // 2 - inseriu dentro de outra variavel
//  // 3 - criar um modelo de paragrafo(template string) HTML com JS
//  // 4 - acessar a li e colocar o conteudo dentro dele (innerHTML)


//   const criarTarefa = (evento) => {

//     event.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     let valor = input.value;   
   
//     //input.value = " ";

//     const tarefa = document.querySelector('[data-task]');
//     const conteudo = ` <p class="content"> ${valor} </p>`

//     tarefa.innerHTML = conteudo;
//     input.value = " "; // limpar o input


//  };

//  const novaTarefa = document.querySelector('[data-form-button]');
//   novaTarefa.onclick = criarTarefa;

  // aqui ele substituir a tarefa na página web


  // Criando elemento

  // 1 -  criou variavel lista
  // 2 -  criou variavel tarefa usando createElement
  // 3 - acessar o conteudo do elemento tarefa.innerHTML
  // 4 - anexar um elemnto dentro do outro usando appendChild
  // 5 - adicionar a classe CSS de antes na li usando ClassList


  const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    let valor = input.value;   
   
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = ` <p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);


    input.value = " "; // limpar o input


 };

 const novaTarefa = document.querySelector('[data-form-button]');
  novaTarefa.onclick = criarTarefa;



  
    

