Aula 1 – 12/10/2020

Durante o evento Next Level Week #3, foi desenvolvido a projeto Happy, que é uma plataforma de visita a orfanatos, conectando pacientes com volutanriado para realizar visitas online, tendo um mapa para vários serviços que acolhem Crianças e Adolescentes com seus horários disponíveis para que os pacientes possam receber visitas de maneira adequada. Trazendo uma representação e homenagem para o dia das crianças, que é comemorado no dia 12 de outubro no Brasil.

Motivo

Desenvolvimento do projeto Next Level Week #3, desenvolvido pela Rocketseat.

Tecnologias Utilizadas

As mesmas tecnologias abordadas no NLW #2, ou seja:
 
•	Typescript 4.0.3
•	ReactJS 16.13.1
•	ReactNative
•	Expo 3.28.0
•	Css
•	Html
•	NodeJS 12.18.4
•	Express 4.17.1
•	TypeORM 0.2.28
•	Multer 1.4.2
•	sqlite3 5.0.0
•	Yup 0.29.3
•	Axios 0.20.0

 

O NodeJS tem que ser versão 12 ou superior, para consultar digite:
node -v
 

	Tópicos abordados nesta aula:
•	Apresentação do projeto
•	Conceitos de back-end, front-end e API
•	O que é React e por que utilizar?
•	Por que vamos usar Typescript?
•	Criando projeto com ReacJS
•	Componentes, JSX e propriedades
•	Trabalhando com rotas
•	Criando a landing page
•	Criando Mapa Page

Apresentação do projeto

Nesta edição do NLW, não utilizamos a metodologia Mobile First pois não temos prioridade da aplicação ser responsiva. Mas teremos uma aplicação personalizada para cada cidade por geolocalização.
 
	
 

	O foco dessa NLW não é ter muita features, mas abordar mais a questão de boas práticas, código mais escalável, validação ou outros tópicos não abordados em outros NLW (como validação).
 

 

 

Conceitos de back-end, front-end e API

Foi explicado com uma ferramenta de Flowchart chamada Whimsical:
https://whimsical.com/
 

	A cada requisição carregava todo o HTML, CSS e JS do servidor. Não havia muita distinção entre Back e Front-End.
 

	Na API Restul foi adicionado uma camada a mais que constrói o HTML quando recebe dados enviados pelo Back-End em resposta requisições enviadas (orfanatos). Essa solução apresenta um melhor SOC (Separation of Concerns), pois no modelo um há uma sobrecarga do servidor passando-lhe tarefas de renderização de HTML. Na API RESTful, como retorna uma lista em JSON o desacoplamento e a reutilização de código para construir aplicações mobile. 

REST trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplicações se comuniquem.

O HTTP é o principal protocolo de comunicação para sistemas Web, existente há mais de 20 anos, e em todo esse tempo sofreu algumas atualizações. Nos anos 2000, um dos principais autores do protocolo HTTP, Roy Fielding, sugeriu, dentre outras coisas, o uso de novos métodos HTTP. Estes métodos visavam resolver problemas relacionados a semântica quando requisições HTTP eram feitas.

Estas sugestões permitiram o uso do HTTP de uma forma muito mais próxima da nossa realidade, dando sentido às requisições HTTP. Para melhor compreensão, veja os exemplos abaixo (requisições em formatos fictícios):
•	GET http://www.meusite.com/usuarios
•	DELETE http://www.meusite.com/usuarios/jackson
•	POST http://www.meusite.com/usuarios –data {nome: joaquim}

Existe uma certa confusão quanto aos termos REST e RESTful. Entretanto, ambos representam os mesmo princípios. A diferença é apenas gramatical. Em outras palavras, sistemas que utilizam os princípios REST são chamados de RESTful.
•	REST: conjunto de princípios de arquitetura
•	RESTful: capacidade de determinado sistema aplicar os princípios de REST.

Por que usar TypeScript

Realiza tipagem no Javascript, habilita o intellisense, quando definimos uma interface.
 

	Ajuda a detectar erros enos guia informando que campos precisamos informar.
 

Criando projeto com ReacJS

	Tem coisas do React que não são entendidas nativamente pelos browsers, ao utilizar o create-react-app inclue no seu projeto:
•	BabelJS é um transpiler de JavaScript que transpila novos recursos em padrões antigos. Com isso, os recursos podem ser executados em navegadores antigos e novos, sem complicações. Babeljs vem com uma ampla gama de recursos na forma de plug-ins, predefinições, polyfills, etc. Resumindo, Babeljs é um conjunto de ferramentas que possui todas as ferramentas necessárias disponíveis com ele e que ajuda os desenvolvedores a usar todos os recursos atuais disponíveis no ECMA Script e ainda não se preocupam como será suportado nos navegadores.
•	Webpack é um empacotador de módulo que empacota todos os módulos com dependências - js, estilos, imagens, etc. em ativos estáticos .js, .css, .jpg, .png, etc. Webpack vem com predefinições que ajudam na compilação na forma necessária. Por exemplo, a predefinição de reação que ajuda a obter a saída final na forma de reação, a predefinição es2015 ou env que ajuda a compilar o código em ES5 ou 6 ou 7, etc.

Execute um dos seguintes comandos:
yarn create react-app web --template typescript
OU
npx create-react-app web --template typescript
 

Abra a aplicação no VS Code Do template criado pelo React apague os seguintes arquivos do diretório pois não seria utilizado no curso:
•	README.md: Arquivo de informações de descrição do projeto no formato Markdown (md) utilizado pelo Git.
•	Scr>App.css: Arquivo de estilo de página local (vai ser criado estilo global)
•	Scr>index.css: Arquivo de estilo de página local (vai ser criado estilo global)
•	Scr>App.test.tsx: Arquivo de Testes.
•	Scr>Logo.svg: Image de logo do React.
•	Scr>serviceWorker.ts: Usado quando a aplicação é um PWA (Progressive Web App)
•	Scr>setupTests.ts: Arquivo de Testes.
•	Deixe somente o arquivo index.html na pasta públic com o seguinte código:
 

	O App.tsx e o index.tsx ficam com os seguintes conteúdos.
 

	Repare que nos arquivos tsx precisamos sempre importar a biblioteca React. No arquivo index.tsx temos o ReactDOM que se encarrega de renderizar os elementos em HTML. A árvore de elementos em HTML de uma página que vemos ao chamar a ferramento Inspector de um navegador pode ser chamada de DOM. Ao executar a aplicação com:
npm start
 

Componentes, JSX e propriedades

	O método render do ReactDOM recebe como parâmetros tags HTML ou componentes REACT. Todo componente tem a estrutura de uma função que retorna HTML ou JSX. O JSX é uma maneira de incluir HTML dentro do Javazcript.
 

Dntro de um elemento no HTML, em document.getElementById(“root”), foi colocado na div com id=root no arquivo index.html. Podemos fazer concatenação ou agregação de componentes, abaixo o componente App utiliza outro componente Title.
 

	Quando passamos atributos ao componente ele se torna propriedades. Mas precisamos criar uma interface para que o Typescript consiga realizar a identificação do tipo. Os coomopnetes possibilitam a reutilização de código e várias páginas.

Trabalhando com rotas

Crie uma pasta pages dentro de src e inclua duas páginas, Landing.tsx e OrphanagesMap.tsx, que iremos utilizar na navegação
 

Agora para navegar entre páginas temos que instalar:
yarn add react-router-dom OU npm install react-router-dom
 

