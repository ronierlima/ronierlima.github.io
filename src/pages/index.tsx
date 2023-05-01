import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_CURRICULO_URL) {
      setShowButton(true);
    }
  }, []);

  const renderParagrafos = () => {
    const paragrafos = [
      <p key={0} className="text-justify">
        <span className="text-secondary font-bold">Atuo na área</span> de
        desenvolvimento de software e ensino profissionalizante de programação.
        Sou Bacharel em Sistemas de Informação pela Universidade Federal do
        Ceará.
      </p>,
      <p key={1} className="text-justify">
        <span className="text-secondary font-bold">Possuo habilidades</span> em
        desenvolvimento de software. Além disso, sou apaixonado pelo ensino de
        programação e atuo como instrutor em cursos de programação. Acredito que
        a educação é uma ferramenta poderosa para transformar vidas.
      </p>,
      <p key={2} className="text-justify max-md:text-center">
        <span className="text-secondary font-bold">
          participei de projetos{" "}
        </span>
        relevantes, como o Observatório de Indicadores Sociais do Estado do
        Ceará, onde atuei como líder técnico e desenvolvedor, implementando um
        novo modelo de acompanhamento dos indicadores sociais e de violações de
        Direitos Humanos no Ceará.
      </p>,
    ];

    if (process.env.NEXT_PUBLIC_CONTROLE_P) {
      const toShow: Array<number> = JSON.parse(
        process.env.NEXT_PUBLIC_CONTROLE_P
      );

      return paragrafos.filter((_, index) => toShow.includes(index));
    }

    return paragrafos;
  };

  return (
    <main className="h-full grid gap-8 grid-cols-2 max-md:grid-cols-1">
      <section className="relative flex items-center justify-center max-md:mt-8">
        <div
          id="shape-polygon"
          className="bg-secondary absolute w-3/4 h-full left-0 top-0 z-0"
        />
        <div className="bg-primary border-solid border-8 border-primary max-md:bg-secondary flex overflow-hidden items-end w-[300px] h-[300px] lg-[1200px]:w-[400px] lg-[1200px]:h-[400px] max-w-[400px] max-h-[400px] rounded-full drop-shadow-xl cursor-pointer">
          <Image
            src="/assets/images/profile.png"
            alt="Picture of the author"
            width={1000}
            height={1000}
            className="rounded-full grayscale hover:grayscale-0 justify-center  "
          />
        </div>
      </section>

      <section className="h-full text-white flex flex-col flex-wrap items-start justify-center max-md:px-4">
        <div className="flex flex-col gap-6 max-md:w-full w-min">
          <h1
            id="titulo"
            className="flex max-md:justify-center text-[3rem] min-[1300px]:text-8xl min-[1000px]:text-7xl min-[860px]:text-6xl min-[380px]:text-[3.5rem] font-medium max-w-full "
          >
            <span>ronier</span>
            <span className="text-secondary">lima.</span>
            <span>dev</span>
          </h1>

          {renderParagrafos()}

          {showButton && (
            <a
              href={process.env.NEXT_PUBLIC_CURRICULO_URL}
              download
              onLoad={(e) => console.log(e)}
              className="button-efeito flex items-center px-4 py-2 bg-secondary text-white font-medium text-lg z-0 rounded-lg max-sm:w-full w-max "
            >
              <FontAwesomeIcon className="mr-2" icon={faDownload} /> Baixar
              curriculo
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
