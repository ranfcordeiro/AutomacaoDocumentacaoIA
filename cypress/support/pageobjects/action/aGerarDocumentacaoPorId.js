/// <reference types="cypress" />

import { eGerarDocumentacaoPorId } from "../elements/eGerarDocumentacaoPorId"



class gerarDocumentacaoPorId {

    acessarDocumento(idDocumento) {
        cy.visit(eGerarDocumentacaoPorId.url.urlDoc + idDocumento)
    }

    autenticar(user, pass) {
        cy.wait(5000)
        cy.get(eGerarDocumentacaoPorId.campos.usuario)
            .type(user)
        cy.get(eGerarDocumentacaoPorId.campos.senha)
            .type(pass)
        cy.get(eGerarDocumentacaoPorId.botoes.autenticar)
            .click()
    }

    pegaConteudo() {
        cy.wait(5000)

        return cy.get(eGerarDocumentacaoPorId.campos.titulo)
            .invoke('text')
            .then(tituloObtido => {
                
                let titulo = tituloObtido

                return cy.get(eGerarDocumentacaoPorId.campos.conteudo)
                    .invoke('text')
                    .then(conteudoObtido => {
                        
                        let conteudo = conteudoObtido
                        return { titulo, conteudo };
                    })
            })
    }

    executaTranscricao() {

        this.pegaConteudo().then(({ titulo, conteudo }) => {

            cy.visit(eGerarDocumentacaoPorId.url.urlIa)
            cy.wait(5000)

            cy.get(eGerarDocumentacaoPorId.campos.promptIa)
                .type("Pegue requisito técnico informado a seguir e transforme em um manual de usuário final, amigável para leigos: "+titulo +" "+conteudo)
            cy.get(eGerarDocumentacaoPorId.botoes.gerar)
            .click()
        }
        )
    }
}
export default new gerarDocumentacaoPorId