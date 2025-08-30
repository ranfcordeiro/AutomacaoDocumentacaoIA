import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import aGerarDocumentacaoPorId from "../../../support/pageobjects/action/aGerarDocumentacaoPorId";


Given("que eu estou na página de documentação com de id {string}, usuário {string} e senha {string}" , (idPagina, usuario, senha) => {
    aGerarDocumentacaoPorId.acessarDocumento(idPagina)
    aGerarDocumentacaoPorId.autenticar(usuario, senha)
})

When("solicito a transcrição pela IA", () => {
    aGerarDocumentacaoPorId.pegaConteudo()
    aGerarDocumentacaoPorId.executaTranscricao()
})

// Then("recebo o texto formatado para o usuário final", () => {
//     aCart.validaProdutoEscolhido()
// })

