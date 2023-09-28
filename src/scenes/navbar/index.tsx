import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/LogoIconNameLight.png";
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-primary-100 drop-shadow " : "bg-primary-100 drop-shadow";
  console.log(isTopOfPage);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left Side */}
          <div className={`${flexBetween} w-full gap-10`}>
            <img className="h-16 drop-shadow" src={Logo} alt="logo" />
            <div></div>
          </div>
          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full gap-20`}>
              <div className={`${flexBetween} gap-8 text-lg`}>
                <Link
                  page="Início"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Pacotes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Informações"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contato"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8 text-lg`}>
                <p>Entrar</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Matrícula
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className={`rounded-full bg-gray-500 p-2 ${isMenuToggled && "hidden"}`}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className={`h-6 w-6 text-white`} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl opacity-80">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl ease-in duration-500">
            <Link
              page="Início"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Pacotes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Informações"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contato"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            </div>
            <div className="grid text-center px-10 py-16 text-xl drop-shadow-md opacity-100">
            <ActionButton setSelectedPage={setSelectedPage}>
                  Matrícula
            </ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
