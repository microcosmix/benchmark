const iframe = document.getElementById("consumer") as HTMLIFrameElement;
const TOTAL_MESSAGES = 10000;
const start = performance.now();
let ackCount = 0;

window.addEventListener("message", (e) => {
  if (e.data.type === "ACK") {
    ackCount++;
    if (ackCount === TOTAL_MESSAGES) {
      const duration = performance.now() - start;
      console.log(`✅ Mensajes procesados: ${TOTAL_MESSAGES}`);
      console.log(`⏱️ Tiempo total: ${duration.toFixed(2)}ms`);
      console.log(
        `🚀 Throughput: ${((TOTAL_MESSAGES / duration) * 1000).toFixed(
          2,
        )} msg/s`,
      );
    }
  }
});

// Disparar eventos masivamente
for (let i = 0; i < TOTAL_MESSAGES; i++) {
  iframe.contentWindow?.postMessage(
    { type: "EVENT", id: i, timestamp: performance.now() },
    "*",
  );
}
