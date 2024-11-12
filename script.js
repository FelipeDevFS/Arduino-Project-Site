const projetos = [
  {
      id: 'exampleModal',
      titulo: 'Projeto 01',
      descricao: 'Neste projeto realizamos um semáforo usando Arduino Uno R3',
      imgSrc: 'img/img01-SemaforoArduino.jpg',
      relatorio: {
          disciplina: 'Sistemas de Computação e de Informação',
          participantes: 'Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva, Felipe Oliveira Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Danilo Claudino Carvalho',
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
        participantes: 'Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva, Felipe Oliveira Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Danilo Claudino Carvalho',
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
  id: "exampleModal3",
  titulo: "Projeto 03",
  descricao: "Neste projeto utilizamos um LED RGB controlado por três potenciômetros através de um Arduino",
  imgSrc: "img/Projeto3Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva, Felipe Oliveira Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Danilo Claudino Carvalho",
    laboratorio: "Sala C32",
    dia: "18/10/2024",
    introducao: "Fizemos testes no Tinkercad para validar o controle do LED RGB com três potenciômetros antes de montar o circuito físico.",
    objetivos: "⦁ Testar o controle de cores do LED RGB através de três potenciômetros no Tinkercad. ⦁ Baixar e configurar a IDE do Arduino. ⦁ Desenvolver o código para ler os valores dos potenciômetros e ajustar o LED RGB. ⦁ Montar o circuito físico conforme o modelo do simulador.",
    materiais: "⦁ protoboard. ⦁ Fios Jumper. ⦁ Três Potenciômetros. ⦁ Arduino. ⦁ LED RGB.",
    diagrama: "Aqui vai o diagrama do circuito com o LED RGB e três potenciômetros...",
    codigo: "img/Projeto03Codigo.jpg",
    procedimentos: "⦁ Realização de testes no Tinkercad para validar o controle do LED RGB. ⦁ Desenvolvimento do código, definindo as portas para o LED RGB e leitura dos potenciômetros. ⦁ Montagem do circuito físico conforme o modelo do simulador. ⦁ Transferência do código do notebook para a placa Arduino.",
    resultados: "O controle do LED RGB com os três potenciômetros funcionou como esperado. Conseguimos ajustar as cores do LED sem problemas.",
    discussao: "O uso do Tinkercad foi útil para simular o projeto e evitar erros na montagem física. A combinação dos potenciômetros para controle do LED RGB permitiu uma experimentação prática interessante.",
    conclusao: "O projeto foi concluído com sucesso. O Tinkercad facilitou a simulação do controle de cores com os potenciômetros, garantindo a funcionalidade correta do circuito na montagem física.",
    referencias: "⦁ Tinkercad: https://www.tinkercad.com/"
  }
},

{
  id: "exampleModal4",
  titulo: "Projeto 04",
  descricao: "Neste projeto utilizamos um LED RGB controlado por três potenciômetros através de um Arduino",
  imgSrc: "img/Projeto3Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva, Felipe Oliveira Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Danilo Claudino Carvalho",
    laboratorio: "Sala C32",
    dia: "18/10/2024",
    introducao: "Fizemos testes no Tinkercad para validar o controle do LED RGB com três potenciômetros antes de montar o circuito físico.",
    objetivos: "⦁ Testar o controle de cores do LED RGB através de três potenciômetros no Tinkercad. ⦁ Baixar e configurar a IDE do Arduino. ⦁ Desenvolver o código para ler os valores dos potenciômetros e ajustar o LED RGB. ⦁ Montar o circuito físico conforme o modelo do simulador.",
    materiais: "⦁ protoboard. ⦁ Fios Jumper. ⦁ Três Potenciômetros. ⦁ Arduino. ⦁ LED RGB.",
    diagrama: "Aqui vai o diagrama do circuito com o LED RGB e três potenciômetros...",
    codigo: "img/Projeto03Codigo.jpg",
    procedimentos: "⦁ Realização de testes no Tinkercad para validar o controle do LED RGB. ⦁ Desenvolvimento do código, definindo as portas para o LED RGB e leitura dos potenciômetros. ⦁ Montagem do circuito físico conforme o modelo do simulador. ⦁ Transferência do código do notebook para a placa Arduino.",
    resultados: "O controle do LED RGB com os três potenciômetros funcionou como esperado. Conseguimos ajustar as cores do LED sem problemas.",
    discussao: "O uso do Tinkercad foi útil para simular o projeto e evitar erros na montagem física. A combinação dos potenciômetros para controle do LED RGB permitiu uma experimentação prática interessante.",
    conclusao: "O projeto foi concluído com sucesso. O Tinkercad facilitou a simulação do controle de cores com os potenciômetros, garantindo a funcionalidade correta do circuito na montagem física.",
    referencias: "⦁ Tinkercad: https://www.tinkercad.com/"
  }
},

