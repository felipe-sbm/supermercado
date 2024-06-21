import { RadioTower, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-screen max-md:shadow-2xl shadow-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 dark:text-teal-300">
            <img
              className="w-16 lg:w-40 mt-1 invert dark:invert-0"
              src="https://raw.githubusercontent.com/felipe-sbm/supermercado/main/public/logo.png"
              alt="Logo dos Spiral Supermercados"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 lg:gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white max-md:text-justify">
                  Cadastre o seu e-mail de preferência e receba ofertas
                  imperdíveis.
                </h2>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 col-span-4 lg:col-span-3 lg:flex lg:items-end">
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

              <ul className="mt-3 space-y-4 text-sm">
                <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Verifique nosso certificado para comprovar a sua segurança. Você está seguro, nenhum dado ou cookie é coletado do seu dispositivo.
                    😉
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.ssl.com/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img
                      src="https://ee2cc1f8.rocketcdn.me/wp-content/uploads/2023/10/bage-trusted-secure-min.png"
                      alt="Certificado ssl secured"
                      className="w-32"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-4 sm:col-span-1 mt-8 lg:sm:mt-0">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Conheça a Spiral
              </h4>

              <ul className="mt-3 space-y-4 text-sm">
                <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
                  A spiral é uma empresa que atua no ramo de tecnologias de software e websites desde 2023. Conheça mais sobre nós:
                </li>
                <li>
                  <a
                    href="https://github.com/spiral-sbm"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/167230825?s=400&u=7d9f7d8d8205f44f25e1df96215792f6a1c3c6d1&v=4"
                      alt="Logo da Spiral"
                      className="w-24 rounded-lg"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end max-md:mt-7">
              <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
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

              <li>
                <a
                  href="https://www.linkedin.com/in/felipe-sbm/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>

                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy;Todos os direitos reservados a Spiral 2024. Website criado
              por:{" "}
              <a href="https://fsbm.vercel.app" className="hover:opacity-75">
                Felipe SBM
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
