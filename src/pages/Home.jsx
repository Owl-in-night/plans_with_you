import { useEffect } from "react";


import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = `${t("home.home")} | Plans_with_you`;
  }, [t]);

  return (
    <div>
      {/* Primera parte */}
      <div className="relative isolate overflow-hidden  py-24 sm:py-32">
        <img
          alt=""
          src="/img/HOME.png"
          className="hidden md:block absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <img
          alt=""
          src="/public/img/HOMESM.png"
          className="sm:block md:hidden absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight sm:text-5xl">
                {t("home.love1")}
              </h1>
              <p className="mt-6 text-lg leading-8">{t("home.love2")}</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to={`/PlansWithYou/Gallery`}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("home.love3")}
                </Link>
                <a
                  href="#malnutrition"
                  className="text-sm font-semibold leading-6"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("malnutrition")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {t("home.love4")} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda parte */}
      <section id="malnutrition" className="">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t("home.love5")}
              </h1>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
       
                    {t("home.love6")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                  {t("home.love7")}
                  </dd>
                </div>

                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
             
                    {t("home.love8")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                  {t("home.love9")}
                    {/* <ul className="list-disc ml-5 space-y-2  dark:text-gray-200">
                      <li>{t("home.description2-1")}</li>
                      <li>{t("home.description2-2")}</li>
                      <li>{t("home.description2-3")}</li>
                    </ul> */}
                  </dd>
                </div>

                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
          
                    {t("home.love10")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                  {t("home.love11")}
                  </dd>
                </div>
                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
                    {" "}
                    {/* <Icon className="h-6 w-6 mr-2" iconNode={shaveFace} /> */}
                    {t("home.love12")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                    {t("home.love13")}
                  </dd>
                </div>

                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
      
                  {t("home.love14")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                  {t("home.love15")}
                  </dd>
                </div>

                <div className="relative rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-xl ring-1 ring-gray-900/10">
                  <dt className="text-base font-semibold leading-7 text-cyan-400 flex">
    
                    {t("home.love16")}
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                  {t("home.love17")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
