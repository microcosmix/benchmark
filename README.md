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

## Primeras impresiones del archivo de configuracion

**Nota:** el archivo de configuracion se colocara en la raiz de un proyecto como microcosmix.config.js

Este seria un posible ejemplo de lo que se ha estado barajando

```typescript
export const microcosmixConfig = {
  version: '1.0.0',
  containers:" [
    {
      name: string,
      url: string,
      version: string | array<string>,
      type: 'iframe' | 'webcomponent' | 'custom-element',
      preload: boolean,
      fallbackUrl: string,
      metrics: boolean,
      queues: array<string>,
      mockEvents: [
        {
          queue: 'user.data',
          version: '1.0.0',
          delay: 3000,
          payload: {
            name: 'Nelson',
            role: 'admin'
          }
        },
        {
          queue: 'theme.change',
          version: '2.0.0',
          payload: { theme: 'dark' }
        }
      ],
    }
  ],
  queues: [
    {
        name: string,
        version: string,
        type: 'pubsub' | 'request-response',
        autoStart: boolean,
    }
  ]
}

```

Repensar la declaracion de **mockEvents** sobre todo para cuando se usa desde uno de los contenedores, quizas se pueda hacer un mock de la cola y que el contenedor lo use como si fuera una cola real, pero en realidad es un mock. Esto es algo que se puede hacer con el mock de la cola, pero no se si es necesario hacerlo desde el archivo de configuracion o desde el contenedor.

El usuario deberia poder eligir que colas quiere que se inicien al principio este seria el comportamiento por defecto y que colas quiere iniciar manualmente osea que inicie desde el codigo en algun momento de la aplicacion, esto garantiza que una cola pueda abrirse por voluntad del usuario y cerrarse cuando este lo requiera, dandole al usuario mas capavidades para controlar el flujo de datos y la comunicacion entre los microfrontends.

## Propuesta de modelo de eventos

```json
{
  "header": {
    "name": "chat.message",
    "version": "2.1.0",
    "timestamp": "2025-05-11T10:23:45.123Z",
    "origin": "https://app.example.com",
    "requestId": "abc123-def456",
    "correlationId": "xyz789",
    "meta": {
      "environment": "staging",
      "userAgent": "Chrome/113.0"
    }
  },
  "payload": {
    "text": "¡Hola! 😊",
    "userId": "u123"
  }
}
```
