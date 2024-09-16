import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Documents() {
    const [t] = useTranslation("global");
    useEffect(() => {
        document.title = `${t("home.Acknowledgment")} | Plans_with_you`;
      }, [t]);
    return (
      <>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold tracking-tight">{t("home.love34")}</h2>
          <div className="mt-6">
            <img
              src="/public/img/TEAMO.png"
              alt="Preview"
              className="w-auto h-auto"
            />
            <a
              href="/public/img/TEAMO.png"
              download="TEAMO.png"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
            >
              {t("home.download")}
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default Documents;
  