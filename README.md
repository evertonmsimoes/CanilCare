# Projeto CanilCare

Este é um projeto simples desenvolvido como parte do desafio para a vaga de Estagiário Full Stack na DTI. Foi uma oportunidade incrível aprender sobre o desenvolvimento web e explorar novas tecnologias.

## Experiência de Desenvolvimento

### Escolha das Tecnologias

O projeto foi desenvolvido utilizando o Flask no back-end e o React como front-end. Optei pelo Flask devido à sua simplicidade e facilidade de implementação. Como se tratava de um projeto simples e o foco principal estava no aprendizado do front-end, a escolha do Flask permitiu que eu me concentrasse mais na parte do front-end, que foi onde enfrentei os maiores desafios.


## Descrição do Projeto

O projeto consiste em um front-end onde o usuário pode selecionar a data de hospedagem de seus cães e o número de cães pequenos e grandes. Ao clicar em "Escolher Melhor Petshop", o front-end faz uma requisição para a API, que retorna o melhor petshop com base nos critérios de preço e distância.

## Tecnologias Utilizadas

- **Front-end:** React
- **Back-end:** Flask
- **Banco de Dados:** Não se aplica

# Desenvolvimento Front-End

## Desafios e Aprendizados

Desenvolver o front-end foi a parte mais desafiadora do projeto para mim. Apesar de ter alguma experiência acadêmica em desenvolvimento web, nunca havia trabalhado em um projeto real de front-end antes, especialmente com React. Durante esse processo, aprendi conceitos importantes, como `useState`, `useEffect` e `props`.

## Tecnologias Utilizadas

- **React Hooks:** Utilizei React Hooks para gerenciar o estado dos componentes.
- **CanilCare.jsx:** O componente principal é responsável por capturar os dados inseridos pelo usuário, fazer uma requisição para a API e exibir o resultado na interface.
- **Estilização:** A estilização do projeto é feita principalmente no arquivo CanilCare.css, onde definimos o estilo do cabeçalho, do formulário e dos elementos de entrada.

## Descrição do Componente Principal

O componente CanilCare.jsx é o ponto central do front-end. Ele consiste em um formulário onde o usuário pode inserir a data de hospedagem de seus cães, juntamente com o número de cães pequenos e grandes. Ao clicar no botão "Escolher Melhor Petshop", os dados são enviados para a API e o resultado é exibido na interface.

## Desafios Enfrentados

Enfrentei desafios ao lidar com requisições assíncronas para a API e ao exibir os dados recebidos de forma adequada na interface. Apesar de ser uma aplicação simples, estou feliz com a minha evolução e estou ansioso para continuar aprendendo e aprimorando minhas habilidades no front-end.



### Back-end (Flask)

Para o back-end, decidi armazenar os dados em memória em vez de utilizar um banco de dados. Essa decisão foi tomada para ganhar tempo devido à minha inexperiência com o React e também para simplificar o escopo do projeto. Embora seja uma abordagem simples, atendeu às necessidades do projeto e permitiu que eu me concentrasse mais na parte do front-end, que era o meu principal objetivo.




## Instruções de Uso

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta `FrontEnd` e execute `npm install` para instalar as dependências do front-end.
3. Navegue até a pasta `BackEndPython` e execute `pip install -r requirements.txt` para instalar as dependências do back-end.
4. Execute o back-end executando `python app.py` na pasta `BackEndPython`.
5. Execute o front-end executando `npm start` na pasta `FrontEnd`.
6. Acesse o projeto em seu navegador através do endereço `http://localhost:5173`.

Pretendo revisitar este projeto no futuro e realizar algumas alterações para aprender mais sobre as ferramentas utilizadas e o desenvolvimento front-end em geral.
Espero que esta descrição demonstre o meu entusiasmo pelo projeto e o quanto aprendi durante o processo de desenvolvimento!

