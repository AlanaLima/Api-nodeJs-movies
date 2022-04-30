<h1> 👨🏻‍💻 Projeto Smovies </h1>

O seguinte projeto foi desenvolvido durante o meu curso de Fullstack na Fullture. A ideia era criar uma aplicação que fosse uma espécide de diário de filmes, onde o usuário pudesse se cadastrar, logar, e criar sua  lista de filmes e séries favoritos, que gostaria de ver, que viu e que está vendo. Essas listas seriam dinâmicas.

Essa parte representa o backend feito em Node dessa aplicação.



## ✒️ Autora

* **Alana Lima** - [GitHub](https://github.com/AlanaLima) - [Linkedin](https://www.linkedin.com/in/alana-vieira-bb9006158/ )


## 🚀 Requisitos, modificações e execução
### ⚙️Requisitos
* Node e npm
* Banco Postgress(se for outro, mudar as configurações em config database.js)
* Sequelize
* Postman

### 🔧Modificações para rodar localmente
- Faça o download do código
- Importe o projeto na sua IDE de preferência
- Rode o comando npm i
- Configure um bando de dados localmente no arquivo database.js.
- Execute o comando sequelize db:migrate ou npx sequelize-cli db:migrate
- As tabelas serão criadas, mas não povoadas
- Dentro do projeto digite o comando node index.js
- Pronto, agora você pode povoar as tabelas e testar os endpoints

### 📋Execução

<p> Simulando um primeiro acesso, é possível criar um login, junto com um usuário, ou seja, criar uma conta com email e senha e já criar seu perfil, com seu nome e uma descrição!</p>
<p> Simulando então o login desse usuário, é possível puxar as informações sobre seu login a partir do seu email e senha.
E então a partir do id do login, puxar as informações do usuário. Com as informações do usuário, pode-se criar listas para ele, listas vazias, a priori. Esse método também deveria ser chamado pelo front "as escondidas" criando listas prontas, mas ele também permitiria melhorias no site, com o cliente criando suas proprias listas personalizadas.</p>
<p>Faltaria então, povoar essas listas com os filmes desejados. Para isso é preciso criar um filme, esse método na verdade, seria feito as escondidas no front, puxando infos dos filmes do IMDB e colocando o poster e sua descrição no nosso banco, para que ele aparecesse nas listas do usuário e funcionasse como um backup, diminuindo a dependencia da API externa.</p>
<p> Para inserir esse filme na lista desejada seria necesssário o id da lista e o id do filme e fazer um post com essas informações.</p>

<p> Uma vez que tudo isso esteja definido, esses endpoints principais estão listados abaixo.</p>

#### 📌Endpoints

Endpoint         |        Função       |Método        |
:----------------|---------------------|--------------:
/loginuser | Cria um login com email, senha e também um usuario com nome e descrição |POST| 
/login/email/senha | Lista o login com base no seu email e senha |GET| 
/login/idlogin/| Lista o login do cliente e suas informações de usuario pelo id do login|GET| 
/user/iduser/| Lista o user cliente e suas listas pelo id do user|GET|
/lists | Cria listas para o usuário |POST| 
/lists/idlista |Lista a lista e seus filmes pelo id da lista|GET| 
/movies| Coloca um filme no nosso banco de dados |POST| 
/listmovie| Coloca um filme especificio numa lista especifica|POST| 

<p> A aplicação ainda apresenta alguns outros métodos, para conferir todos os logins, todos os users e suas listas, todas as listas e seus filmes, todos os filmes. O que seria mais útil para administradores e para testar a API. Pemite também criar um usuario e login separados, o que seria mais necessário como um método PUT não POST, para alterar infos e não criá-las </p>

##### Para testar:
- Utilize a url "localhost:8001/" com o método desejado.
Exemplo: localhost:8080/clientes/listar
- Nesse modo, o método POST (cadastrar) não funcionará corretamente pois precisa ter um "corpo" de dados passados como parâmetro.
- Nesse caso, é necessário utilizar o Postman(ou similares) para que os métodos sejam executados.

### Observações Finais
Algumas melhorias podem ser feitas na API, como criar métodos PUT para alterar informações de LOGIN e USUARIO, métodos de DELETE de LOGIN, USUARIOS E FILMES DA LISTA, entre outros.
Métodos de autenticação e segurança, uma vez que a API ainda não possui nada nesse sentido.
Além de um script pra povoar as tabelas por meio de seeders do Sequelize, facilitando testes.
