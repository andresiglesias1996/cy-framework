# AI Agents — cy-framework

Guía de uso de agentes de IA con Cypress 16.x.

## Cypress AI Ecosystem

Cypress 16.x integra múltiples capacidades de IA para testing inteligente.

### Cypress Studio AI

Cypress Studio AI (lanzado en marzo 2026) observa tu interacción con la app y genera assertions automáticamente.

**Cómo usarlo:**
1. Abrir Cypress con `npm run cy:open`
2. Seleccionar un spec y hacer clic en "Open Studio AI"
3. Interactuar con la app — Studio AI observa los cambios en la UI
4. Las assertions se sugieren automáticamente al detectar cambios de estado
5. Aceptar o descartar cada assertion sugerida
6. Guardar — el spec se actualiza con el código generado

```javascript
// Ejemplo de assertion generada por Studio AI
cy.get('[data-cy="cart-count"]').should('have.text', '3');
cy.get('.checkout-button').should('be.enabled');
```

### cy.prompt() — Natural Language API

API experimental para comandos en lenguaje natural (Cypress 16+):

```javascript
// Describir la acción en lenguaje natural
cy.prompt('fill the login form with test credentials and submit');

// El agente de IA interpreta y ejecuta los pasos
cy.prompt('verify that the dashboard shows 5 active users');
```

**Setup:**
```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    experimentalPrompt: true,
    setupNodeEvents(on, config) {
      // ...
    }
  }
});
```

### Cypress Cloud MCP

Conectá tu AI assistant directamente a los test runs en Cypress Cloud:

```json
{
  "mcpServers": {
    "cypress-cloud": {
      "command": "npx",
      "args": ["@cypress/cloud-mcp@latest"],
      "env": {
        "CYPRESS_CLOUD_API_KEY": "tu-api-key"
      }
    }
  }
}
```

Con esto, tu AI assistant puede:
- Leer errores y stack traces de fallos reales
- Analizar screenshots de tests fallidos
- Sugerir fixes basados en el historial de runs
- Comparar runs para detectar flakiness

### cypress-tap — Terminal Interaction

`cypress-tap` permite a agentes de IA interactuar con una sesión `cypress open` desde terminal:

```bash
# Instalar cypress-tap
npm install --save-dev @cypress/tap

# El agente puede correr specs específicos
npx cypress tap run --spec cypress/e2e/smoke/home.smoke.cy.js

# Leer output del Command Log
npx cypress tap logs

# Diagnosticar fallos
npx cypress tap diagnose --run-id <id>
```

### Cypress AI Skills

Cypress mantiene skills oficiales para AI coding agents:

| Skill | Descripción |
|-------|-------------|
| `cypress-author` | Genera tests desde descripciones en lenguaje natural |
| `cypress-explain` | Explica qué hace un test existente |
| `cypress-docs` | Accede a la documentación de Cypress desde el agente |
| `cypress-tap` | Interactúa con sesiones Cypress desde terminal |
| `cypress-cloud-cli` | Gestiona runs y resultados en Cypress Cloud |

### Flujo recomendado con AI agents

1. **Nueva feature**: usar `cypress-author` para generar el test desde la descripción
2. **Review**: usar `cypress-explain` para entender los tests generados
3. **CI falla**: usar Cypress Cloud MCP para que el agente lea el error
4. **Mantenimiento**: usar Studio AI para actualizar assertions cuando la UI cambia
5. **Debug**: usar `cypress-tap` para que el agente interactúe con la sesión abierta

## Recursos

- [Cypress Studio AI](https://www.cypress.io/releases/cypress-studio-ai)
- [Cypress Cloud MCP](https://www.cypress.io/releases/cypress-cloud-mcp-beta)
- [cypress-tap](https://www.cypress.io/releases/cypress-tap-ai-skill)
- [AI Toolkit](https://github.com/cypress-io/ai-toolkit)