{
  id: 'exampleModal5',
  titulo: 'Projeto 05',
  descricao: "Neste experimento, utilizamos um push button para controlar um LED através de um Arduino UNO.",
  imgSrc: "img/Projeto4Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Felipe Oliveira Carvalho, Danilo Claudino Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva",
    laboratorio: "Sala C32",
    dia: "09/11/2024",
    introducao: "Neste experimento, o objetivo foi utilizar um botão de pressão (push button) em conjunto com a placa Arduino UNO para acionar um dispositivo de saída, como um LED, mediante a interação do usuário. O experimento foi desenvolvido em duas etapas: inicialmente, utilizando o simulador Tinkercad para testar o circuito virtual e o código, e, em seguida, montando o circuito fisicamente para validar os resultados obtidos. O uso do simulador permitiu identificar falhas no código e otimizar a montagem do circuito real, facilitando o processo de implementação.",
    objetivos: "● Validar o funcionamento do push button com o Arduino utilizando o simulador Tinkercad. ● Desenvolver e ajustar o código na IDE do Arduino para controlar um LED com base na interação do usuário. ● Montar o circuito físico com a placa Arduino UNO e testar o funcionamento real do sistema.",
    materiais: "● Simulador Tinkercad ● Placa Arduino UNO R3 ● Protoboard ● Push Button (Botão de pressão) ● LED ● Resistor de 220 Ω ● Fios de conexão ● Cabo USB AB ● Notebook",
    diagrama: "O circuito consiste em um push button conectado a um pino digital do Arduino (pino 2) e um LED conectado a outro pino digital (pino 13) através de um resistor de 220 Ω. ● O push button foi conectado entre o pino 2 do Arduino e o GND (terra), com uma configuração de pull-down interno para evitar leituras indesejadas. ● O LED foi conectado ao pino 13 do Arduino, com o resistor em série para limitar a corrente.",
    codigo: "img/Projeto04Codigo.jpg",
    procedimentos: "1. Simulação no Tinkercad: ○ Criamos o circuito virtual utilizando o simulador Tinkercad. ○ Conectamos o push button e o LED ao Arduino e verificamos se o código estava funcionando corretamente. 2. Desenvolvimento do Código: ○ Escrevemos o código na IDE do Arduino para controlar o LED com o botão. ○ Testamos o código no simulador e ajustamos conforme necessário. 3. Montagem do Circuito Físico: ○ Com o circuito validado no simulador, montamos o circuito físico em uma protoboard. ○ Conectamos o push button ao pino 2 do Arduino e o LED ao pino 13. 4. Transferência do Código para a IDE Arduino: ○ O código foi transferido para a IDE Arduino e o upload foi feito para a placa física. ○ Realizamos os testes finais e verificamos o funcionamento correto do sistema.",
    resultados: "O circuito físico funcionou conforme o esperado. Ao pressionar o botão, o LED acendeu, e ao soltar, o LED apagou. O sistema foi validado tanto no ambiente virtual quanto físico, com o código funcionando corretamente em ambas as plataformas.",
    discussao: "O uso do simulador Tinkercad foi essencial para verificar o comportamento do circuito antes da montagem física. Com ele, foi possível testar o código e identificar erros na configuração do botão e do LED sem a necessidade de montagens físicas complexas. Durante a implementação física, houve a necessidade de um pequeno ajuste no código para tratar a leitura do botão (debouncing), o que foi facilmente resolvido com o delay de 100 ms.",
    conclusao: "Este experimento demonstrou a importância da simulação no processo de desenvolvimento de circuitos eletrônicos e programação com Arduino. A interação com o push button foi perfeitamente validada, e o controle do LED foi bem-sucedido. O uso do simulador Tinkercad facilitou a identificação de falhas e a otimização do código, enquanto a montagem física confirmou a funcionalidade do sistema, proporcionando uma experiência prática valiosa.",
    referencias: "● Tinkercad: https://tinkercad.com ● IDE Arduino: https://www.arduino.cc"
  }
},

