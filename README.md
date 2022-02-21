<<<<<<< HEAD
# :oncoming_automobile: ![Badge](https://img.shields.io/static/v1?label=status&message=em%20desenvolvimento&color=yellow&style=flat&logo=GITHUB)

<div align="center">
<img src="https://user-images.githubusercontent.com/75760299/152702734-4b4875ef-4cf7-44d2-89ce-1837f166b206.jpg" width="850px"/>
</div> 

# Register Compassolisa 
Olá dev tudo bem? Este é o 4º Desafio da 5º Sprint do programa de bolsas NodeJs, onde foi realizado um aplicação API REST FULL, com os conhecimentos adquiridos pelos instrutores do programa, a cada sprint realizada e os recursos fornecidos pelo programa.  

---

### 📋 Pré-requisitos
=======
# :four_leaf_clover: ![Badge](https://img.shields.io/static/v1?label=status&message=em%20desenvolvimento&color=yellow&style=flat&logo=GITHUB)

<div align="center">
<img src="https://user-images.githubusercontent.com/75760299/153065419-179f58f9-7f14-4e89-ad7f-5f2f61db93fc.jpg" width="850px"/>
</div> 

# :card_index_dividers: API restfull denominada compassolisa 
Olá dev tudo bem? Este é o 4º Desafio da 5º Sprint do programa de bolsas NodeJs, onde foi realizado um aplicação API REST FULL, com os conhecimentos adquiridos pelos instrutores do programa, a cada sprint realizada e os recursos fornecidos pelo programa.  

##

### :clipboard: Descrição do sistema a ser atendido
>>>>>>> dev
"Olá bom dia, gostaria de solicitar um sistema para abertura da minha locadora de carros. Ela se chama "compassolisa" e
atuamos no seguimento de aluguel de carro de luxo e semi luxo. Trabalhamos com carros exclusivos ou seja não temos mais de
um modelo de carro disponível por cidade. Já temos o nosso Front-end pronto, porem estamos
necessitando o Back-end, por isso contatamos vocês para desenvolver nosso Back-end, dado ao nosso front.
Iremos atuar em 3 etapas e dependendo de como for a primeira fecharemos o contrato da segunda e a terceira etapa.
Nesta primeira etapa nos pensamos em criar os registros de carros, usuários e a autenticação."

<<<<<<< HEAD
---

### ⚙️ Configuração Inicial
=======
##

###  :link: Obtendo a aplicação
>>>>>>> dev
Para obter o projeto em sua máquina local
- [x] Utilizando o git bash
```bash
# execute esse comando
git clone https://github.com/washington-wj/api-compassolisa.git
```

<<<<<<< HEAD

### 🔧 Instalação
=======
##

### :round_pushpin: Adicionando itens
>>>>>>> dev
Para rodar a aplicação é necessario fazer algumas configurações
- [x] Anexar o arquivo .env com as seguintes instruções

```bash
<<<<<<< HEAD
# adicionar a porta local do servidor
PORT = 3000

# adicionar o driver do banco utilizado no projeto
DB_DRIVE=mongodb+srv

# adicionar o hostname do banco utilizado
DB_HOST=localhost

# adicionar o a porta local do banco de dados
DB_PORT=27017

# adicionar o usuario criado no banco
DB_USER=admin

# adicionar senha criada no banco
DB_PASS=admin

# adicionar o banco criado
DB_DATABASE=compassolisa
=======
# Porta a ser utilizada no servidor
PORT_SERVER=3000

# Driver do banco de dados utilizado
DB_DRIVE=mongodb+srv

# Hostname do banco de dados utilizado
DB_HOST=localhost

# Porta local do banco de dados
DB_PORT=27017

# Usuario ADM do banco de dados
DB_USER=admin

# Senha criada no banco de dados
DB_PASS=admin

# Nome do banco de dados criado
DB_DATABASE=compassolisa

# Ou passando tudo em uma chave só
MONGODB_LOCAL_KEY=mongodb://localhost:27017/compassolisa
>>>>>>> dev
```

- [X] Adicionar a dependencias NPM

