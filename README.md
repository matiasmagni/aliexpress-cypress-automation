# membrane-demo

Proyecto de inicio de E2E testing con Cypress.

#### Índice

* [Inicio](#inicio)
  * [Instalación](#instalacion)
* [¿Cómo organizar los tests?](#¿cómo-organizar-los-tests?)
  * [Un archivo por test suite](#un-archivo-por-test-suite)
  * [Compartir el contexto](#compartir-el-contexto)
* [¿Cómo correr los tests?](#cómo-correr-los-tests)

## Inicio

### Instalación

Instalar el framework:

```shell
yarn install
```

## ¿Cómo organizar los tests?

### Un archivo por test suite

Poner los archivos de test en `cypress/integration/`. Cada spec debe representar una test suite con todos sus escenarios positivos y negativos.

Ejemplo: cypress/integration/login.spec.js

```javascript
describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });

  it('El usuario se loguea correctamente en el sitio ingresando datos existentes y validos.', () => {
    cy.fixture('selectors/login').then((selectores) => {
      cy.fixture('data/login').then((data) => {
        // Codigo de automatizacion del test positivo de login...
      });
    });
  });
});
```

### Compartir el contexto

Puede compartir contexto entre tests usando el alias `cy.as()` alias.

For more information please visit: <https://docs.cypress.io/api/commands/as.html>

## ¿Cómo correr los tests?

Correr los tests en el CLI:

```shell
yarn test
```

Correr los tests usando el Test Runner de Cypress:

```shell
yarn debug
```
