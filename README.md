# Sobre o projeto

Este projeto foi desenvolvido para exibir as informações sobre a franquia Star Wars. Foi utilizado para o desenvolvimento da interface a tecnologia React e consumindo os dados da API pública swapi.co.

# Estrutura de Arquivos

```
star-wars
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|-- src
|   |-- actions
|   |   |-- getDataById
|   |   |   |-- actionTypes.js
|   |   |   |-- index.js
|   |   |-- getDataByPage
|   |   |   |-- actionTypes.js
|   |   |   |-- index.js
|   |   |-- handleError
|   |   |   |-- actionTypes.js
|   |   |   |-- index.js
|   |-- assets
|   |   |-- images
|   |   |   |-- background.png
|   |   |   |-- images.js
|   |   |   |-- star-wars-logo.png
|   |   |   |-- tie-defender.png
|   |-- components
|   |   |-- CardDetailsHeader
|   |   |   |-- index.js
|   |   |-- CardList
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |   |-- CardLists
|   |   |   |-- index.js
|   |   |-- Cards
|   |   |   |-- Cards.js
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |   |-- DetailsImage
|   |   |   |-- index.js
|   |   |-- FilmDetails
|   |   |   |-- FilmDetails.js
|   |   |   |-- index.js
|   |   |-- Header
|   |   |   |-- Header.js
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |   |-- Loader
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |   |-- Message
|   |   |   |-- index.js
|   |   |   |-- Message.js
|   |   |   |-- style.css
|   |   |-- Paginator
|   |   |   |-- index.js
|   |   |   |-- Paginator.js
|   |   |   |-- style.css
|   |   |-- PeopleDetails
|   |   |   |-- index.js
|   |   |   |-- PeopleDetails.js
|   |   |-- PlanetDetails
|   |   |   |-- index.js
|   |   |   |-- PlanetDetails.js
|   |   |-- SpecieDetails
|   |   |   |-- index.js
|   |   |   |-- SpecieDetails.js
|   |   |-- StarshipDetails
|   |   |   |-- index.js
|   |   |   |-- StarshipDetails.js
|   |   |-- VehicleDetails
|   |   |   |-- index.js
|   |   |   |-- VehicleDetails.js
|   |   |-- WithLists
|   |   |   |-- index.js
|   |-- Pages
|   |   |-- Details
|   |   |   |-- Details.js
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |   |-- Home
|   |   |   |-- Home.js
|   |   |   |-- index.js
|   |   |   |-- style.css
|   |-- Reducers
|   |   |-- getDataByIdReducer.js
|   |   |-- getDataByPageReducer.js
|   |   |-- handleErrorReducer.js
|   |   |-- index.js
|   |-- Store
|   |   |-- configureStore.js
|   |-- utils
|   |   |-- Utils.js
|   |-- App.js
|   |-- App.test.js
|   |-- global.css
|   |-- index.js
|   |-- routes.js
|   |-- serviceWorkers.js
|   |-- services.js
```

# Instalação

Para instalar e utilizar este projeto o processo é bem simples, basta executar alguns comandos dentro da pasta do projeto na máquina local.

1. Instalação das dependências do projeto:
```
npm install
```
Este comando irá baixar todas as depências do projeto para sua execução.

2. Após todas as depências serem instaladas, basta executar o comando:
```
npm start
```
Para inicializar o projeto.

# Descrição de Arquivos

**_images.js_** é a coleção de imagens do projeto, todas as imagens referentes aos personagens, naves, veiculos e etc, estão relacionadas neste arquivo. As imagens serão renderizadas para o cliente de acordo com o nome ou o título do objeto.

**_Components_**

**_CardList_** faz a renderização das lista dos objetos, como listas de filmes, personagens, pilotos, etc. Para a utilização basta passar o array de objetos a serem exibidos e um título.
```
<CardList data={array_de_objetos} title={título_da_lista} />
```

**_Cards_** exibe todas as informações de forma resumida, apresentando apenas uma imagem de fundo e um nome ou título. Para exibir os detalhes do cartão, basta clicar no mesmo. A utilização é feita passando os dados que serão exibidos em forma de cartões e uma função para pegar os dados pelo ID do objeto.
```
<Cards data={array_de_objetos} getDataById={função} />
```

**_DetailsImage_** exibe a imagem do cartão selecionado e o botão de voltar para Home. Para carregar a imagem e a função de retorno, devem ser passados dois parametros para o componente, o nome do cartão e a função de retorno.
```
<DetailsImage name={context.dataSelected.data.name} goBack={context.returnToHome} />
```

**_Header_** é o cabeçalho da aplicação, onde encontram-se, a logo e os botões para fitlrar os dados que serão exibidos em *Pages Home*.

**_Loader_** é o componente utilizado entre os *requests*, enquanto o cliente espera que a informação seja renderizada na tela.

**_Paginator_** são os botões responsáveis pela navegação entre as páginas de cartões em *Pages Home*. Os botões serão desabilitados caso não exista páginas para serem navegadas.

**_FilmDetails_**, **_PeopleDetails_**, **_PlanetDetails_**, **_SpecieDetails_**, **_StarshipDetails_** e **_VehicleDetails_**, exibem os detalhes do cartão selecionado. Os dados são carregados diretamente do **_Context_**, sem a necessidade de passar *props*. O component será renderizado em *Pages Details*, se o filtro selecionado for for correspondente ao tipo do componente.
```
{context.filteredBy === 'people' && <PeopleDetails />}
{context.filteredBy === 'starships' && <StarshipsDetails />}
{context.filteredBy === 'films' && <FilmDetails />}
```