Incluímos um arquivo routes.tsx para configurar as rotas e na hora de importar emite um aviso para instalar outro pacote, 
 

Colocamos o parâmetro –D para indicar que é uma dependência de desenvolvimento e não vai ser utilizada na produção
yarn add @types/react-router-dom –D  OU  npm install @types/react-router-dom -D
 

Depois de instalarmos esse pacote aparece o Inteligesense quando digitamos:
 

O código da função Routes ficará assim:
 

Repare na primeira rota que navega para raiz tem uma propriedade exact. Isso é para diferenciar das outras rotas que também contém a barra para frente, então a página inicial apareceria em todas as outras páginas. A tag Switch é uma tag opcional garante que apenas uma rota seja chamada de cada vez.

Se alterarmos agora a página inicial App.tsx e a página Landing.tsx as rotas já estarão funcionando.
 

 

Porém de formos em Network da ferramenta Inspector do browser podemos ver que a cada navegação está havendo o Refresh e carregamento da página inteira (css, scripts) e não queremos isso.
 

Para resolver isso temos que importar de react-router-dom o componente Link e substitui-lo pelas anchor tags do HTML.
 

E invés de href fica to:
 

Ao salvar e testar não está recarregando mais nada ao mudar de página. Esse é o conceito de SPA (Single Page Application). Não tem que ficar recarregando recursos compartilhados da mesma aplicação.
 
Criando Landing Page

	As imagens da aplicação serão exportadas diretamente em formato SVG do modelo Figma fornecido. 
 

	Depois de exportar a imagens, salve em uma pasta imagens dentro da pasta src.
 

Para associar fontes ao projeto só precisa ir no site do Google Fonts:
https://fonts.google.com/
 

Depois de selecionar as fontes abaixo, clicamos em Embedd e copiamos o link e colamos em public/index.html:
nunito Semi-bold 600
nunito Bold 700
nunito Extra-bold 800
 

Depois de incluirmos as fontes, crie um arquivo de estilo global.css dentro da pasta style com o seguinte conteúdo:
 

	Estamos aplicando a fonte Nunito em vários elementos da tela, com fallback para uma fonte sem serifa. Depois fazemos a importação desse estilo no arquico App.tsx.
import './styles/global.css';

	Alterando nossa página Landing.tsx com o conteúdo:
 

Aqui, para incluirmos ícones na aplicação instalamos a biblioteca react-icons com o comando:
npm install react-icons

Dentro de react-icons encontra-se vários pacotes de icons como o Material Design(md), Font Awesome(fa), etc. Utilizamos o FeatherIcons (fi), para colocarmos a seta se navegação entre páginas.
 

	Crie um folha de estilo chamada landing.css dentro de style/pages para a Landing page
 

	E termos a página inicial pronta:
 

Criando Mapa Page

	Na página OrphanageMap.tsx temos o seguinte conteúdo:
 

	Há algumas formas de incluir gratuitamente mapas em seu aplicativo React:
1.	Google Maps
2.	React-leaflet
3.	Mapbox

React-leaflet

	Para utilizar o react-leaflet precisamos instalar:
npm install leaflet react-leaflet
 

	E fazemos a chamada para o mapa em nossa página OrphanageMap.tsx:
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

<Map
    center={[-23.525384, -46.669296]}
    zoom={15}
    style={{ width: '100%', height: '100%' }}>
    <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}/>                    
</Map>

	É necessário importar também o TileLayer, que é um servidor onde recupera as imagens do mapa, e o estilo do mapa em leaflet.css. O atributo center é a posição do mapas que pode ser obtido pelas coordenadas fornecidas pelo Google Maps, clicando com o botão direito do mouse no lugar ou na área no mapa e selecionando “O que há aqui?”.
 

	Ao atualizarmos a página já teremos a visualização do mapa. Porém, como a interface visual do Leaflet é bastante carregada você pode optar por utilizar o MapBox que oferece um variedade maior de estilos. 
 

Mapbox

	Mapbox é um provedor americano de mapas on-line personalizados para sites e aplicativos como Foursquare, Lonely Planet, Facebook, Financial Times, The Weather Channel e Snapchat. Desde 2010, ele expandiu rapidamente o nicho de mapas personalizados, em resposta à escolha limitada oferecida por fornecedores de mapas como o Google Maps.

	Para utilizar o MapBox você precisa criar uma conta no site 
https://www.mapbox.com/
 

	Entre na página de account e copie o acesstoken
 

	Como o token é uma informação de acesso privado, que não queremos compartilhar em repositórios públicos como o GitHub, precisamos criar um arquivo .env
 

	Neste arquivo criamos varáveis ambiente, que customizamos de acordo com o ambiente de desenvolvimento (Desenvolvimento ou produção). Toda variável ambiente no React precisa começar com REACT_APP. E no gitignore, incluímos o arquivo .env para ser ignorado e não expor nossas informações.
 

	Para carregar as variáveis de ambiente precisamos parar a aplicação e reinicia-la. Para utilizar o MapBox utilizamos ainda os componentes do react-leaflet mas trocamos as informações do TileLayer.

<Map
    center={[-23.525384, -46.669296]}
    zoom={15}
    style={{ width: '100%', height: '100%' }}>

    <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
    />
</Map>

	Repare que, como agora vamos utilizar a variável de ambiente, o valor de url deve estar dentro de chaves. Os seguintes estilos de caixa de mapas estão disponíveis para todas as contas usando um token de acesso válido:
•	streets-v11
•	outdoors-v11
•	light-v10
•	dark-v10
•	satellite-v9
•	satellite-roads-v11
 

Aula 2 – 13/10/2020

	Tópicos abordados nesta aula:
•	Criando projeto com Node.js
•	Rotas parâmetros e métodos HTTP
•	Configurando banco de dados
•	Criando tabelas no banco
•	Criando orfanato sem imagem
•	Abstraindo em controller
•	Listando orfanatos
•	Detalhe do orfanato
•	Upload de imagens
•	Trabalhando com views
•	Lidando com exceções
•	Validação de dados

Na segunda aula iremos criar uma Web API REST. Para iniciar um projeto, entre na pasta onde o projeto será criado e dê o comando:
npm init -y
 

	Isso irá criar um arquivo packages.json no projeto. O parâmetro “-y” serve para pular as perguntas iniciais como nome e autor do projeto. Após isso abra o VS Code e foi criado a dependências da aplicação (packages.json). Como o Node não entende Typescript, somente Javascript, abra um terminal no VS Code e instale a biblioteca typescript com o comando:
npm install typescript –D
 

Gere o arquivo de configuração do Typescript com o comando:
npx tsc -init
 

Definimos a versão do ECMAScript para es2017 pois é a versão que o Node.js entende. Se fosse uma versão de browser como o IE teria que ser uma versão mais antiga. Instalamos a também a dependência:
yarn add ts-node-dev -D
 

Que executa o servidor Node, fazendo ele entender Typescript, e monitora se teve alteração no Script. Se houver, ele restart automaticamente o servidor. Por padrão, sem a extensão, teríamos que parar e reiniciar o Node manualmente se houvesse alterações.

Para testar o serviço, altere o arquivo packages.json e crie uma seção scripts e crie um arquivo src/server.ts com uma mensagem console.log genérica:
 

Observe que esta configuração "start": "ts-node-dev src/server.ts" poderia ser abreviada como "start": "tsnd src/server.ts". Para executar no terminai digite:
yarn start OU npm start
 

No script do iremos inserir algumas flags e ficará assim:

