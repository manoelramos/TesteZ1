# Teste Z1

O projeto tem como objetivo cumprir os requisitos do teste enviado via PDF.

## Sobre as tecnologias

1. Foi escolhido o expo para a criação do app, para estar alinhados com os requisitos da empresa;
2. Foi utilizando o Zustand para controle de estado;
3. Foi utilizado o MMKV para armazenamento, por ser um dos mais perfomatico;
4. Foi utilizado o FlashList, por questões de perfomance.
5. Foi utilizaod o axios para realizar as chamadas http.

## Start do app

Para utilização do mmvk foi necessário utilizar o prebuild. Talvez seja necessário rodar o comando: npx expo prebuild.

```bash
npm install
```

Para rodar android

```bash
npx expo run:android
```

Para rodar iOS

```bash
npx expo run:ios
```

## Sobre a arquitetura:

### src

- **@types**: Tipagem da aplicação, replicando a arquitetura do projeto.
- **app**: Estão as telas do app, seguindo estrutura para o expo-router.
- **assets**: Estão localizados os assets do projeto, imagens, fontes, animações.
- **clients**: Estão localizados as instâncias de clientes, pode ser http, graphql e etc.
- **components**: Todos os componentes genéricos da aplicação;
- **hooks**: Hooks que serão criados e utilizados no projeto.
  - **_services_**: Hooks que fazem a interface entre a camada de store e a view, nessa camada pode-se inserir as lógicas para chamada de fetchs, controle de loading e possíveis regras de negócios para evitar que as lógicas fiquem nas views.
- **modules**: Concentra as libs utilizadas no projeto, com o objetivo de facilitar manutenções futuras, caso haja necessidade de trocar uma lib ou atualizar.
- **services**: Camada de serviço da aplicação, nelas são inseridas as chamadas para as apis. Nessa camada não é aplicada nenhuma regra de negócio.
- **storage**: Criação de instâncias de libs de armazenamentos;
- **stores**: Criação das stores para controle de estado da aplicação. Nessa camada também estão as chamadas aos serviços. Cada pasta de store tem seu handlers, funções para auxiliar em qualquer de...para que seja necessário para passar a informação para o estado.
- **utils**: Funções utilitárias para auxiliar na aplicação inteira.

## Pontos de melhorias

1. Aumento da cobertura de teste;
2. Melhor tratativa de erros, criação de uma camada que intertrepe os erros de API, alinhados com o formato do backend, por exemplo;
3. Utilização de tema na construção de components e telas;
4. Utilizar biblioteca de internacionalização, para não deixar textos diretamente na View e sim a partir de um arquivo global;