{
  id: 'exampleModal6',
  titulo: 'Projeto 06',
  descricao: "Neste experimento, utilizamos um push button para controlar um LED através de um Arduino UNO.",
  imgSrc: "img/Projeto4Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Felipe Oliveira Carvalho, Danilo Claudino Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva",
    laboratorio: "Sala C32",
    dia: "09/11/2024",
    introducao: "Neste experimento, o objetivo foi utilizar um botão de pressão (push button) em conjunto com a placa Arduino UNO para acionar um dispositivo de saída, como um LED, mediante a interação do usuário. O experimento foi desenvolvido em duas etapas: inicialmente, utilizando o simulador Tinkercad para testar o circuito virtual e o código, e, em seguida, montando o circuito fisicamente para validar os resultados obtidos. O uso do simulador permitiu identificar falhas no código e otimizar a montagem do circuito real, facilitando o processo de implementação.",
    objetivos: "● Validar o funcionamento do push button com o Arduino utilizando o simulador Tinkercad. ● Desenvolver e ajustar o código na IDE do Arduino para controlar um LED com base na interação do usuário. ● Montar o circuito físico com a placa Arduino UNO e testar o funcionamento real do sistema.",
    materiais: "● Simulador Tinkercad ● Placa Arduino UNO R3 ● Protoboard ● Push Button (Botão de pressão) ● LED ● Resistor de 220 Ω ● Fios de conexão ● Cabo USB AB ● Notebook",
    diagrama: "O circuito consiste em um push button conectado a um pino digital do Arduino (pino 2) e um LED conectado a outro pino digital (pino 13) através de um resistor de 220 Ω. ● O push button foi conectado entre o pino 2 do Arduino e o GND (terra), com uma configuração de pull-down interno para evitar leituras indesejadas. ● O LED foi conectado ao pino 13 do Arduino, com o resistor em série para limitar a corrente.",
    codigo: "img/Projeto04Codigo.jpg",
    procedimentos: "1. Simulação no Tinkercad: ○ Criamos o circuito virtual utilizando o simulador Tinkercad. ○ Conectamos o push button e o LED ao Arduino e verificamos se o código estava funcionando corretamente. 2. Desenvolvimento do Código: ○ Escrevemos o código na IDE do Arduino para controlar o LED com o botão. ○ Testamos o código no simulador e ajustamos conforme necessário. 3. Montagem do Circuito Físico: ○ Com o circuito validado no simulador, montamos o circuito físico em uma protoboard. ○ Conectamos o push button ao pino 2 do Arduino e o LED ao pino 13. 4. Transferência do Código para a IDE Arduino: ○ O código foi transferido para a IDE Arduino e o upload foi feito para a placa física. ○ Realizamos os testes finais e verificamos o funcionamento correto do sistema.",
    resultados: "O circuito físico funcionou conforme o esperado. Ao pressionar o botão, o LED acendeu, e ao soltar, o LED apagou. O sistema foi validado tanto no ambiente virtual quanto físico, com o código funcionando corretamente em ambas as plataformas.",
    discussao: "O uso do simulador Tinkercad foi essencial para verificar o comportamento do circuito antes da montagem física. Com ele, foi possível testar o código e identificar erros na configuração do botão e do LED sem a necessidade de montagens físicas complexas. Durante a implementação física, houve a necessidade de um pequeno ajuste no código para tratar a leitura do botão (debouncing), o que foi facilmente resolvido com o delay de 100 ms.",
    conclusao: "Este experimento demonstrou a importância da simulação no processo de desenvolvimento de circuitos eletrônicos e programação com Arduino. A interação com o push button foi perfeitamente validada, e o controle do LED foi bem-sucedido. O uso do simulador Tinkercad facilitou a identificação de falhas e a otimização do código, enquanto a montagem física confirmou a funcionalidade do sistema, proporcionando uma experiência prática valiosa.",
    referencias: "● Tinkercad: https://tinkercad.com ● IDE Arduino: https://www.arduino.cc"
  }
},

