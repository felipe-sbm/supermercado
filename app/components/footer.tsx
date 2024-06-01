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
    <footer className="mb-16">
      <h4 className="mb-2 text-2xl font-semibold tracking-tighter">MISSÃO</h4>
      <p className="mb-4">
        {`Disponibilizar produtos e serviços de qualidade, com variedade,
         excelência no atendimento e consciência de cooperação, higiene e
         limpeza, respeitando os interesses dos consumidores, fornecedores,
         colaboradores, gestores e órgãos governamentais.`}
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <h4>Siga-nos nas redes sociais:</h4>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/redesupercop/"
          >
            <Facebook />
            <p className="ml-2 h-7">Facebook</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/redesupercop/"
          >
            <Instagram />
            <p className="ml-2 h-7">Instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://player.xcast.com.br/player-moderno/10930/radiosupercoop///558498395263/"
          >
            <RadioTower />
            <p className="ml-2 h-7">Radio SuperCop</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed by{" "}
        <a href="https://github.com/spiral-sbm">
          <strong>Spiral Inc.</strong>
        </a>
      </p>
    </footer>
  );
}
