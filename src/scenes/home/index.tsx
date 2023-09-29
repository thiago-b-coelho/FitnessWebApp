import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/LogoNameDark.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 960px)"); //TODO change 1060px
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="z-10 mt-20 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative flex justify-center">
              <div className="before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:opacity-30 md:before:content-evolvetext">
                <img src={Logo} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-16 text-lg">
              O melhor studio de Pilates do norte do Brasil. A professora da
              tarde é também a mais gostosa do Brasil. Mas não pode dar em cima
              dela pq ela é casada e tá no local de trabalho dela!
            </p>
          </motion.div>
          {/* CTA */}
          <motion.div className="mt-8 flex items-center gap-8"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Marque sua aula experimental
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Saiba mais</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        {/* <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div> */}
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedbull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
