const projetos = [
  {
      id: 'exampleModal',
      titulo: 'Projeto 01',
      descricao: 'Neste projeto realizamos um semáforo usando Arduino Uno R3',
      imgSrc: 'img/img01-SemaforoArduino.jpg',
      relatorio: {
          disciplina: 'Sistemas de Computação e de Informação',
          participantes: 'Arthur Vinicius Sena Campos - S.I - 4° Semestre. Gabriel Marcos Ferreira da Silva - S.I - 4° Semestre. Felipe Oliveira Carvalho - S.I - 4° Semestre. Juan Pablo Souza Chagas - S.I - 4° Semestre. Felipe Henrique dos Reis Martins - S.I - 4° Semestre. Hugo Mesquita Nunes - S.I - 4° Semestre. Danilo Claudino Carvalho - S.I - 4° Semestre ',
          laboratorio: 'Sala C32',
          dia: '21-08-2024',
          introducao: 'Primeiro começamos fazendo testes no  Tinkercad web, que é um simulador, para evitar problemas na montagem física. ',
          objetivos: '> Realizar testes no simulador Tinkercad. > Baixar e configurar a IDE do arduino. > Desenvolver e testar o código para o projeto. > Montar o circuito físico conforme o modelo do simulador. ',
          materiais: '> Simulador Tinkercad. > IDE do arduino. > Placa arduino de origem chinesa.  > Driver específico para a placa.  > Notebook. > LEDs.  >Resistores. ',
          diagrama: 'img/DiagramaModal1.jpg',
          codigo: 'img/CodigoModal1.jpg',
          procedimentos: '> Realização de testes no Tinkercad web. > Download e instalação da IDE do arduino. > Desenvolvimento do código, definindo as portas para as luzes de LED. > Download do driver específico para a placa chinesa. > Montagem do circuito físico conforme o modelo do simulador. > Transferência do código do notebook para a placa arduino. ',
          resultados: 'O único problema encontrado foi que o LED verde do kit estava queimado. Testamos com os outros resistores e ligações diferentes, mas o LED realmente estava queimado.No geral, tanto a codificação quanto as ligações funcionaram conforme o esperado. ',
          discussao: 'A utilização do simulador Tinkercad foi essencial para evitar problemas na montagem física. A necessidade de baixar um driver específico para a placa chinesa foi um desafio, mas foi superado com sucesso. A identificação de um LED queimado foi o único contratempo, mas não comprometeu o sucesso geral do projeto. ',
          conclusao: 'O projeto foi realizado com sucesso, tanto na parte de codificação quanto na montagem física. O uso do simulador Tinkercad e a resolução de problemas com drivers específicos foram pontos chave para o sucesso do projeto. ',
          referencias: 'Tinkercad:  https: HYPERLINK "https://www.tinkercad.com/" HYPERLINK "https://www.tinkercad.com/" HYPERLINK "https://www.tinkercad.com/"//www.tinkercad.com/'
      }
  },

  {
    id: 'exampleModal2',
    titulo: 'Projeto 02',
    descricao: 'Neste projeto realizamos led controlado por um potenciômetro',
    imgSrc: 'img/img02-PotenciometroArduino.jpg',
    relatorio: {
        disciplina: 'Sistemas de Computação e de Informação',
        participantes: 'Arthur Vinicius Sena Campos - S.I - 4° Semestre. Gabriel Marcos Ferreira da Silva - S.I - 4° Semestre. Felipe Oliveira Carvalho - S.I - 4° Semestre. Juan Pablo Souza Chagas - S.I - 4° Semestre. Felipe Henrique dos Reis Martins - S.I - 4° Semestre. Hugo Mesquita Nunes - S.I - 4° Semestre. Danilo Claudino Carvalho - S.I - 4° Semestre',
        laboratorio: 'Sala C32',
        dia: '28-08-2024',
        introducao: 'Iniciamos o projeto utilizando o Tinkercad, uma ferramenta de simulação online que permite criar e testar circuitos eletrônicos virtualmente. Essa etapa foi crucial para identificar possíveis problemas antes de construir o circuito físico.',
        objetivos: '> Validar o circuito utilizado o simulador Tinkercad. > Configurar a IDE do arduino para desenvolver o código de controle. > Montar o circuito físico conforme o desing testado no simulador. > Testar e ajustar o circuito físico para garantir seu funcionamento correto.',
        materiais: '> Simulador Tinkercad. > Placa arduino. > Protoboard. > Notebook. > LEDs. > Resistores. > Fios de Conexão.',
        diagrama: 'img/DiagramaModal2.jpg',
        codigo: 'img/CodigoModal2.jpg',
        procedimentos: '> Realização de testes no Tinkercad web. > Desenvolvimento do código, definindo as portas para as luzes de LED. > Montagem do circuito físico conforme o modelo do simulador. > Transferência do código do notebook para a placa arduino.',
        resultados: 'No geral, tanto a codificação quanto as ligações funcionaram conforme o esperado.',
        discussao: 'A utilização do simulador Tinkercad foi essencial para evitar problemas na montagem física. O projeto, em si, foi um sucesso.',
        conclusao: 'O projeto foi realizado com sucesso, tanto na parte de codificação quanto na montagem física. O Tinkercad foi a peça chave para o sucesso do projeto.',
        referencias: '> Tinkercad: https://www.tinkercad.com/'
    }
},


{
  id: 'exampleModal3',
  titulo: 'Projeto 03',
  descricao: 'Neste projeto utilizamos um sensor de movimento e LED controlados por Arduino',
  imgSrc: 'img/img03-SensorMovimentoArduino.jpg',
  relatorio: {
      disciplina: 'Sistemas de Computação e de Informação',
      participantes: 'Felipe Oliveira Carvalho - S.I - 4° Semestre. Danilo Claudino Carvalho - S.I - 4° Semestre. Juan Pablo Souza Chagas - S.I - 4° Semestre. Felipe Henrique dos Reis Martins - S.I - 4° Semestre. Hugo Mesquita Nunes - S.I - 4° Semestre. Arthur Vinicius Sena Campos - S.I - 4° Semestre. Gabriel Marcos Ferreira da Silva - S.I - 4° Semestre.',
      laboratorio: 'Sala C32',
      dia: '04/09/2024',
      introducao: 'Iniciamos o experimento por meio do simulador Tinkercad, testando o circuito virtualmente e elaborando o código em conjunto com o grupo, sendo crucial para identificar falhas antes de montar o circuito físico.',
      objetivos: '⦁ Validar o circuito utilizando o simulador Tinkercad. ⦁ Configurar a IDE Arduino para desenvolver o código fonte. ⦁ Montar o circuito físico conforme o design testado no simulador. ⦁ Testar e ajustar o circuito físico para garantir seu funcionamento correto.',
      materiais: '⦁ Simulador Tinkercad. ⦁ Placa Arduino UNO R3. ⦁ Protoboard. ⦁ 1 Sensor de movimento HC-SR04. ⦁ 1 Led Vermelho. ⦁ 1 Resistor de 220 Ω. ⦁ 7 Fios de conexão. ⦁ Cabo USB AB. ⦁ Notebook.',
      diagrama: 'img/DiagramaModal3.jpg',
      codigo: 'img/CodigoModal3.jpg',
      procedimentos: '⦁ Realização de Testes no Tinkercad com materiais virtuais. ⦁ Desenvolvimento do código. ⦁ Montagem do circuito físico conforme o modelo do simulador. ⦁ Transferência do código do Tinkercad para a IDE Arduino. ⦁ Conexão do notebook com os códigos para a placa Arduino UNO.',
      resultados: 'Sucesso, tanto a codificação quanto às ligações funcionaram conforme o planejado.',
      discussao: 'Houve alguns problemas na parte de calcular a distância correta para o sensor de movimento, mas o Tinkercad ajudou a resolvê-los, evitando problemas na montagem física.',
      conclusao: 'Foi interessante ver como o sensor ultrassônico capta objetos e calcula a distância, sendo um projeto bem sucedido tanto na simulação quanto na montagem física.',
      referencias: '⦁ Tinkercad: https://tinkercad.com ⦁ IDE Arduino.'
  }
},
{
  id: 'exampleModal4',
  titulo: 'Projeto 04',
  descricao: 'Neste projeto utilizamos um sensor ultrassônico e um LED RGB controlados por Arduino',
  imgSrc: 'img/img04-SensorUltrassonicoArduino.jpg',
  relatorio: {
      disciplina: 'Sistemas de Computação e de Informação',
      participantes: 'Arthur Vinicius Sena Campos - S.I - 4° Semestre. Gabriel Marcos Ferreira da Silva - S.I - 4° Semestre. Felipe Oliveira Carvalho - S.I - 4° Semestre. Juan Pablo Souza Chagas - S.I - 4° Semestre. Felipe Henrique dos Reis Martins - S.I - 4° Semestre. Hugo Mesquita Nunes - S.I - 4° Semestre. Danilo Claudino Carvalho - S.I - 4° Semestre.',
      laboratorio: 'Sala C32',
      dia: '18/10/2024',
      introducao: 'Fizemos testes no Tinkercad, que é um simulador, para evitar problemas na montagem física.',
      objetivos: '⦁ Realizar testes no simulador Tinkercad. ⦁ Baixar e configurar a IDE do Arduino. ⦁ Desenvolver e testar o código para o projeto. ⦁ Montar o circuito físico conforme o modelo do simulador.',
      materiais: '⦁ Breadboard. ⦁ Fios Jumper. ⦁ Potenciômetros. ⦁ Arduino. ⦁ LEDs.',
      diagrama: 'Aqui vai o diagrama do circuito...',
      codigo: '',
      procedimentos: '⦁ Realização de testes no Tinkercad web. ⦁ Desenvolvimento do código, definindo as portas para a luz do LED. ⦁ Montagem do circuito físico conforme o modelo do simulador. ⦁ Transferência do código do notebook para a placa Arduino.',
      resultados: 'Tivemos um pequeno problema com a falta de fios, mas resolvemos rapidamente. No geral, o projeto seguiu conforme o planejado e funcionou perfeitamente.',
      discussao: 'A utilização do Tinkercad foi essencial para evitar problemas na montagem física. A falta de fios atrasou o progresso, mas o projeto foi um sucesso.',
      conclusao: 'O projeto foi concluído com sucesso, tanto na codificação quanto na montagem física. O Tinkercad foi fundamental para o êxito do projeto.',
      referencias: '⦁ Tinkercad: https://www.tinkercad.com/'
  }
}

];


