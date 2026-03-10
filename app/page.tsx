import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-dvh bg-black/80">
      <div className="flex flex-1 flex-col w-full p-4 items-center justify-center gap-16 mb-10">
        <div className="shadow-xl shadow-black/80 rounded-[30px] animate-fade-down animate-once animate-duration-[1400ms] animate-delay-75">
          <Image
            src={"/logo-192x192.png"}
            alt="Logo"
            width={144}
            height={144}
          />
        </div>
        <div className="flex flex-col gap-8 animate-fade-up animate-once animate-duration-[1400ms] animate-delay-75">
          <Button
            asChild
            className="bg-[#3F4D3B] h-10 py-6 rounded-lg shadow-xl shadow-black/80 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white"
            variant={"link"}
          >
            <Link
              href={"https://pay.kiwify.com.br/FC1R11X"}
              target="_blank"
              className="flex w-full"
            >
              <Image
                src={"/e_books-20.webp"}
                alt="E-book"
                width={20}
                height={20}
              />
              <div className="flex-1 text-center">O Valor Que Comunica</div>
            </Link>
          </Button>
          <Button
            asChild
            className="bg-[#3F4D3B] h-10 py-6 rounded-lg shadow-xl shadow-black/80 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white"
            variant={"link"}
          >
            <Link
              href="https://pay.kiwify.com.br/GHLBoos"
              target="_blank"
              className="flex w-full"
            >
              <Image
                src={"/canva.ico"}
                alt="Icone easel"
                width={20}
                height={20}
              />
              <div className="flex-1 text-center">
                Portfólio Profissional:
                <br />
                Totalmente editável no Canva
              </div>
            </Link>
          </Button>
          <Button
            asChild
            className="bg-[#3F4D3B] h-10 py-6 rounded-lg shadow-xl shadow-black/80 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white"
            variant={"link"}
          >
            <Link href="https://pay.kiwify.com.br/PpsF1pK" target="_blank">
              <Image
                src={"/checklist.png"}
                alt="Icone checklist"
                width={20}
                height={20}
              />
              <div className="flex-1 text-center">
                Ficha de Avaliação Lash Lifting: <br />
                Personalizável para seus atendimentos
              </div>
            </Link>
          </Button>
          <Button
            asChild
            className="bg-[#3F4D3B] h-10 py-6 rounded-lg shadow-xl shadow-black/80 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white"
            variant={"link"}
          >
            <Link
              href="https://collshp.com/selecaocarolgarden?view=storefront"
              target="_blank"
            >
              <Image
                src={"/shopee.ico"}
                alt="Icone shopee"
                width={20}
                height={20}
              />
              <div className="flex-1 text-center">
                Seleção Carol Garden
              </div>
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
