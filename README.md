# 🚀 Projeto de Ambientes de Desenvolvimento de Software

Este repositório reúne algoritmos e funções refatoradas na pasta `funcoes/`, acompanhados por testes unitários automatizados desenvolvidos com o framework [Jest](https://jestjs.io/) na pasta `tests/`.

Este README apresenta a estrutura do projeto e explica como instalar as dependências, executar os códigos e rodar os testes automatizados.

---

## 📋 Sumário

1. [Estrutura do Projeto](#-estrutura-do-projeto)
2. [Pré-requisitos](#-pré-requisitos)
3. [Instalação das Dependências](#-instalação-das-dependências)
4. [Como Executar os Códigos da Pasta `funcoes`](#-como-executar-os-códigos-da-pasta-funcoes)
5. [Como Executar os Testes Automatizados](#-como-executar-os-testes-automatizados)

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text
trabalho-de-software/
├── funcoes/        # Módulos com os algoritmos e a lógica do sistema
├── tests/          # Arquivos de testes unitários automatizados (.test.js)
├── .gitignore      # Arquivos e pastas ignorados pelo Git (ex.: node_modules)
├── package.json    # Configurações do Node.js, dependências e scripts
├── package-lock.json # Registro das versões exatas das dependências
└── README.md       # Documentação e manual de execução do projeto
```

> Observação: o arquivo `package-lock.json` é criado pelo npm quando as dependências são instaladas. Caso ele ainda não exista no repositório, poderá aparecer depois de executar `npm install`.

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de que os seguintes programas estão instalados:

- [Node.js](https://nodejs.org/) — versão 14 ou superior.
- [npm](https://www.npmjs.com/) — gerenciador de pacotes que acompanha o Node.js.
- [Git](https://git-scm.com/) — utilizado para controle de versão do projeto.

Para conferir se Node.js e npm estão instalados, execute no terminal:

```bash
node --version
npm --version
```

## 📦 Instalação das Dependências

1. Abra o projeto `trabalho-de-software` no VS Code.
2. Abra o terminal integrado do editor.
3. Confira se o terminal está na pasta raiz do projeto, onde está localizado o arquivo `package.json`.
4. Execute:

```bash
npm install
```

Esse comando instala as dependências declaradas no `package.json`, incluindo o Jest, caso ele esteja configurado como dependência do projeto.

## 💻 Como Executar os Códigos da Pasta `funcoes`

Para executar diretamente um arquivo JavaScript da pasta `funcoes`, utilize o Node.js:

```bash
node funcoes/nome-do-ficheiro.js
```

Substitua `nome-do-ficheiro.js` pelo nome real do arquivo que deseja executar.

> **Nota:** esse comando executa o arquivo indicado. Para que ele apresente algum resultado no terminal, o script precisa conter código executável, como chamadas de funções ou instruções `console.log()`. Se o arquivo apenas exportar funções para serem utilizadas por outros módulos, ele poderá não apresentar saída quando executado diretamente.

## 🧪 Como Executar os Testes Automatizados

O projeto utiliza o **Jest** para executar os testes unitários e verificar se as funções apresentam os resultados esperados.

Antes de executar os testes, confirme que as dependências foram instaladas e que o `package.json` possui um script `test` configurado para o Jest.

### 1. Executar todos os testes

Na pasta raiz do projeto, execute:

```bash
npm test
```

O Jest localizará e executará os arquivos de teste reconhecidos pela sua configuração, normalmente arquivos com nomes como `nome.test.js` ou `nome.spec.js`.

### 2. Executar um arquivo de teste específico

Para executar somente um arquivo de teste, informe o caminho dele:

```bash
npx jest tests/nome-do-ficheiro.test.js
```

Substitua o nome pelo arquivo existente dentro da pasta `tests`.

### 3. Executar os testes em modo de observação

Se quiser que o Jest acompanhe alterações nos arquivos e execute novamente os testes quando necessário, utilize:

```bash
npm test -- --watch
```

Para sair do modo de observação, pressione `Ctrl + C` no terminal.

---

## ✅ Resumo dos comandos

| Objetivo | Comando |
|---|---|
| Verificar a versão do Node.js | `node --version` |
| Verificar a versão do npm | `npm --version` |
| Instalar as dependências | `npm install` |
| Executar um arquivo da pasta `funcoes` | `node funcoes/nome-do-ficheiro.js` |
| Executar todos os testes | `npm test` |
| Executar um teste específico | `npx jest tests/nome-do-ficheiro.test.js` |
| Executar testes em modo de observação | `npm test -- --watch` |

---

## 📌 Observações finais

- Execute os comandos a partir da pasta raiz `trabalho-de-software`, salvo quando indicado de outra forma.
- A pasta `node_modules/` é criada pelo npm e normalmente deve estar listada no `.gitignore`.
- Os arquivos de teste devem seguir os padrões reconhecidos pela configuração do Jest.
- Se o comando `npm test` não funcionar, confira se o Jest está instalado e se existe um script `"test"` configurado no `package.json`.