"scripts": {
    "dev": "tsnd -
--transpile-only >> Converte Javacript para Typescript, não verifica se tem erros, acelera o desenvolvimento
--ignore-watch node_modules >> Não converte código dentro da pasta node_modules
--respawn > Funcionamento de se alterar o código faz um restart, senão continua rodando e só sai se der Crtl+C
src/server.ts",
   },
 

Abaixo um comparativo das saídas de usando o flag respawn, exemplificando que ele continua rodando...
 

	Outro exemplo é que se alterar a saída, ele atualiza automaticamente:
 

	Por causa dessa funcionalidade temos que abrir outro terminal para instalar outra dependência o express:
npm install express

O express é micro-framework que traz algumas funcionalidades prontas que evitam ficar fazendo configurações. Ao importar o express no arquivo packages.json aparece a dependência e a versão instalada.
 

	O Node, como qualquer outra linguagem back-end, funciona em um sistema de requisição e resposta. Cada vez que o usuário acessa uma rota ou nosso Front-End React faz uma chamada da API. E o Node precisa enviar uma resposta. O Express auxilia na configuração de rotas da aplicação, e com ele iremos criar a única aplicação no código que ficará escutando a porta 3333. Altere o arquivo server.ts para ficar como abaixo:
 

Ao importar o express no arquivo server.ts dá um erro de dependência já visto anteriormente
 

	Quando estamos trabalhando com typescript, alguns pacotes adicionados são também em typescript e outros não. Os que não são a comunidade precisar criar esses pacotes de tipagem (com @type) que precisam ser instaladas também.
npm install @types/express -D

Executando o método get acima, já temos a comunicação da aplicação mas os resultados não saem no navegador.
 

	Para dar a saída temos que incluir os 2 parâmetros que são injetados pelo método app.get: o request e o response. O request traz informações sobre a requisição (o cabeçalho e o corpo, o usuário, e-mail, senha, dados recebidos pelo Front-End). O response é a resposta da API para a aplicação. O código fica assim:

import express from 'express';

const app = express();

app.get("/users", (request, response) =>{
    return response.send('Start on port 3333 🚀')
});

app.listen(3333);

 

Porém como trabalhar com formato JSON precisamos fazer algumas alterações:

import express from 'express';

const app = express();

app.get("/users", (request, response) =>{
    const users =[
        {name: 'Diogo', age:25},
        {name: 'Ana', age:25},
    ]

    return response.json(users)
});

app.listen(3333);

 
	Para visualizarmos melhor os resultados podemos instalar um plugin no navegador Chrome, JSON Viewer:
 
 

Rotas, Recursos e Métodos HTTP

	Cada endereço é uma rota (Ex.: http://localhost:3333/users ou http://localhost:3333/contact). O recurso é qualquer coisa que vem depois da URL base, ou seja, /users e /contact são os recursos. Os métodos HTTP de uma API mais comuns são o GET, POST, PUT e DELETE responsáveis pelas operações de CRUD. Como o pacote express que estamos utilizando parece ter limitações para testar outras requisições que não seja GET vamos utilizar outra ferramenta: O Insomnia Core. E vamo criar um Workspace para o NLW.
https://insomnia.rest/download/
 

Parâmetros

	Quando fazemos requisição existem 3 tipos de parâmetros:
•	RequestBody: Para criar ou atualizar um registro, uma informação vem no corpo da requisição.
•	Route Params: Identifica um recusrso na nossa rota qunado for atualizar ou deletar um registro específico.
•	Query Params: Usados principalmente em listagens, para fazer filtros, paginação, ordenação, etc.

RequestBody

	Se colocarmos um request.body no método POST:
 

	E no Insomnia enviarmos um novo registro de usuário e colocamos método POST:
 

	No terminal retorna undefined pois o express não entende JSON por padrão. Corrigimos isso adicionando no arquivo server.ts o módulo que interpreta o JSON:
app.use(express.json());
 
 

Route Params

Se colocarmos um request.params no método DELETE:
 

E no Insomnia enviarmos uma rota com a barra e um id e selecionamos método DELETE:
http://localhost:3333/users/1
 

No terminal retorna
 

Route Query

Se colocarmos um request.query no método GET:
 

E no Insomnia enviarmos uma rota com a query:
http://localhost:3333/users?page=20&name=Bob
 

No terminal retorna
 

Criando o Banco de Dados

Existem 3 formas de lidar com banco de dados no Back-End:
1.	Driver nativo: Permite realizar query direto com o Node mas não possui camada de abstração. Por exemplo, teríamos que escrever a query no SQLite no formato padrão de consultas SQL.
 
2.	Query Builder: O mais famoso é o KnexJS utilizado na NLW#2. Aqui escremos nossas querys com Javascript
 
3.	ORM (Object Relational Mapper): Temos o maior nível de abstração. Teremos uma classe em Javascript que simboliza uma tabela. Para cada tabela no BD teremos uma classe na aplicação. A sintaxe de consulta é igual do Query Builder, utilizando Javascript. Podemos atualizar a classe, excluindo, alterando e adicionando campos e se reflitira no BD.

Vamos executar um comando para instalar o typeorm e o sqlite3.

npm install typeorm sqlite3

TypeORM é um ORM que pode ser executado nas plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8). Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que o ajudem a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados.

TypeORM suporta os padrões Active Record e Data Mapper, ao contrário de todos os outros ORMs JavaScript existentes atualmente, o que significa que você pode escrever aplicativos de alta qualidade, fracamente acoplados, escaláveis e sustentáveis da maneira mais produtiva. TypeORM é altamente influenciado por outros ORMs, como Hibernate, Doctrine e Entity Framework.

	Em seguida, criamos uma pasta databases dentro de src e adicionamos 2 arquivos, o database.sqlite e connectios.ts e uma pasta chamada migrations. No arquivo connect digite o seguinte código para criar a conexão:
 

	E fazemos a importação dentro do arquivo server.ts. Por fim, execute a aplicação para ver se não há nenhum erro de referência dos arquivos.
 

Além de instalar o typeorm, precisamos adicionar um arquivo ormconfig.json que conterá as informações mínimas de conexão com o BD.
 

Migrations

	Controlam as versões dentro do banco de dados, similar ao Git. Por isso que vamos montar a estrutura do BD utilizando essa ferramenta. Quando outro desenvolvedor for trabalhar no mesmo projeto o Migrations reconstrói o banco na sua versão mais atualizada.

	Quando instalamos o TypeORM ele fornece uma interface de linha de comando que pode ser consultada pelo comando:
npx typeorm
 

	Caso, ao executar este comando, aparece de resultado typeorm invés de cli.js, você terá que criar um comando customizado no arquivo packages.json.
 

	Precisará incluir na seção scripts a seguinte linha:
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
 

	No arquivo ormconfig.json iremos indicar os diretótios de nossa migrations:
 

•	Migrations: é onde se localiza os arquivos typescript gerado pelo migrations. 
•	Entities: indica onde estarão nossas classes abstratas.
•	migrationsDir: indica o diretório de de referências de criação das migrations. 

Rode o seguindo comando para criarmos a nossa migration de orfanatos:
npx typeorm migration:create -n create_orphanages

	Será gerado um arquivo com uma timestamp com os métodos:
•	Up: Executa o especificado (pelo parâmetro config.name) ou a próxima migração cronológica que ainda não foi executada.
•	Down: Desfaz o especificado (pelo parâmetro config.name) ou a última migração que foi danificada

No arquivo gerado codifique a criação da tabela conforme a seguir:
 

Na NLW#2 havíamos utilizado a Extensão SQLite abaixo, para verificar a execução do migrations e as gravações das tabelas.
 

