const projetos = [
  {
      id: 'exampleModal',
      titulo: 'Projeto 01',
      descricao: 'Neste projeto realizamos um semáforo usando Arduino Uno R3',
      imgSrc: 'img/img01-SemaforoArduino.jpg',
      relatorio: {
          disciplina: 'Sistemas Digitais',
          participantes: 'Aluno A, Aluno B / Sistemas de Informação / 4º Período',
          laboratorio: 'Lab. de Eletrônica',
          dia: '15/08/2024',
          sumario: 'Simulação de um semáforo utilizando Arduino...',
          introducao: 'Este projeto visa simular...',
          objetivos: 'Construir e testar...',
          materiais: 'Arduino Uno, LEDs, resistores...',
          diagrama: 'Aqui vai o diagrama do circuito...',
          codigo: 'Aqui vai o código fonte do Arduino...',
          procedimentos: 'Passo a passo...',
          resultados: 'Os resultados observados...',
          discussao: 'Discussão sobre os desafios...',
          conclusao: 'Conclusão do projeto...',
          referencias: 'Referência 1, Referência 2...'
      }
  },
  {
      id: 'exampleModal2',
      titulo: 'Projeto 02',
      descricao: 'Neste projeto realizamos led controlado por um potenciômetro',
      imgSrc: 'img/img02-PotenciometroArduino.jpg',
      relatorio: {
          disciplina: 'Sistemas Digitais',
          participantes: 'Aluno C, Aluno D / Sistemas de Informação / 4º Período',
          laboratorio: 'Lab. de Eletrônica',
          dia: '20/08/2024',
          sumario: 'Controle de intensidade de LED usando potenciômetro...',
          introducao: 'Este projeto tem como objetivo...',
          objetivos: 'Controlar a intensidade de um LED...',
          materiais: 'Arduino Uno, Potenciômetro, LEDs...',
          diagrama: 'Aqui vai o diagrama do circuito...',
          codigo: 'Aqui vai o código fonte do Arduino...',
          procedimentos: 'Passo a passo...',
          resultados: 'Os resultados observados...',
          discussao: 'Discussão sobre os desafios...',
          conclusao: 'Conclusão do projeto...',
          referencias: 'Referência 1, Referência 2...'
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
              <p><strong>SUMÁRIO:</strong> ${projeto.relatorio.sumario}</p>
              <p><strong>INTRODUÇÃO:</strong> ${projeto.relatorio.introducao}</p>
              <p><strong>OBJETIVOS:</strong> ${projeto.relatorio.objetivos}</p>
              <p><strong>MATERIAIS UTILIZADOS:</strong> ${projeto.relatorio.materiais}</p>
              <p><strong>DIAGRAMA DO CIRCUITO:</strong> ${projeto.relatorio.diagrama}</p>
              <p><strong>CÓDIGO FONTE:</strong> ${projeto.relatorio.codigo}</p>
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
