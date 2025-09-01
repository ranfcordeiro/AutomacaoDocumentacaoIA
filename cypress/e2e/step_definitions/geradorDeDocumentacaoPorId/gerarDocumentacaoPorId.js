import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import aGerarDocumentacaoPorId from "../../../support/pageobjects/action/aGerarDocumentacaoPorId";


Given("que eu estou na página de documentação com de id {string}, usuário {string} e senha {string}" , (idPagina, usuario, senha) => {
    aGerarDocumentacaoPorId.acessarDocumento(idPagina)
    aGerarDocumentacaoPorId.autenticar(usuario, senha)
})

When("encontro o documento de requisito", () => {
    aGerarDocumentacaoPorId.pegaConteudo()
})

Then("executo a transcrição",()=>{
    aGerarDocumentacaoPorId.executaTranscricaoPorApi()
    aGerarDocumentacaoPorId.executaTranscricao()
    
})