Mas como essa extensão dá muitos problemas na hora de visualizar os dados e tem que ficar dando RELOAD no VS Code e reiniciando a aplicação, iremos utilizar nesta edição o Beekeeper Studio.
https://www.beekeeperstudio.io/
 

	Depois de instalado o Beekeeper Studio, precisamos definir algumas configurações:
 

	No campo Database file, navegue até o diretório da aplicação e selecione o arquivo database.sqlite criado anteriormente:
 

	Salve a conexão com o nome que desejar, aqui colocamos NLW #03. De volta ao VS Code, execute o seguinte comando para criar a tabela:
npm run typeorm migration:run
 

	E podemos ver que foi criado 3 tabelas:
•	Migrations: armazena quais migrations foram executadas.
•	Orphanages: a tabela criada
•	Sqlite_sequence: uma tabela auxiliar para controle do incremento 

Para começarmos a fazer a abstração de nossa tabela para aplicação precisamos alterar algumas configurações no arquivo tsconfig.json:
•	strictPropertyInitialization: false, habilita a verificação estrita da inicialização da propriedade nas classes. 
•	experimentalDecorators: true,  Ativa o suporte experimental para decoradores ES7.
•	emitDecoratorMetadata: true, Ativa o suporte experimental para a emissão de metadados de tipo para decoradores. 

O Decorator habilita um API muito utilizada em Java e no Typescript (mas não disponível no Javascript). O Decorator é utilizado em classes, propriedades ou funções. Crie um arquivo Orphanage.ts dentro de uma pasta models dentro de src.
 
	
Os atributos Entity, Colum são os Decorators que vinculam nossa tabela orphanages com essa classe Orphanage. Se não tivéssemos feito as alterações no arquivo tsconfig.json estaria dando um seguintes erros de Decorator:
 

E o erro de a verificação estrita da inicialização:
 

Criando orfanato sem imagem

Para criar um novo registro vamos voltar ao Insomnia e criar uma requisição:
 

	Na url definimos o método POST para o recurso orphanages, com o RequestBody em JSON passando o dados. De volta ao VS Code iremos trabalhar no arquivo server.ts. Primeiro execute o projeto com npm start e adicione um console log para verificarmos se os dados estão sendo transmitidos quando enviamos a requisição pelo Insomnia:
 

	Altere o arquivo server.ts para ficar assim:
 

	O TypeORM utiliza o Design Pattern Repository em que toda operação do BD passa por um repositório que define as regras de como um dado pode ser criado, excluído, etc. Conseguimos isso fazendo a importação do componente getRepositório que ira dispor os métodos create e save utilizados acima. Se não houver nenhum erro, ao enviarmos a requisição do Insomnia agora teremos o registro gravado conforme podemos confirmar no BeeKeeper Studio:
 

Abstraindo em controller

	Por critério de organização iremos criar um arquivo routes.ts para retirar o código de rotas que estava dentro de server:
 

	Como está em um arquivo separado utilizamos express.Router() (anteriormente as rotas eram construídas diretamente através de express). Isso possibilita as rotas serem chamadas e utilizadas em diversas partes do projeto. Como indicado acima também devemos criar uma pasta controllers com um arquivo OrphanageControllers.ts pois estaremos adotando a arquitetura MVC (Model, View e Controller) para organização do código.
 

	Após a refatoração do código, verifique pelo Insomnia se ainda está funcionando a gravação do orfanato:
 

Listando orfanatos e Detalhe do orfanato

	Para criar a listagens de orfanatos temos que criar o método dentro do controller, vamos chama-lo de index:
 

	Se precisássemos incluir filtros na lista, poderíamos com o atalho Ctrl + espaço visualizar as opções dentro das chaves. Da mesma forma criamos o nosso método de detalhes:
 

	Incluimos as duas rotas no arquivo routes.ts
 

	E testamos novamente no Insomnia:
 

	Caso ocorrer algum erro no Insomnia é possível analisar o problema no terminal do VS Code:
 

Upload de imagens

A regra de negócios da aplicação define que um orfanato pode ter várias imagens. Portanto iremos criar outra tabela, porém não iremos armazenar os arquivos no banco de dados, mas somente os nomes. O arquivo será armazenado no diretório da aplicação. Rode o seguindo comando para criarmos a nossa migration de imagens:
npx typeorm migration:create -n create_images
 

	Nessa tabela devemos ter o relacionamento 1 para muitos, por incluímos o campo orphanage_id. Incluimos também as operações Cascade, que atualizará automaticamente a tabela images, caso o orfanato seja alterado ou excluído. O script para criação da tabela no arquivo criado fica como abaixo:
 

Execute o comando abaixo para criar a tabela e verifique no BeeKeeper Studio se foi criada:
npm run typeorm migration:run
 

	Precisamos agora instalar uma biblioteca que lida com upload de arquivos no Node chamada Multer:
npm install multer
 

	Depois, dentro do src, criamos uma pasta config e um arquivo de configuração do multer:
 

	O parâmetro storage temos memorystorage, diskstorage e podia ser qualquer serviço de CDN (Rede de fornecimento de conteúdo) com Google Cloud ou Amazon S3. O diskstorage precisa de dois parâmetros que é o destinate e filename. No destinate utilizamos o __dirname que é o diretório atual do arquivo e temos que subir dois níveis até chegar na pasta uploads.
No filename recebemos uma requisição, o nome do arquivo e um call-back, essa função evita que usuários utilizem o mesmo nome de arquivos, atribuindo aos nomes um timestamp.

	No arquivo route.ts temos que incluir o envio das imagens na rota:
 

	Para testar no Insomnia, como o RequestBody em JSON só permite texto ou número e não permite a utilização de arquivos, temos que alterar o tipo de envio para Multipart Form.
 

	Ao enviar a requisição pelo Insomnia, agora está gravando as imagens na pasta uploads.
 

Repare que os arquivos são passados pelo request.files e não mais por request.body, se dermos um console.log retornaria a seguintes informações dos arquivos enviados:
 

fieldname: 'images',
originalname: 'profile.png',
encoding: '7bit',
mimetype: 'image/png',
destination: 'C: \\NLW-3\\aulas\\aula2\\server\\uploads',
filename: '1602686395796-profile.png',
path: 'C:\\ NLW-3\\aulas\\aula2\\server\\uploads\\1602686395796-profile.png',
size: 23483

	Vamos agora tratar da gravação na tabela Images, primeiro temos que criar o arquivo de mapeamento Image.ts na pasta models.
 

	E no arquivo Orphanages.ts criamos a vinculo com a tabela Images.ts. 
 

	Para adicionarmos as referências da imagens no BD precisamos alter o método create do OrphanagesController.ts :
 

	Ao reenviarmo a requisição pelo Insomnia temos:
 

	E pelo BeeKeeper Studio podemos confirmar a gravação dos registros com o relacionamento com a tabela orphanages (id=7):
 

Se não fizermos isso, teríamos ainda a opção de incluir manualmente as imagens, informando o id do orfanato, após a gravação de um orfanato.
 

	Por fim, para adicionarmos para incluir as imagens nos nossos métodos de recuperação de dados incluímos o seguinte no método find e findOneorFall:
 

Trabalhando com views

	As views aqui irão definir os dados que precisamos voltar ao Front-End, evitando enviar todos os dados da tabela do BD. Crie um pasta views dentro de src e dois arquivos para cada tabela que retornaremos dados, images_view.ts e orphanages_view.ts.
 

	No arquivo images_view podemos utilizar as variáveis de ambiente para ocultar a informação da rota. Para isso é necessário criar o arquivo .env e colocar no gitignore, como vimos anteriormente.
 
	E no controller alteramos o retorno do método:
 

	Pelo link gerado de retorno agora, conseguimos acessar as imagens gravadas.
 


