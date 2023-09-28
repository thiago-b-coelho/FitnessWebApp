import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* Left Side */}
                <div className={`${flexBetween} w-full gap-10`}>
                    <img src={Logo} alt="logo" />
                </div>
                {/* Right Side */}
                {isAboveMediumScreens? ( <div className={`${flexBetween} w-full gap-10`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Início" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Pacotes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Informações" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contato" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>sign in</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                    </div>
                </div> 
                ): ( 
                <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <Bars3Icon className="h-6 w-6 text-white"/>
                </button>)}
            </div>
        </div>
        {/* Mobile menu modal */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Início" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Pacotes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Informações" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contato" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </div>
        )}
    </nav>;
}

export default Navbar