# CalculadoraWeb

## Descrição do Projeto

A **CalculadoraWeb** é um projeto de uma calculadora simples desenvolvida para uso na web. Este projeto foi criado com o intuito de praticar e demonstrar conhecimentos em desenvolvimento web, utilizando HTML, CSS e JavaScript para criar uma aplicação interativa e funcional.

## Tecnologias Utilizadas

- **HTML5**: A estrutura da aplicação foi construída utilizando HTML5, definindo a interface básica da calculadora e seus componentes, como botões, campos de entrada e exibição de resultados.

- **CSS3**: A estilização da calculadora foi feita com CSS3, proporcionando um layout limpo e moderno. Dois arquivos CSS foram utilizados:
  - `config.css`: Contém configurações globais e reset de estilos para garantir consistência visual.
  - `style.css`: Responsável pela estilização específica da calculadora, incluindo cores, tamanhos de botões e alinhamento dos elementos.

- **JavaScript**: A lógica da calculadora foi implementada em JavaScript, possibilitando a interação do usuário com a interface. As principais funcionalidades incluem captura de cliques nos botões, realização de cálculos, limpeza de dados e tratamento de erros. O código está encapsulado dentro de uma função construtora (`Calculadora`), garantindo uma boa organização e modularidade.

## Estrutura do Código

### HTML

O código HTML define a estrutura da calculadora, incluindo:
- Um campo de entrada (`input`) para exibir os números digitados e o resultado das operações.
- Botões para números, operadores, limpar a tela, apagar o último dígito e calcular o resultado.

### JavaScript

O JavaScript é responsável pela lógica de funcionamento da calculadora:
- **Captura de cliques**: Escuta os eventos de clique nos botões e chama as funções apropriadas para cada ação.
- **Funções principais**:
  - `addNumDisplay`: Adiciona o número ou operador clicado ao display da calculadora.
  - `clear`: Limpa todo o conteúdo do display.
  - `del`: Apaga o último caractere digitado.
  - `realizaConta`: Avalia a expressão matemática digitada e exibe o resultado no display. Caso a expressão seja inválida, uma mensagem de erro é exibida.
- **Captura do Enter**: Permite que a operação seja realizada pressionando a tecla Enter no teclado.

### CSS

O CSS foi utilizado para dar estilo à interface da calculadora, garantindo uma experiência de usuário agradável.

- **Estilo dos botões**: Cores, espaçamento e alinhamento foram definidos para que os botões se comportem de maneira intuitiva e visualmente agradável.
- **Estilo do display**: O campo de entrada foi estilizado para destacar o resultado das operações realizadas pelo usuário.

## Como Executar o Projeto

1. Clone este repositório em sua máquina local usando o comando:
   ```bash
   git clone https://github.com/seuusuario/CalculadoraWeb.git
