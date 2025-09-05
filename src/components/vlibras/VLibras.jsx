import { useEffect } from "react";

const VLibras = () => {
  useEffect(() => {
    // Se já existe container, não recria
    if (!document.querySelector("[vw]")) {
      const container = document.createElement("div");
      container.setAttribute("vw", "");
      container.className = "enabled fixed bottom-8 right-8 z-50";

      container.innerHTML = `
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      `;

      document.body.appendChild(container);
    }

    // Se script ainda não foi carregado
    if (!document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;

      script.onload = () => {
        if (window.VLibras && !window.__vlibras_widget__) {
          window.__vlibras_widget__ = new window.VLibras.Widget(
            "https://vlibras.gov.br/app"
          );
        }
      };

      document.body.appendChild(script);
    }

    // não faz cleanup: mantém o VLibras ativo mesmo em refresh/navegação
  }, []);

  return null;
};

export default VLibras;
