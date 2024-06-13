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
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 dark:text-teal-300">
            <img
              className="h-auto w-auto"
              src="https://redesupercop.com.br/wp-content/themes/twentytwentyone/img/super-cop-logo.png"
              alt="Logo do SuperCop Supermercados"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Cadastre seu e-mail e receba ofertas imperdíveis.
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Disponibilizar produtos e serviços de qualidade, com
                  variedade, excelência no atendimento e consciência de
                  cooperação, higiene e limpeza, respeitando os interesses dos
                  consumidores, fornecedores, colaboradores, gestores e órgãos
                  governamentais.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
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
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white"
                  />

                  <button className="mt-1 w-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-yellow-300 sm:mt-0 sm:w-auto sm:shrink-0 shadow">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-4 sm:col-span-1">
              <p className="font-medium text-gray-900 col-start-2 dark:text-white">
                Nosso site é seguro
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.ssl.com/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img src="https://redeparaibasupermercados.com.br/wp-content/uploads/2020/08/certificado-170x50.png" alt="Certificado ssl secured" className="w-32  " />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="https://www.facebook.com/redesupercop"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/redesupercop/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="https://player.xcast.com.br/player-moderno/10930/radiosupercoop///558498395263/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Radio SuperCop</span>

                  <RadioTower />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy;Todos os direitos reservados a SuperCop Supermercados 2024. Versão alternativa do site criada por: <a href="https://fsbm.vercel.app">Felipe SBM</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