document.addEventListener("DOMContentLoaded", function () {
  criarModais();

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.addEventListener('click', function () {
          const projectTitle = card.querySelector('.title').textContent;
          const projeto = projetos.find(proj => proj.titulo === projectTitle);

          if (projeto) {
              const modalId = projeto.id;
              const modalElement = document.getElementById(modalId);
              const modalInstance = new bootstrap.Modal(modalElement);
              modalInstance.show();
          }
      });
  });
});

function criarModais() {
  const body = document.querySelector('#modal-container'); // Mudei para o id correto

  projetos.forEach(projeto => {
      const modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.id = projeto.id;
      modal.tabIndex = -1;
      modal.setAttribute('aria-labelledby', 'exampleModalLabel');
      modal.setAttribute('aria-hidden', 'true');

      modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${projeto.titulo}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>DISCIPLINA:</strong> ${projeto.relatorio.disciplina}</p>
              <p><strong>NOMES PARTICIPANTES/CURSO/PERÍODO:</strong> ${projeto.relatorio.participantes}</p>
              <p><strong>LABORATÓRIO:</strong> ${projeto.relatorio.laboratorio}</p>
              <p><strong>DIA:</strong> ${projeto.relatorio.dia}</p>
              <p><strong>INTRODUÇÃO:</strong> ${projeto.relatorio.introducao}</p>
              <p><strong>OBJETIVOS:</strong> ${projeto.relatorio.objetivos}</p>
              <p><strong>MATERIAIS UTILIZADOS:</strong> ${projeto.relatorio.materiais}</p>
              <p><strong>DIAGRAMA DO CIRCUITO:</strong></p>
              <img src="${projeto.relatorio.diagrama}" alt="Diagrama do projeto" class="img-fluid mb-2" /> 
              <p><strong>CÓDIGO FONTE:</strong></p>
              <img src="${projeto.relatorio.codigo}" alt="Diagrama do projeto" class="img-fluid mb-2" /> 
              <p><strong>PROCEDIMENTOS:</strong> ${projeto.relatorio.procedimentos}</p>
              <p><strong>RESULTADOS:</strong> ${projeto.relatorio.resultados}</p>
              <p><strong>DISCUSSÃO:</strong> ${projeto.relatorio.discussao}</p>
              <p><strong>CONCLUSÃO:</strong> ${projeto.relatorio.conclusao}</p>
              <p><strong>REFERÊNCIAS:</strong> ${projeto.relatorio.referencias}</p>
              <img src="${projeto.imgSrc}" alt="" style="width: 470px; height: 300px; border-radius: 5px;" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      `;
      body.appendChild(modal);
  });
}
