# MicroCosmix Benchmarks

Este repositorio contiene pruebas de rendimiento y ejemplos de uso de **MicroCosmix**, la librería para microfrontends desacoplados con comunicación basada en colas asíncronas.

## 🚀 Objetivo

Probar y comparar el rendimiento de MicroCosmix en distintos escenarios:

- Número elevado de contenedores (iframes).
- Alta frecuencia de eventos.
- Comunicación cruzada entre múltiples microfrontends.
- Comparativa frente a otras soluciones existentes.

## 🧪 Qué incluye

- Casos de prueba con microfrontends simulados.
- Herramientas de benchmarking (`performance.now`, `console.time`, etc).
- Scripts de stress test.
- Visualización básica de resultados (en consola o DOM).

## 🧰 Requisitos

- Node.js 18+
- Navegador moderno

## ▶️ Ejecutar pruebas

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000 para interactuar con los escenarios.

📄 Notas
Este repositorio está en constante evolución mientras se exploran distintos patrones de uso y performance.

---

¿Quieres que este repo use algún runner como Vitest + Bench o prefieres todo manual con `performance.now()` y registros?