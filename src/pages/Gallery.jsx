import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Gallery() {
  const [t] = useTranslation("global");
  const [selectedImage, setSelectedImage] = useState(null); // Para manejar la imagen seleccionada

  useEffect(() => {
    document.title = `${t("home.home")} | Plans_with_you`;
  }, [t]);

  const gallery = [
    { id: 1, name: t("home.love19"), imageSrc: '/img/1.jpg' },
    { id: 2, name: t("home.love20"), imageSrc: '/img/2.jpg' },
    { id: 3, name: t("home.love21"), imageSrc: '/img/3.jpg' },
    { id: 4, name: t("home.love22"), imageSrc: '/img/4.jpg' },
    { id: 5, name: t("home.love23"), imageSrc: '/img/5.jpg' },
    { id: 6, name: t("home.love24"), imageSrc: '/img/6.jpg' },
    { id: 7, name: t("home.love25"), imageSrc: '/img/7.jpg' },
    { id: 8, name: t("home.love26"), imageSrc: '/img/8.jpg' },
    { id: 9, name: t("home.love27"), imageSrc: '/img/9.jpg' },
    { id: 10, name: t("home.love28"), imageSrc: '/img/10.jpg' },
    { id: 11, name: t("home.love29"), imageSrc: '/img/11.jpg' },
    { id: 12, name: t("home.love30"), imageSrc: '/img/12.jpg' },
    { id: 13, name: t("home.love31"), imageSrc: '/img/13.jpg' },
    { id: 14, name: t("home.love32"), imageSrc: '/img/14.jpg' },
    { id: 15, name: t("home.love33"), imageSrc: '/img/15.jpg' }
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          {t("home.love18")}
        </h2>

        {/* Grid para la galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gallery.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-72 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-80 transition-opacity duration-300">
                <img
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                  onClick={() => setSelectedImage(product.imageSrc)}
                />
              </div>
              <div className="mt-4 flex justify-center">
                <h3 className="text-lg font-medium text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de vista previa de la imagen seleccionada */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-full max-h-full object-contain"
              alt="Preview"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