Lidando com exceções

	O Express tem uma limitação quando a resposta de uma requisição é assíncrona ele não consegue capturar os erros. Para corrigir isso precisamos instalar um pacote adicional:
npm install express-async-errors
 

	Ao importar o pacote no arquivo server.ts
 

	Começa a retornar a mensagem de erro no Insonmia ao ocorrer erro.
 

	Para formatar a mensagem de erro precisamos de um Exception Handler. Para isso, crie uma pasta erros e dentro dela um arquivo handler.ts.
 

	Aqui estamos pegando a mensagem de erro original e direcionando a saída dela para o console.log. E para a saída em tela enviamos uma resposta de erro interno (Status 500)
 

Validação de dados

	Vamos instalar o Yup para fazer a rotinas de validação:
npm install yup
 

Yup é um validador de esquema de objeto JavaScript. Maneira mais simples de usar Yup
•	Defina o esquema do objeto e sua validação
•	Crie um objeto validador usando Yup com o esquema e validação esperados
•	Use a função de utilitário Yup "validate" para verificar se os objetos são válidos (satisfaz o esquema e as validações)

No arquivo OrphanageCotroller.ts ficará a validação Yup da seguinte maneira:
 

	No arquivo handler.ts precisamos fazer a diferenciação de erros de validação com os erros de execução:
 

	Ao enviarmos a requisição sem o campos nome e about que são obrigatórios, retorna os erros de validação:
 

Para finalizar, adicionamos o pacote cors, que permite que aplicações em endereços diferentes, no caso, nosso Front-End esteja no localhost:3000 e seja acessado pela API Back End em localhost:3333. Por padrão, só permite o acesso de aplicações no mesmo endereço a API.
yarn add cors
 





Aula 3 – 14/10/2020

Tópicos abordados nesta aula:
•	Finalizando página do mapa
•	Abstraindo componentes
•	Conectando Front-End e Back-End
•	Listando orfanatos no mapa
•	Detalhe do orfanato
•	Criação de um orfanato

Finalizando página do mapa
	
Primeira coisa que iremos fazer é adicionar um Marker de nossa localização no mapa. Na página OrphanageMap.tsx import o leaftlet que havíamos instalado juntamente com o react-leaflet, dessa biblioteca iremos importar o Marker e o Popup. Mais abaixo iremos definir a imagem do ícone (map-marker.svg) e determinar o seu tamanho e seu posicionamento em relação ao ponto fixado no mapa.
 

	Ao incluirmos o componente Marker dentro do Map já podemos visualizar o nosso marcador. Se clicarmos no marcador aparece um balão de mensagem do companente Popup.
 

Foi fornecido o conteúdo das páginas CreateOrphanage.tsx e Orphanage.tsx juntamente com seus estilos. Que ficaram dessa maneira:
 

Abstraindo componentes
	
Componentes são conjuntos isolados de HTML, CSS e Javascript que podem ser reaproveitados. Como podemos ver nas telas anteriores é possível criar um componente para o sidebar pois são idênticos. Crie uma pasta components e dentro dela um arquivo Sidebar.tsx e na pasta styles inclua o sidebar.css.
 

Crie também um arquivo chamado mapIcon.ts dentro da pasta utils, pois vamos substituir o ícone que se encontra em 3 telas da aplicação.
 

	Assim eliminamos repetição de código e a aplicação do mapicon no componente permanece igual. 
 

Conectando Front-End e Back-End
	
Para facilitar a integração, precisamos instalar outra biblioteca que facilita o consumo de API externas pela aplicação. Quase todo projeto precisa fazer interface com uma API REST em algum estágio. Axios é um cliente HTTP leve baseado no serviço $ http em Angular.js v1.x e semelhante à API Fetch.

Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor. Além disso, as requisições feitas através da biblioteca retornam uma promise, compatível com a nova versão do JavaScript - ES6 e, portanto, podemos aproveitar as vantagens do assíncrono e aguardar por um código assíncrono mais legível. Também podemos interceptar e cancelar solicitações, e há proteção integrada do lado do cliente contra falsificação de solicitação entre sites.
npm install axios
 

	Criamos uma nova pasta services com um arquivo api.tx com o seguinte código:
 

	Obrigatório colocar o URL de baseURL em maiúsculas e indicar a base do endereço. Vamos adicionar as informações primeiro na página Landing, vamos precisar novamente utilizar dos Estados. Para facilitar a inclusão das referências é possível teclar Crtl + . (ponto):

Listando orfanatos no mapa
	
Desde a versão 16.8 do React foram introduzidos os Hooks, que são uma nova proposta que irá nos permitir utilizar estado, ciclo de vida, entre outras funcionalidades sem a necessidade de escrevermos componentes com classe. Os Hooks resolvem uma grande variedade de problemas encontrados durante o desenvolvimento de componentes:
•	Reutilização de lógica de estado entre components.
•	Wrapper Hell (HOC, Render props — React DevTools).
•	Componentes complexos e difíceis de se compreender.
•	Componentes contendo grandes responsabilidades.
•	Confusão ao utilizar classes (this, classes).

O Hook useEffect diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou, e chamá-la depois que realizar as atualizações do DOM. Podemos mudar o título do documento, realizar busca de dados ou chamar alguma API imperativa.

Colocando useEffect dentro do componente nos permite acessar o qualquer prop direto do efeito. Nós não precisamos de uma API especial para lê-los — já está no escopo da função. Hooks adotam as closures do JavaScript e evitam APIs especificas do React onde o JavaScript já provê uma solução. O useEffect tem a seguinte construção:
useEffect(() => { }, []);

	Nas chaves irá a função de executará quando houver mudança de estado um algum elemento que estiver no segundo parâmetro, um array. Se não for passar um vetor vazio, ele adotará o comportamento padrão, ele roda depois da primeira renderização e depois de toda atualização. Em vez de pensar em termos de “montando” (“mounting”) e “atualizando” (“updating”), você pode achar mais fácil pensar que o useEffect acontecem “depois da renderização”. React garante que o DOM foi atualizado na hora de executar os efeitos. Ou seja, não poderímos adotar um abordagem de Javascript tradicional para carregar uma lista na tela no React, como implementado abaixo:
 

	Isso por que uma variável tradicional não causa no componente um novo ciclo de renderização, não sendo possível carregar as atualizações de informações. Para isso precisamos o useState para que o componente de atualize quando houver modificação na variável. Com estes conceitos de Hooks e estados já conseguimos carregar os dados de nosso Back-End e garantir que eles serão atualizados:

 

	E dentro do componente Map vamos iterar nossa lista de orfanatos para fazermos as marcações de localização:
 

Repare que sempre que usarmos map na tela, tem que setar a propriedade key. Senão dá erro no navegador.
 

Detalhe do orfanato
	
Vamos instalar o Yup

Criação de um orfanato
	
Na página de CreateOrphanage.tsx vamos adicionar nossas variáveis de Estado e inicialixa-las:
 

	Depois relacionamos com o campo e adicionamos o método Onchange:
 

