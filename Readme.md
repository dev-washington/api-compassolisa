# :oncoming_automobile: ![Badge](https://img.shields.io/static/v1?label=status&message=em%20desenvolvimento&color=yellow&style=flat&logo=GITHUB)

# Register Compassolisa 
Olá dev tudo bem? Este é o 4º Desafio da 5º Sprint do programa de bolsas NodeJs, onde foi realizado um aplicação API REST FULL, com os conhecimentos adquiridos pelos instrutores do programa, a cada sprint realizada e os recursos fornecidos pelo programa.  

---

### 📋 Pré-requisitos
"Olá bom dia, gostaria de solicitar um sistema para abertura da minha locadora de carros. Ela se chama "compassolisa" e
atuamos no seguimento de aluguel de carro de luxo e semi luxo. Trabalhamos com carros exclusivos ou seja não temos mais de
um modelo de carro disponível por cidade. Já temos o nosso Front-end pronto, porem estamos
necessitando o Back-end, por isso contatamos vocês para desenvolver nosso Back-end, dado ao nosso front.
Iremos atuar em 3 etapas e dependendo de como for a primeira fecharemos o contrato da segunda e a terceira etapa.
Nesta primeira etapa nos pensamos em criar os registros de carros, usuários e a autenticação."

---

### ⚙️ Configuração Inicial
Para obter o projeto em sua máquina local
- [x] Utilizando o git bash
```bash
# execute esse comando
git clone https://github.com/washington-wj/api-compassolisa.git
```


### 🔧 Instalação 
Para rodar a aplicação é necessario fazer algumas configurações
- [x] Anexar o arquivo .env com as seguintes instruções

```bash
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
```

- [X] Adicionar a dependencias NPM

```bash
# execute esse comando para iniciar o pacote npm
npm init -y

# instalar a biblioteca express
npm install express
```

**Testando Rotas**

`UTILIZANDO O POSTMAN OU INSOMINIA`

- Car

| Action           | URI             | Verb HTTP  | Endepoint         |
| -----------------| --------------  | ---------- | ----------------- |
|:arrow_right_hook:|/api/v1/car      |    GET     | Listar Carro      |
|:arrow_right_hook:|/api/v1/car/:id  |    GET     | Consultar um Carro|
|:heavy_plus_sign: |/api/v1/car      |    POST    | Cadastrar Carro   |
| :recycle:        |/api/v1/car/:id  |    PUT     | Atualizar Carro   |
|   :x:            |/api/v1/car/:id  |    DELETE  | Deletar Carro     |

- User

| Action          | URI             | Verb HTTP  | Endepoint        |
| --------------- | --------------- | ---------- | ---------------  |
|:heavy_plus_sign:|/api/v1/car      |    POST    | Cadastrar Usuario|
