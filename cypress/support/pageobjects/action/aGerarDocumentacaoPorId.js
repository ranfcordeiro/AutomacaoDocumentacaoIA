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

        // return cy.get(eGerarDocumentacaoPorId.campos.titulo)
        //     .invoke('text')
        //     .then(tituloObtido => {

        //         let titulo = tituloObtido

        return cy.get(eGerarDocumentacaoPorId.campos.conteudo)
            .invoke('text')
            .then(conteudoObtido => {

                let conteudo = conteudoObtido
                    .replace(/\n/g, '')
                    .replace(/\t/g, '')
                    .replace(/-n-/g, '')
                    .trim()
                return { conteudo };
            })
    }

    executaTranscricaoPorApi() {

        this.pegaConteudo().then(({ conteudo }) => {

            const API_KEY = 'AIzaSyDfuNF1vrf_AzaN8_IcV87VFdrR5_DbMR8';
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
            const headers = {
                'Content-Type': 'application/json',
                'X-goog-api-key': API_KEY,
            };

            const data = {
                contents: [
                    {
                        parts: [
                            {
                                text: "Pegue este código " + conteudo + ", pegue o trecho entre as tags 'value:' e 'representation:' e transforme os dados obtido em texto amigável para usuário final"
                            }
                        ]
                    }
                ]
            }

            cy.writeFile('cypress/downloads/porApi.txt', conteudo)
        })
    }

    executaTranscricao() {

        this.pegaConteudo().then(({ conteudo }) => {

            cy.visit(eGerarDocumentacaoPorId.url.urlIa)
            cy.wait(5000)

            cy.get(eGerarDocumentacaoPorId.campos.promptIa)
                .type("Transforme o documento de requisito técnico informado a seguir em um manual de usuário final: " + conteudo)
            cy.get(eGerarDocumentacaoPorId.botoes.gerar)
                .click()
        })
        this.pegaResultado()
    }

    pegaResultado() {
        cy.wait(10000)
        cy.xpath(eGerarDocumentacaoPorId.campos.resultado)
            .invoke('text')
            .then((texto) => {
                cy.writeFile('cypress/downloads/porSite.txt', texto)
            })
    }
}
export default new gerarDocumentacaoPorId