```bash
<<<<<<< HEAD
# execute esse comando para iniciar o pacote npm
npm init -y

# instalar a biblioteca express
npm install express
```

**Testando Rotas**

`UTILIZANDO O POSTMAN OU INSOMINIA`

- Car
=======
# Execute esse comando para iniciar o pacote npm
npm init -y

# Instalar a biblioteca express
npm install express

# Rodando a aplicaçao
npm run dev
```

**Aplicando Rotas**

`UTILIZANDO O POSTMAN OU INSOMNIA`

- Car  :oncoming_automobile:
>>>>>>> dev

| Action           | URI             | Verb HTTP  | Endepoint         |
| -----------------| --------------  | ---------- | ----------------- |
|:arrow_right_hook:|/api/v1/car      |    GET     | Listar Carro      |
<<<<<<< HEAD
|:arrow_right_hook:|/api/v1/car/:id  |    GET     | Consultar um Carro|
|:heavy_plus_sign: |/api/v1/car      |    POST    | Cadastrar Carro   |
| :recycle:        |/api/v1/car/:id  |    PUT     | Atualizar Carro   |
|   :x:            |/api/v1/car/:id  |    DELETE  | Deletar Carro     |

- User

| Action          | URI             | Verb HTTP  | Endepoint        |
| --------------- | --------------- | ---------- | ---------------  |
|:heavy_plus_sign:|/api/v1/car      |    POST    | Cadastrar Usuario|
=======
|:heavy_plus_sign: |/api/v1/car      |    POST    | Cadastrar Carro   |
|:arrow_right_hook:|/api/v1/car/:id  |    GET     | Consultar o Carro |
| :recycle:        |/api/v1/car/:id  |    PUT     | Atualizar Carro   |
|   :x:            |/api/v1/car/:id  |    DELETE  | Deletar Carro     |

- User  :busts_in_silhouette:	

| Action           | URI             | Verb HTTP  | Endepoint           |
| ---------------- | --------------- | ---------- | ------------------- |
|:arrow_right_hook:|/api/v1/user     |    GET     | Listar Usuarios     |
|:heavy_plus_sign: |/api/v1/user     |    POST    | Cadastrar Usuario   |
|:arrow_right_hook:|/api/v1/user/:id |    GET     | Consultar o Usuario |
| :recycle:        |/api/v1/user/:id |    PUT     | Atualizar Usuario   |
|   :x:            |/api/v1/user/:id |    DELETE  | Deletar Usuario     |

- Rental  :label:

| Action           | URI               | Verb HTTP  | Endepoint            |
| ---------------- | ----------------- | ---------- | -------------------- |
|:arrow_right_hook:|/api/v1/rental     |    GET     | Listar Locadoras     |
|:heavy_plus_sign: |/api/v1/rental     |    POST    | Cadastrar Locadora   |
|:arrow_right_hook:|/api/v1/rental/:id |    GET     | Consultar a Locadora |
| :recycle:        |/api/v1/rental/:id |    PUT     | Atualizar Locadora   |
|   :x:            |/api/v1/rental/:id |    DELETE  | Deletar Locadora     |

`UTILIZANDO O DOCUMENTO SWAGGER`

- Documentação Swagger

Action        | URI                |
------------- | ------------------ |
:file_folder: | /api-docs          |

##

### Testando Rotas
Para testar a uma rota pelo jest
```bash
# utilize esse comando
npx jest --watchAll

```

##

### :hammer_and_pick: Ferramentas Utilizadas
| Softwares   |
|------------ |
|`Postman`    |
|`Visual Code`|
|`MongoDB`    |
|`NodeJs`     |

##

### :clinking_glasses: Agradecimentos
&nbsp;
*Bruna Santos*

&nbsp;
*Diego Bueno*

&nbsp;
*Felipe Silva*

&nbsp;
*Gabriel Missio*

&nbsp;
*Giovanni Hoffmann*

&nbsp;
*Thais Nicodemus*

##

### :man_technologist: Desenvolvedor
*Washington jose*

##

### Licença
MIT
>>>>>>> dev
