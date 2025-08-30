 
Considerando que o teste em questão era curto, não vi a necessidade de separar cada mapeamento <br>
e ação em sua respectiva página, porém organizei como se todo mapeamento fosse da mesma página e as ações em outro arquivo para manter o conceito.<br>
<br>
O projeto está separado em:<br>
<br>
support/pageobjects/action: Executa as ações de interação com a objetos da página<br>
support/pageobjects/elements: Mapeia os objetos da página<br>
step_definition: contém pastas que vinculam as ações com o bdd<br>
step_definition/*.feature: Cenários em bdd<br>
<br>
Para Executar os testes informados será necessário:<br>
1- Baixar e executar o Visual Code Community<br>
2- Clonar o repositorio do github:  https://github.com/ranfcordeiro/testeAdvantageShopping<br>
3- Abrir o terminal dentro do Visual Code<br>
4- Executar o comando: npm install cypress --save-dev (instalar cypress)<br>
5- Executar o comando: npm install cypress-cucumber-preprocessor --save-dev (instalar cucumber)<br>
6- Abrir o projeto no testeAdvantageShopping no Visual Code<br>
7- Executar o comando: npm test (execução assistida) ou npm run runtest (execução não assistida)<br>
8- Selecionar E2E (assistida)<br>
9- Executar o teste desejado clicando sobre a feature (assistida)<br>
<br>
Considerações:<br>
<br>
O teste de Api (atualizarImagemProduto.feature) não foi realizado no mesmo formato, apesar de ser possível<br>
Não foi possível realizar o cadastro do usuário para atualizarImagemProduto.feature<br>
<br>
npm install -D cypress-xpath
