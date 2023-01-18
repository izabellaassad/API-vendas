
### Clone do repositório

```
$ git clone 
$ cd API-vendas

```
### Iniciar a aplicação Node.js com Typescript

```
$ npm init -y
ou
$ yarn init -y
```

Fazer a instalação do Typescript na pasta do projeto, como uma dependência de desenvolvimento. Como o código final é convertido para javascript antes de ser disponibilizado online, só precisaremos do Typescript em ambiente de desenvolvimento.

Caso na tenha o node instalado na sua máquina atente-se em atualiza-lo.


```
$ npm install typescript ts-node-dev @types/node tsconfig-paths -D

ou

$ yarn add typescript ts-node-dev @types/node tsconfig-paths -D
```

Foi adicionado o pacote tsconfig-paths para também ser instalado. Esse pacote servirá para criação de atalhos para os paths de arquivos ao usar o import.


### Criar o arquivo "tsconfig.json"


```
npm tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

```

Em resumo, os parâmetros passados são:

rootDir: É aqui que o TypeScript procura nosso código.

outDir: Onde o TypeScript coloca nosso código compilado.

esModuleInterop: Se estiver usando commonjs como sistema de módulo (recomendado para aplicativos Node), então esse parâmetro deve ser definido como true.

resolveJsonModule: Se usarmos JSON neste projeto, esta opção permite que o TypeScript o use.

lib: Esta opção adiciona tipos de ambiente ao nosso projeto, permitindo-nos contar com recursos de diferentes versões do Ecmascript, bibliotecas de teste e até mesmo a API DOM do navegador. Usaremos recursos es6 da linguagem.

module: commonjs é o sistema de módulo Node padrão.

allowJs: Se você estiver convertendo um projeto JavaScript antigo em TypeScript, esta opção permitirá que você inclua arquivos .js no projeto.

noImplicitAny: Em arquivos TypeScript, não permita que um tipo seja especificado inexplicitamente. Cada tipo precisa ter um tipo específico ou ser declarado explicitamente any.


### Arquivo .gitignore

```
.idea/
.vscode/
node_modules/
build/
temp/
.env
coverage
ormconfig.json
dist

uploads/*
!uploads/.gitkeep
```

### Compilando o Typescript

Para compilar nosso código, precisaremos executar o comando tsc, que irá ler o arquivo tsconfig.json no diretório atual e aplicará a configuração ao compilador TypeScript para gerar o código JavaScript compilado.

```
yarn tsc
```
O código compilado foi gerado na pasta build.

### Executar o servidor em desenvolvimento

```
 ts-node-dev
```

Incluir o script para rodar o ts-node-dev no arquivo package.json.

```
"scripts": {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
}
```
### Executar o servidor

```
npm run dev

# ou

yarn dev
```