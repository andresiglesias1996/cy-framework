# cy-framework

Framework E2E profesional con Cypress 16.x, Allure Report, GitHub Actions y Cypress Studio AI.

[![CI](https://github.com/andresiglesias1996/cy-framework/actions/workflows/ci.yml/badge.svg)](https://github.com/andresiglesias1996/cy-framework/actions/workflows/ci.yml)
[![Allure Report](https://img.shields.io/badge/Allure-Report-orange)](https://andresiglesias1996.github.io/cy-framework)

## Stack

- **Cypress** 16.1.0 — testing E2E moderno
- **JavaScript** — amplia compatibilidad
- **Allure** 3.x — reportes interactivos en GitHub Pages
- **GitHub Actions** — CI/CD automatizado
- **@cypress/grep** — ejecución por tags

## Estructura

```
cy-framework/
├── cypress/
│   ├── e2e/
│   │   ├── smoke/        # Tests críticos
│   │   └── regression/   # Suite de regresión
│   ├── pages/            # Page Object Model
│   ├── support/          # Commands y setup
│   └── fixtures/         # Datos de prueba
├── .github/workflows/    # CI/CD
├── cypress.config.js
└── AGENTS.md             # Guía de AI Agents
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
# Abrir Cypress UI
npm run cy:open

# Correr todos los tests
npm run cy:run

# Por tipo
npm run cy:smoke
npm run cy:regression

# Con reporte Allure
npm run cy:run && npm run allure:serve
```

## Tags

| Tag | Descripción |
|-----|-------------|
| `@smoke` | Tests críticos, corren en cada push |
| `@regression` | Suite completa |

## Reporte Allure

Los reportes se generan en cada CI run y se publican en GitHub Pages.

Ver reporte: `https://andresiglesias1996.github.io/cy-framework`

## AI Agents

Ver [AGENTS.md](./AGENTS.md) para la guía de uso de Cypress Studio AI y agentes de IA.

## Branches

| Branch | Propósito |
|--------|-----------|
| `main` | Producción, protegido |
| `develop` | Base de desarrollo |
| `feat/*` | Nuevas funcionalidades |
| `fix/*` | Correcciones |

## Conventional Commits

```
feat: nueva funcionalidad
fix: corrección de bug
test: añadir o modificar tests
ci: cambios en pipeline
docs: documentación
chore: mantenimiento
```
