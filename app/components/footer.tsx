import { RadioTower, Instagram, Facebook } from "lucide-react";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-auto max-md:shadow-2xl shadow-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 dark:text-teal-300">
            <img
              className="w-16 lg:w-40 invert dark:invert-0"
              src="https://raw.githubusercontent.com/felipe-sbm/supermercado/main/public/logo.png"
              alt="Logo do Supermercado spiral"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 lg:gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white max-md:text-justify">
                  Cadastre seu e-mail e receba ofertas imperdíveis.
                </h2>
              </div>
            </div>

            <div className="mt-8 col-span-4 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800 shadow">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="seu@email.com"
                    className="w-full lg:ml-4 border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white max-md:m-4 "
                  />

                  <button className="mt-1 w-full bg-fuchsia-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-fuchsia-800 sm:mt-0 sm:w-auto sm:shrink-0 shadow dark:text-black">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-4 sm:col-span-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg max-md:mt-6">
                Nossa missão
              </h4>

              <ul className="mt-3 space-y-4 text-sm">
                <li>
                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Fazer os fregueses se sentirem em um bom ambiente,
                    oferecendo produtos acessíveis mas que sejam de qualidade.
                    Atendendo todos os tipos de pessoas, sem ter discriminação
                    de raça, cor, gênero ou até mesmo de classe social. Estamos
                    prontos para te deixar satisfeito, por que não experimentar
                    nosso serviço? Venha para os Supermercados Spiral!
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-span-4 sm:col-span-1">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Nosso site é seguro
              </h4>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.ssl.com/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img
                      src="https://ee2cc1f8.rocketcdn.me/wp-content/uploads/2023/10/bage-trusted-secure-min.png"
                      alt="Certificado ssl secured"
                      className="w-32  "
                    />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end max-md:mt-9">
              <li className="sm:hidden text-sm">
                Siga-nos nas redes sociais:{" "}
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/felipe_sbm/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="https://soundcloud.com/felipe_sbm"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Radio do Supermercado</span>

                  <RadioTower />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy;Todos os direitos reservados a Spiral 2024.
              Website criado por:{" "}
              <a href="https://fsbm.vercel.app" className="hover:opacity-75">Felipe SBM</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