{
  id: 'exampleModal7',
  titulo: 'Projeto 07',
  descricao: "Neste experimento, utilizamos um sensor ultrassônico para medir distâncias e controlar um micro servo motor com Arduino.",
  imgSrc: "img/Projeto5Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Felipe Oliveira Carvalho, Danilo Claudino Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva",
    laboratorio: "Sala C32",
    dia: "09/11/2024",
    introducao: "O experimento realizado teve como objetivo controlar um micro servo motor utilizando um sensor ultrassônico para medir distâncias. O sensor ultrassônico é um dispositivo que usa ondas sonoras para medir a distância de objetos ao seu redor. O valor da distância captada pelo sensor foi utilizado para controlar o ângulo de rotação de um micro servo motor, criando uma aplicação prática de automação. O experimento foi realizado em duas etapas: primeiro, foi simulado o circuito no Tinkercad e, em seguida, o circuito foi montado fisicamente com a placa Arduino UNO.",
    objetivos: "● Validar o funcionamento do sensor ultrassônico no controle do servo motor. ● Desenvolver e ajustar o código na IDE do Arduino para ler as distâncias do sensor ultrassônico e controlar o servo motor com base nesses valores. ● Montar o circuito físico e testar o funcionamento do sistema.",
    materiais: "● Simulador Tinkercad ● Placa Arduino UNO R3 ● Protoboard ● Sensor Ultrassônico HC-SR04 ● Micro Servo Motor (como o SG90) ● Fios de conexão ● Cabo USB AB ● Notebook",
    diagrama: "O circuito consiste nos seguintes componentes: ● O sensor ultrassônico HC-SR04 foi conectado à placa Arduino, com o pino Trigger no pino 9 e o pino Echo no pino 10. ● O micro servo motor foi conectado ao pino 6 da placa Arduino. ● O sensor HC-SR04 é alimentado pelos pinos VCC e GND da placa Arduino.",
    codigo: "img/Projeto05Codigo.jpg",
    procedimentos: "1. Simulação no Tinkercad: ○ Criamos o circuito virtual utilizando o simulador Tinkercad. Conectamos o sensor ultrassônico HC-SR04 e o micro servo motor à placa Arduino e testamos o código no ambiente simulado. 2. Desenvolvimento do Código: ○ O código foi escrito na IDE do Arduino para controlar o servo motor com base na distância medida pelo sensor ultrassônico. ○ A leitura do sensor foi feita utilizando a função pulseIn, e a distância foi convertida em um valor de ângulo para o servo motor com a função map. 3. Montagem do Circuito Físico: ○ Após validar o circuito e o código no simulador, o circuito foi montado fisicamente em uma protoboard. ○ O sensor ultrassônico e o servo motor foram conectados à placa Arduino UNO. 4. Transferência do Código para a IDE Arduino: ○ O código foi transferido para a IDE Arduino e feito o upload para a placa física. ○ Após o upload, o funcionamento foi testado no ambiente real.",
    resultados: "O sistema funcionou conforme o esperado. O sensor ultrassônico mediu corretamente as distâncias e, com base nesses valores, o micro servo motor foi movido para o ângulo correspondente. O monitor serial exibiu as distâncias em centímetros, e o servo se movimentou de acordo com a leitura do sensor, demonstrando que o sistema estava operando de forma precisa.",
    discussao: "Durante o experimento, observamos que a precisão do sensor ultrassônico depende da superfície do objeto em frente a ele, sendo mais eficaz para superfícies planas e sólidas. O código foi ajustado para garantir que a distância fosse mapeada corretamente para os ângulos do servo motor. O sistema demonstrou uma resposta satisfatória e rápida às mudanças de distância. Uma questão relevante foi o comportamento do servo motor para distâncias extremas (muito próximas ou muito distantes). O mapeamento da distância para o ângulo do servo foi feito dentro de um intervalo seguro (0 a 180 graus), mas distâncias superiores a 100 cm resultaram em ângulos muito próximos de 180 graus, o que pode gerar movimentos indesejados.",
    conclusao: "O experimento foi bem-sucedido, mostrando como utilizar um sensor ultrassônico para controlar a posição de um micro servo motor de forma automatizada. O sistema é eficaz para medir distâncias e realizar ajustes no servo motor em tempo real, sendo útil para aplicações como robôs e sistemas de automação. A validação tanto no simulador quanto no ambiente físico mostrou a eficácia da solução proposta.",
    referencias: "● Tinkercad: https://tinkercad.com ● IDE Arduino: https://www.arduino.cc ● Sensor Ultrassônico HC-SR04: Documentação do HC-SR04"
  }
},

