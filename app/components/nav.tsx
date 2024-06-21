"use client";
import { useState } from "react";
import {
  Home,
  Store,
  Newspaper,
  BadgePlus,
  BriefcaseBusiness,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SuperCop</span>
            <img
              className="h-20 w-auto"
              src="https://redesupercop.com.br/wp-content/themes/twentytwentyone/img/super-cop-logo.png"
              alt="Logo do SuperCop Supermercados"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            INÍCIO
          </a>
          <a
            href="/categorias/lojas"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            NOSSAS LOJAS
          </a>
          <a
            href="/categorias/encarte"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            ENCARTE
          </a>
          <a
            href="/categorias/supermomentos"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            SUPERMOMENTOS
          </a>
          <a
            href="/categorias/trabalhe"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            TRABALHE CONOSCO
          </a>
          <a
            href="/categorias/trabalhe"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            CONTATO
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SuperCop</span>
              <img
                className="h-8 w-auto"
                src="https://redesupercop.com.br/wp-content/themes/twentytwentyone/img/super-cop-logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <Home /> Início
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <Store /> Nossas lojas
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <Newspaper /> Encarte
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <BadgePlus /> Supermomentos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <BriefcaseBusiness /> Trabalhe conosco
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <PhoneCall /> Contato
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// import Link from 'next/link'

// const navItems = {
//   '/': {
//     name: 'Início',
//   },
//   '/loja': {
//     name: 'Nossas lojas',
//   },
//   '/encarte': {
//     name: 'Encarte',
//   },
//   '/supermomentos': {
//     name: 'Supermomentos',
//   },
//   '/trabalhe': {
//     name: 'Trabalhe conosco',
//   },
//   '/contato': {
//     name: 'Contato',
//   },
// }

// export function Navbar() {
//   return (
//     <aside className="-ml-[8px] mb-16 tracking-tight">
//       <div className="lg:sticky lg:top-20">
//         <nav
//           className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
//           id="nav"
//         >
//           <div className="flex flex-row space-x-0 pr-10">
//             {Object.entries(navItems).map(([path, { name }]) => {
//               return (
//                 <Link
//                   key={path}
//                   href={path}
//                   className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
//                 >
//                   {name}
//                 </Link>
//               )
//             })}
//           </div>
//         </nav>
//       </div>
//     </aside>
//   )
// }