Criamos o método handleSubmit e para testa-lo emitimos um console.log com os dados da tela. O parâmetro e: FormEvent é necessário pois como a função está fora do HTML, precisamos dessa classe do React para especificar o tipo dos argumentos. O e.preventDefalt é colocado para interromper o POST de direcionamento da página que é o comportamento padrão do botão submit.
 

	Ao preencher os campos e clicar o botão deve voltar os dados:
 



	Para verificar a assinatura de eventos dos componentes do React basta colocar o mouse em cima.
 

	Se pressionar o Ctrl em cima do evento e clicar aberto o arquivo que faz a declaração do evento:
 


 
Cria um novo objeto URL, cujo tempo de vida está ligado ao document na janela na qual este objeto foi criado. O novo objeto URL representa o objeto File ou o objeto Blob passado como argumento.

Cada vez que a função createObjectURL() é chamada, um novo objeto URL é criado, mesmo se você já tiver criado um objeto URL para esse mesmo arquivo. Cada objeto URL criado precisa ser liberado por meio de uma chamada a window.URL.revokeObjectURL() quando este não for mais necessário. Os navegadores liberarão os objetos URL criados automaticamente quando o documento for descarregado; no entanto, para um desempenho e um gerenciamento de memória ótimos, se houver algum momento em que você puder liberar estes recursos explicitamente, você deveria fazê-lo.

Aula 4 – 15/10/2020

Tópicos abordados nesta aula:
•	Conceitos de React Native
•	Por que vamos usar Expo
•	Diferenças pro ReactJS
•	Criando tela de mapa
•	Trabalhando com rotas 

Conceitos de React Native

O desenvolvimento nativo é o modo tradicional para desenvolvimento de aplicações mobile. Em outras palavras, a equipe de desenvolvimento cria um aplicativo para cada sistema operacional no qual o app será lançado. Se uma aplicação vai ser lançada em Android, iOS e Windows OS, então serão três aplicativos diferentes. Cada um desses programas é criado com a SDK, IDE e recursos próprios de cada sistema operacional. Para exemplificar:
iOS: IDE Xcode e linguagem Swift ou Objective-C e Swift
Android: IDE Android Studio e linguagem Java e Kotlin
Windows OS: IDE Visual Studio e linguagem C#

Ao final, teríamos uma aplicação gerada (Build) e a extensão de arquivo gerada no Android era denominada APK (aplicativo Android Package) que é o formato de empacotamento que eventualmente será instalado no dispositivo e mais recentemente surgiu o AAB (App Bundles) que são um formato de publicação. No iOS a extensão de arquivo IPA (iOS App Store Package), cada arquivo .ipa inclui um binário e só pode ser instalado em um dispositivo iOS. A maioria dos arquivos .ipa não pode ser instalada no simulador do iPhone porque eles não contêm um binário para a arquitetura x86, apenas um para a arquitetura ARM de telefones móveis. No entanto, alguns arquivos .ipa podem ser abertos no simulador, extraindo e copiando sobre o arquivo .app encontrado na pasta Payload. Alguns aplicativos simples podem ser executados no simulador por meio desse método.

Pensando nessa sistemática, para acelerar o tempo de desenvolvimento dos apps, diferentes equipes são alocadas para cada sistema operacional distinto. Dessa forma, uma equipe especializada em iOS desenvolve a versão do app para iPhones e iPads, enquanto outra equipe com foco em Android desenvolve o app utilizando o Android Studio. Seguindo a mesma lógica para diferentes sistemas mobile. Outra alternativa é alongar o tempo de desenvolvimento. Nesse caso, uma mesma equipe irá ser responsável pelo desenvolvimento nos diferentes sistemas previstos. O desenvolvimento tradicional mobile é exclusivo e incompatível, porém como tem total acesso aos recursos nativo extraindo o máximo do sistema operacional, resulta em um produto com performance melhor e de tamanho menor. 
 

A abordagem multiplataforma ou cross-platform diz respeito à criação de um aplicativo por meio de um único processo de desenvolvimento, onde o resultado final serão apps lançados em plataformas diferentes. Isso é possível graças a ferramentas e frameworks de desenvolvimento que utilizam linguagens web como HTML5, CSS3 e Javascript (ou outras linguagens de programação possíveis). Os principais sistemas operacionais do mercado mobilem suportam essas linguagens e suas APIs, de forma que, ao criar um aplicativo baseado nessas ferramentas, o mesmo código pode ser compilado para sistemas operacionais diferentes.

Já as vantagens de desenvolvimento multiplataforma estão relacionadas ao ganho de produtividade, flexibilidade e manutenção dos aplicativos gerados pois:
•	O aplicativo é desenvolvido para várias plataformas ao mesmo tempo;
•	Não requer a existência de equipes de desenvolvimento específicas para sistemas e plataformas diferentes;
•	Custos são menores, pois a equipe é mais enxuta.

Por que vamos usar Expo

O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo. Apesar de cumprir esse papel muito bem, o Expo possui algumas desvantagens, principalmente para programadores que estão migrando de um estágio iniciante para intermediário com React Native.

Quando iniciamos no desenvolvimento mobile percebemos que o número de API’s e recursos nativos que podemos controlar através da nossa aplicação é gigante, e muitas vezes não nos recordamos de todas opções que temos disponíveis. O Expo, por sua vez, oferece grande parte desses recursos de forma nativa e integrada e, por exemplo, você tem acesso à recursos como câmera, microfone, player de música, entre outros, de forma muito simples utilizando essa ferramenta.

Apesar de todos esses benefícios, o grande ponto do Expo para quem está iniciando é que para começar a desenvolver suas aplicações mobile com React Native você não precisará instalar a SDK do Android ou o XCode para Mac, isso porque o Expo possui um aplicativo móvel instalável pelas lojas do Android/iOS que contém todo código nativo necessário pelo React Native para iniciar sua aplicação e, dessa forma, a única alteração em código que você faz é em Javascript.

 

A vantagem é que nesse formato o desenvolvedor inicia muito rápido e em poucos minutos está criando sua aplicação, toda parte complicada foi abstraída. A desvantagem está em exatamente pular essas etapas pois desconhecendo todo processo de instalação da SDK do Android ou XCode para iOS vai te limitar para lidar com processos de atualização e build das aplicações. Além disso, há alguns recursos nativos que o Expo não tem o que obriga o desenvolvedor a fazer o Eject do Expo e retornar ao método de desenvolvimento multiplataforma.

Utilizar o Expo quando:
•	Você está testando o React Native e quer entender como ele funciona;
•	Você não tem interesse em publicar e manter aplicações mobile complexas (apenas criar apps simples).

Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais.  Com o Node instalados, abra o terminal  e execute:
yarn global add expo-cli OU npm install expo-cli --global
 

Para verificar se a instalação ocorreu com sucesso, execute:
expo --version

Para criar o projeto mobile digite:
expo init mobile

	E escolha a opção:
blank (TypeScript)    same as blank but with TypeScript configuration

No projeto Expo, que faz a interface com o navegador é o Metro Builder pelo navegador, e é ele que oferece as opções de depuração da aplicação. Porém para dispositivos físicos, aparentemente, não diferenças no desenvolvimento.
 

	Dentro da pasta do projeto digite:
yarn add expo OU npm install expo
 

Depois digite:
yarn start OU npm start
 

	Se você estiver utilizando um projeto com Expo desatualizado pode aparecer a seguinte mensagem:
 

	Para resolver este problema atualize a versão do Expo instalada com o comando:
expo update
 

	Que vai abrir o browser para visualizar os logs da aplicação, quais celulares disponíveis estão debugando, etc. 
 