{
  id: 'exampleModal8',
  titulo: 'Projeto 08',
  descricao: "Neste experimento, utilizamos dois potenciômetros para controlar dois micro servo motores com Arduino.",
  imgSrc: "img/Projeto5Tinkercad.jpg",
  relatorio: {
    disciplina: "Sistemas de Computação e de Informação",
    participantes: "Felipe Oliveira Carvalho, Danilo Claudino Carvalho, Juan Pablo Souza Chagas, Felipe Henrique dos Reis Martins, Hugo Mesquita Nunes, Arthur Vinicius Sena Campos, Gabriel Marcos Ferreira da Silva",
    laboratorio: "Sala C32",
    dia: "09/11/2024",
    introducao: "Neste experimento, foi explorado o controle de dois micro servo motores utilizando dois potenciômetros. O potenciômetro, um dispositivo variável de resistência, foi usado para ajustar os ângulos de dois servos de forma independente. Cada potenciômetro altera a posição de um servo motor, demonstrando a interação analógica entre o Arduino e os componentes físicos. O experimento foi realizado em duas etapas: primeiro, com a simulação do circuito no Tinkercad e, em seguida, a montagem física do circuito com a placa Arduino UNO.",
    objetivos: "● Controlar dois micro servo motores usando dois potenciômetros. ● Desenvolver e ajustar o código para ler os valores dos potenciômetros e mapear esses valores para os ângulos dos servos. ● Montar o circuito físico e testar o funcionamento do sistema.",
    materiais: "● Simulador Tinkercad ● Placa Arduino UNO R3 ● Protoboard ● 2 Potenciômetros ● 2 Micro Servo Motores (como SG90) ● Fios de conexão ● Cabo USB AB ● Notebook",
    diagrama: "O circuito consiste nos seguintes componentes: ● Os dois potenciômetros foram conectados aos pinos analógicos A0 e A1 da placa Arduino. ● Cada micro servo motor foi conectado a um pino digital do Arduino: o primeiro servo ao pino 9 e o segundo servo ao pino 10. ● Os potenciômetros têm um terminal conectado ao VCC (5V), outro ao GND e o terminal central (wiper) aos pinos analógicos do Arduino.",
    codigo: "img/Projeto05Codigo.jpg",
    procedimentos: "1. Simulação no Tinkercad: ○ Criamos o circuito virtual utilizando o simulador Tinkercad. Conectamos os potenciômetros e os servos à placa Arduino e testamos o código no ambiente simulado. 2. Desenvolvimento do Código: ○ O código foi escrito na IDE do Arduino para controlar os servos com base nas leituras dos potenciômetros. ○ As leituras dos potenciômetros foram feitas utilizando a função analogRead e os valores foram mapeados para ângulos usando a função map. 3. Montagem do Circuito Físico: ○ Após validar o circuito e o código no simulador, o circuito foi montado fisicamente em uma protoboard. 4. Transferência do Código para a IDE Arduino: ○ O código foi transferido para a IDE Arduino e feito o upload para a placa física. Após o upload, o funcionamento foi testado no ambiente real.",
    resultados: "O sistema funcionou conforme o esperado. Os potenciômetros foram lidos corretamente e, com base nesses valores, os servos foram movidos para os ângulos correspondentes. O sistema mostrou boa resposta aos ajustes realizados nos potenciômetros, controlando os servos de forma eficiente e precisa.",
    discussao: "Durante o experimento, observamos que a precisão do controle do servo estava diretamente relacionada à estabilidade das leituras dos potenciômetros. O código foi ajustado para garantir que as leituras fossem mapeadas corretamente para os ângulos dos servos. No entanto, notamos que o comportamento do sistema poderia ser melhorado com a implementação de filtros para evitar flutuações indesejadas nas leituras dos potenciômetros.",
    conclusao: "O experimento foi bem-sucedido, demonstrando como utilizar potenciômetros para controlar a posição de micro servo motores de forma precisa. O sistema é eficaz para aplicações de controle simples e pode ser expandido para sistemas mais complexos, como robótica e automação. A validação tanto no simulador quanto no ambiente físico mostrou a eficácia da solução proposta.",
    referencias: "● Tinkercad: https://tinkercad.com ● IDE Arduino: https://www.arduino.cc"
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
