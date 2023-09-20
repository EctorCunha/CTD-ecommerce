# CTD Ecommerce

Durante os últimos dois anos, especialmente em virtude do isolamento social, as pessoas modificaram seus hábitos de consumo.

Em geral, muitas pessoas têm optado por fazer suas compras pelo comércio eletrônico. Para termos uma ideia, o e-commerce brasileiro cresceu cerca de 72% no primeiro trimestre de 2021 (comparado com o mesmo período de 2020) e o ticket médio de compras subiu 9,4% chegando a R$447,90, segundo o relatório da empresa de consultorias NeoTrust¹. 

A CTD Commerce é uma empresa que atua neste segmento de mercado e desenvolve soluções em comércio eletrônico. Neste projeto, temos que desenvolver um protótipo de e-commerce para um dos clientes da CTD Commerce.

Atentem-se para o briefing que o cliente da CTD Commerce passou para o desenvolvimento deste protótipo.

## 🌎 Requisitos gerais
- O trabalho será desenvolvido em grupos de 4 ou 5 pessoas (Requisito indispensável);
- Tanto o front quanto o back deverão constar em um (ou dois) repositórios (Github);
- Prazo: o trabalho deverá ser entregue até o dia 20/04/2022.
{Dica importante: dividam as responsabilidades entre os integrantes do grupo, de forma que as atividades sejam feitas em paralelo};

## 🗄 Requisitos Back-end
- Você deverá fazer o back-end de nosso e-commerce em Java com o Framework Spring no modelo MVC.
- O banco de dados deverá ser o MySQL. 
- Modelo de dados: O banco de dados terá duas entidades principais, products e categories. Onde cada produto tem apenas uma categoria e cada categoria pode ter vários ou nenhum produto.
	
### API - O projeto deverá disponibilizar uma API com quatro end-points: 

- **Método POST** (https://ctdcommerce.com/products): este end-point deverá efetuar o cadastro de novos produtos. Para isso será necessário o envio das seguintes informações via corpo da requisição. Por exemplo:
{ “title”: “Bolsa”, “price”: 350.50, “category”: 1, “description”: “Produto novo.”, “image”: ”url” }
- **Método GET** (https://ctdcommerce.com/products): este end-point deverá disponibilizar os dados de todos os produtos cadastrados em um JSON.
- **Método GET** (https://ctdcommerce.com/products/1): este end-point deverá disponibilizar os dados de um produto específico em um JSON.
- **Método GET** (https://ctdcommerce.com/products/categories): este end-point deverá disponibilizar uma lista de categorias cadastradas em um JSON.
- **Método PUT** (https://ctdcommerce.com/products): este end-point também será utilizado para atualizar produtos. Para isso, será necessário o envio das informações via corpo da requisição, alterando as informações desejadas e mantendo as anteriores. Por exemplo:
{ “title”: “Bolsa”, “price”: 400.00, “category”: 1, “description”: “Produto novo.”, “image”: ”url” }
- **Método DELETE** (https://ctdcommerce.com/products/1): este end-point será responsável por excluir um recurso da API Rest. Para isso, basta enviar por parâmetro, o id do produto.

 
## 💻 Requisitos Front-end
- Todo o site deve estar responsivo.
- O entregável será uma página em HTML5, SASS e React. Opcionalmente, o trabalho deve ser feito com React-Bootstrap.
- Utilize a API criada no trabalho de Back-end acima para fornecer os dados necessários pro site. 
- Header deve conter 5 itens além da logo. Cada item deve linkar com uma parte do site. Exemplo: Home, Produtos, Carrinho, Administração, Sobre nós.
- Na home, faça um carousel de duas páginas, cada uma delas terá 3 produtos. Ao clicar no produto, o usuário será redirecionado para a página de detalhes do mesmo.
- Seu site tem de ter uma página de detalhes para cada item listado onde haverá uma explicação sobre o mesmo. Ex: A página de uma bolsa teria um título, descrição, imagem, avaliação, etc.
- Na página de administração, haverá uma lista de produtos e o usuário deve conseguir editar, excluir e criar um novo produto. Dica: você pode utilizar um modal do bootstrap para fazer essas etapas.
- Na tela do produto, deve ser possível adicioná-lo num carrinho, mas esse carrinho ficará em um estado dentro da contextAPI. Posteriormente, quando o usuário clicar na aba de carrinho, os dados serão buscados da contextAPI e a lista de produtos será listada. (Opcionalmente, esse carrinho pode ser armazenado no local storage através da contextAPI)
- Não se esqueça de colocar todos os membros da equipe na página de sobre nós.


## 🧬 Requisitos Infraestrutura
- A API deverá ser implementada e disponibilizada por meio de um ambiente de cloud computing EC2 da Amazon Web Services.
- O front-end deverá ser hospedado em um ambiente Vercel.


## 📖 Referências
- Comércio eletrônico brasileiro cresce 72,2% no primeiro trimestre de 2021
Por Roseli Andrion | 02 de Julho de 2021
https://canaltech.com.br/e-commerce/comercio-eletronico-brasileiro-cresce-722-no-primeiro-trimestre-de-2021-188932/