Quais celulares e emuladores disponíveis estão debugando, etc.
 

	Mensagem de conectado:
 

	Podem emitir erros de construção também:
 

	Ou erros no MetroBuilder:
 

	Ou erros no emulador:
 

	Sempre antes começar a executar o emulator elimine todas instancias abertas do Expo...
 

	Para listar emuladores podemos aplicar o comando:
emulator –list-avds
 
E para iniciar um emulador:
emulator –avd Nome_Emulador

O importante é o endereço abaixo que permite testarmos a aplicação:
exp://192.168.0.101:19000

	Para testar com o QR Code temos que instalar o app Expo cliente no celular:
 
 	 To run the app with live reloading, choose one of:
•	Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
•	Press a for Android emulator, or w to run on web.
•	Press e to send a link to your phone with email.
•	Press s to sign in and enable more options.

Com este QR Code é possível passar para outras pessoas com o expo instalado para poderem avaliar seu aplicativo pronto:
 

	Para testar no emulador temos que ver o vídeo antes pra saber como instalar para React Native:
https://www.facebook.com/rocketseat/videos/codedrops-03-emulando-react-native-no-iosandroid-com-expo/2988252154733623/

	O expo para dar muitos problemas, tem limitações de proxy e Firewall, mas dá pra consultar alguns deles em:
https://github.com/Rocketseat/expo-common-issues

	Ao alterarmos o arquivo App.tsx ele atualiza automaticamente a interface do usuário (Fast-Reload). Caso precise atualizar a interface basta apertar 2x seguidas a tecla R ou Crtl+M para aparecer o menu abaixo. No aparelho físico, é preciso chacoalhar o aparelho para ter acesso ao menu.
 






Diferenças pro ReactJS

Como podemos ver a estrutura do programa mobile e igual a da Web: JSX (Javascript + XML) e funções retornando Elementos gráficos com componentes utilizando os estados e propiedades. Porém estes elementos não são HTML puro (tags div, p, h1) e sim componentes pré-criados pela biblioteca do Native (StyleSheet, Text, View). Todos elementos tem display flex por padrão, e diferentemente da Web o sentido de orientação padrão é vertical/ e não horizontal como na Web/monitor. Por exemplo tudo que representar um bloco de layout (div, session, header, footer, ul, article) é uma View ou o que for texto (h1, p, spam, Strong) é o componente Text.

O css também não existe (classes, ids) e nem herança de estilos. Cria-se um estilo (style) particular e identificado por elemento. Não há parte de animações, nem gradientes, grid tem que fazer na unha.
 

	A única exceção de herança de estilo é quando se coloca componentes Text aninhados como abaixo:
 

Criando tela de mapa

	Crie uma pasta src e dentro dela a pasta pages. Dentro dessa pasta teremos as páginas igual o que foi feito na aplicação web. Comece criando a página/pasta OrphanagesMap com os arquivos index.tsx e styles.ts (não mais css)
 

	No arquivo principal App.tsx vamos prepara-lo para receber o componente OrphanagesMap. Como não é possível “empilhar” os componentes OrphanagesMap e StatusBar sem que haja alg envelopando-os, aqui podemos fazer de duas formas principais:
 

A vantagem do Fragment é que não irá renderizar mais uma View, pois de Landing já está retornando outra View. Para instalar as fontes usadas no projeto Web (Nunito) faça o seguinte comando:
expo install @expo-google-fonts/nunito
 

Após feito isso, na página App.tsx importe as fontes e o módulo AppLoading:

