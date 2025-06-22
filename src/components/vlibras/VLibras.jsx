import { useEffect } from "react";

const VLibras = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      console.log("✅ Script VLibras carregado com sucesso");

      setTimeout(() => {
        if (window.VLibras) {
          console.log("✅ VLibras disponível, inicializando widget...");
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        } else {
          console.warn(
            "⚠️ VLibras ainda não está disponível após o carregamento."
          );
        }
      }, 100);
    };

    script.onerror = () => {
      console.error("❌ Falha ao carregar o script VLibras.");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div data-vw className="enabled fixed bottom-6 right-6 z-[2147483647]">
      <div
        data-vw-access-button
        className="active w-12 h-12 bg-blue-600 rounded-full shadow-lg cursor-pointer"
      ></div>
      <div data-vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
