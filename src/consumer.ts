window.addEventListener("message", (e) => {
  if (e.data.type === "EVENT") {
    // Simular procesamiento (carga opcional aquí)
    window.parent.postMessage({ type: "ACK", id: e.data.id }, "*");
  }
});