import { AppLoading } from 'expo'
import { Nunito_600SemiBold,Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito'

	Na mesma página, declare globalmente as variáveis e faça um condicional para verificar se as fontes foram carregadas:
 

	Por fim, é so utilizar nas StyleSheets de qualquer página.
 


	Para incluir o mapa na aplicação vamos instalar o MapView do Expo com o comando:
expo install react-native-maps

	Vamos incluir a página OrphanageMap.tsx e fornecer como provider o Google Maps:
 

	Apenas um latitudeDelta ou longitudeDelta é usado para calcular o tamanho do mapa. Ele pega o maior dos dois de acordo com a fórmula a seguir e ignora o outro. Isso é feito para evitar esticar o mapa.
•	O mapa é dimensionado de acordo com a largura e a altura especificadas nos estilos e / ou calculado por react-native.
•	O mapa calcula dois valores, longitudeDelta / largura e latitudeDelta / altura, compara esses 2 valores calculados e considera o maior dos dois.
•	O mapa é ampliado de acordo com o valor escolhido na etapa 2 e o outro valor é ignorado.
o	Se o valor escolhido for longitudeDelta, a borda esquerda será longitude - longitudeDelta e a borda direita será longitude + longitudeDelta. A parte superior e inferior são os valores necessários para preencher a altura sem esticar o mapa.
o	Se o valor escolhido for latitudeDelta, a borda inferior será latitude - latitudeDelta e a borda superior será latitude + latitudeDelta. A esquerda e a direita são os valores necessários para preencher a largura sem esticar o mapa.

O provider tem o PROVIDER_GOOGLE ou o PROVIDER_DEFAULT, o Default e variável em relação ao aparelho se for um Sistema Android-Google é o Google Maps, se for um iOS é sistema Apple então utiliza Apple AirMap.

Criar Marcadores 

	Todos as imagens da aplicação serão abtidas na mesma forma que na aplicação Web, ou seja, entrando no Layout do Figma e Exportando a imagem do formato desejado.
 

	Uma funcionalidade muito útil do Figma é que é possível e recomendado para desenvolvimento mobile termos diferentes tamanhos de imagens no projeto.

Por padrão, o Native também não lê arquivos de imagem svg só png. Teria que instalar uma extensão. No mobile tem o conceito de densidade de pixels e temos que exportar as imagens em 3 tamanhos que o Native reconhece a resolução pelo nome ...2x, 3x, etc. Antes de existir o React, não era possível o Javascript reconhecer imagens. Para fazer a aplicação reconhecer arquivos png precisamos criar uma pasta @type em src com um arquivo index.d.ts com a seguinte declaração:
declare module '*.png';
 

	Da mesma forma do que na Web temos que inserir um marcador dentro do map 
 

	O evento de Click na Web ura PopOut aqui em mobile é Callout. Inicialmente, para criar os botões podemos utilizar o TouchableOpacity, importando do React Native.

import {View, Image, Text, TouchableOpacity} from 'react-native'

	E aplicando nos botões ficaria como abaixo. O Feather a a mesma biblioteca de ícone que estamos utilizando no projeto Web.
 

	Como alternativa você pode utilizar também o botão ReactButton, que tem comportamentos nativo em cada plataforma (Android, iOS) ao pressionar o botão.
 

Repare que o style recebe um array de estilos, permitindo 2 estilos aproveitarem um estilo básico simulando a flexibilização de uma herança.

 


Trabalhando com rotas 

	Primeiro, crie a página OrphanageDetails.tsx que é para onde a página OrphanageMap irá realizar a navegação.
 

	Para navegar vamos instalar a biblioteca React Native digitando:
Yarn add @react-navigation/native OU npm install @react-navigation/native
 

	Depois temos que instalar as dependências em relação ao expo:
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install react-native-gesture-handler react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add react-native-gesture-handler react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

 

	A 3 tipos de navegação React:
•	Stack/Pilha: A mais utilizada, que para cada clique ou uma ação de navegação, ela vai sendo salva em uma pilha, e as rotas são empilheiradas, você pode voltar sempre para o estado anterior. 
•	BottomTabs: Com um menu de abas na parte inferior da tela.
•	Drawer: Pelo menu hambúrguer.

Precisamos instalar então a navegação stack:
yarn add @react-navigation/stack OU npm install @react-navigation/stack
 

	Criamos então um arquivo routes dentro de src que retorna um NavigationContainer contendo as telas (Screen) conforme abaixo.
 

	O screenOptions serve para desabilitar o header com o título e várias outras opções, nos componentes Screen é possível fazer as mesmas configurações individualmente com o atributo options. Com isso, já podemos navegar. Na página OrphanageMap.tsx importe useNavigation do React Navigation:

import { useNavigation } from '@react-navigation/native'

	Crie as funções que serão associando aos botões de navegação e indique a rota:
 

	Finalmente, atribua os métodos aos botões.
 

Aula 5 – 16/10/2020

Tópicos abordados nesta aula:
•	Criando fluxo de cadastro de orfanato 
•	Criando componente Header 
•	Adicionando telas faltantes
•	Conectando Front-End e Back-End
•	Detalhe do orfanato
•	Criando orfanato
•	Desafios
•	Surpresa especial

Criando fluxo de cadastro de orfanato 

Diferentemente da aplicação da Web aonde na tela de cadastro a gente selecionava a localização do orfanato em um mapa e inseria as outras informações em um formulário, na aplicação mobile o cadastro será feito em duas etapas e é preciso criar as páginas dentro de uma pasta CreateOrphanage:
Página SelectMapPosition.tsx: para selecionar a localização
Página OrphanageData.tsx: Para inserir os dados e confirmar o cadastro

E adicionamos as novas páginas no arquivo routes.tsx
 

	E na página OrphanageMap inclua o método de navegação ao clicar no botão
 

Criando componente Header 

Crie uma pasta componets com um arquivo Header.tsx com o seguinte conteúdo:
 

	O único elemento diferente que estamos utilizando aqui é o BorderlessButton que é um botão utilizado quando temos textos ou ícones sem Background clicáveis e que tem um conportamente nativo para cada plataforma nativa. No Android, ocasiona um efeito RipleEffect e o iOS altera um pouco a transparência do botão. E no arquivo routes.tsx, fazemos a definição no atributo options para definir as páginas que irão aparecer o Header.
 

Adicionando telas faltantes

Foi disponibilizado para Download as páginas e estilo das páginas OrphanageDetails.tsx, SelectMapPosition.tsx e OrphanageData.tsx.
 

	Um componente novo que foi utilizado é o ScrollView, que permite a troca da imagem por um sistema de rolagem na horizontal. O atributo pagingEnabled faz com que seja visualizada uma imagem por vez, não ficando uma imagem cortada como demonstra acima. 

Conectando Front-End e Back-End

Aqui vamos começar a integrar o Front-End mobile com o Back-End, então precisamos instalar o axios para fazermos as chamadas HTTP.
npm install axios
 

	Depois de instalado, precisamos criar um pasta services com um arquivo api.ts definindo o endereço da API.
 

	Quando estamos testando remotamente do celular, ás vezes, não estamos conectados na mesma rede. Então para minimizar esses problemas é indicado de passar invés de localhost:3333 como foi feito no desenvolvimento Web passar o IP de sua máquina de desenvolvimento. Para descobrir o IP podemos ir no terminal e digitar ipconfig:
 
 
	Ou quando executar o projeto, no Expo, ele informa o IP na parte de conexão LAN e a mesma informação esta no terminal do VS Code.
 

	Para testar a conexão vamos trazer os marcadores a página OrphanagesMap.tsx. Adicione useEffect e useState do React, que carrega as informações da API e fazem o controle de estado conforme foi feito no projeto Web.
 

	Por fim, precisamos iterar o array de orfanatos para renderizar os marcadores no mapa. Aqui o método que vai direcionar para a página de detalhes precisa receber um parâmetro e ficaria assim:
 

Detalhe do orfanato

Na página OrphanageDetails.tsx precisamos utilizar outro Hook chamado useRotes para recuperar o id do ornafato passado na navegação da página do mapa. E vamo criar uma interface para armazenar e facilitar o uso desse id pela página.
 

Como na página OrphanagesMap.tsx, vamo adicionar useEffect e useState do React para trazer as informações do orfanato.





	Para abrir o Google Maps iremos utilizar o Linking do React Native.






	Para o mapa funcionar correntamente no emulador é necessário setar uma localização indo em configurações, indicado um local e clicando no botão “Set Localition”
 


Criando orfanato

A primeira etapa para criar um orfanato e selecionar um ponto do mapa na tela SelectMapPosition.tsx. Crie uma constante chamada position e importe o useState do React. Essa variável será atualizada toda vez que o usuário clicar no mapa pelo método handleSelectMapPosition que recebe o parâmetro MapEvents que comtém as coordenadas do ponto do mapa. Quando o usuário navegar para a próxima etapa de cadastro essas coordenadas serão passadas pelo método handleNextStep.
 

	Com a constante position criamos um condicional para os componentes da tela para quando o usuário clicar no mapa deverá aparecer o marcador e o botão que leva para a próxima etapa.
 

	Como na tela de detalhes, assim que navegarmos para a página OrphanageData.tsx temos que utilizar o useRoute para recuperar os parâmetro passados e atribui-lo a um interface para utilizarmos dentro dessa página.
 

	Em seguida, definimos as constantes que armazenam as entradas do usuário, adicionando o atributo value e OnChangeText nos componentes Text e OnValueChange no Switch.
 

	Para testar podemos associar um método com um console.log com as informações da tela ao botão Cadastrar.
 

	E a resposta aparece ou no Metro Builder ao clicar no emulador utilizado ou no terminal no VS Code.
 

	Para incluir as imagens no cadastro precisamento instalar outro pacote do Expo:
npm install expo-image-picker
 

	Em seguida, criamos o método para carregar as imagens do mobile.
 

	Ao chamar o ImagePicker definimos o requestCameraRollPermissionsAsync para verificar se há a permissão de acesso a fotos no aparelho, caso não houver, é emitido um alerta. Depois definimos algumas opções de edição, qualidade de imagem (de 0 a 1) e que queremos só imagens e não vídeos. Caso não for cancelada a operação, a imagem é incluída em um array de imagens, o setImages tem uma sintaxe diferente pois é necessário copiar todas imagens gravadas no array para incluir mais uma. O componente na tela ficará assim:
 

	Para colocar imagens no emulador para testar a inclusão, simplemente arraste uma imagem do computador para emulador que ela vai ser gravada na pasta Downloads do emulador. Para finalizar o cadastro o método de envio dos dados a API fica da seguinte maneira:
 
	Onde precisamos utilizar o componente FormData e append dos dados, porque estamos enviando imagens junto e não dá pra fazer isso com JSON. No final, vamos ser redirecionados a página principal, que é o mapa com todos os marcadores/orfanatos.

	Quando enviamos o cadastro e retornamos ao mapa, não está atualizando o mapa com o orfanato recém-gravado. Para corrigir isso invés de utilizar o useEffect precisamos utilizar o useFocusEffect. Porém, do que jeito que foi implentando no vídeo assim:
 

	Causa um erro de loop infinito, pois este Hook sempre fica monitorando o estado de nossa aplicação.
 

	Se alterarmos esse Hook para atualizar utilizando o useCallback, evitamos esse problema. Para saber mais sobre o useCallback, acesse o vídeo no canal da Rocketseat https://youtu.be/jMWNNSx-mcU

 

TabNine

O instrutor da Rocketseat utilizou uma extensão de Inteligência Artificial para auxiliar em auto complet, importação de referências, etc.


