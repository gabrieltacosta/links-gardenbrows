import Image from "next/image";
import { Button } from "@/components/ui/button";
// import whatsappIcon from "@/public/whatsappIcon.svg";
// import instagramIcon from "@/public/instagramIcon.svg";
// import youtubeIcon from "@/public/youtubeIcon.svg";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-dvh bg-black/80">
      <div className="flex flex-1 flex-col w-full p-4 items-center justify-center gap-16 mb-10">
        <div className="shadow-xl shadow-black/80 rounded-[30px] animate-fade-down animate-once animate-duration-[1400ms] animate-delay-75">
          <Image src={"/logo-192x192.png"} alt="Logo" width={144} height={144} />
        </div>
        <div className="flex flex-col gap-8 animate-fade-up animate-once animate-duration-[1400ms] animate-delay-75">
          <Button
            asChild
            className="bg-[#3F4D3B] h-10 rounded-lg shadow-xl shadow-black/80 transition-transform duration-300 ease-in-out hover:-translate-y-1 text-white"
            variant={"link"}
          >
            <Link href={"https://pay.kiwify.com.br/FC1R11X"} target="_blank">
              <Image
                src={"/e_books-20.webp"}
                alt="E-book"
                width={20}
                height={20}
              />
              O Valor Que Comunica
            </Link>
          </Button>
          {/* <Button href="https://wa.me/5512996343610">
            <Image
              src={whatsappIcon}
              alt="Icone Whatsapp"
              width={15}
              height={15}
            />
            Whatsapp
          </Button>
          <Button href="https://instagram.com/acarolgarden/">
            <Image
              src={instagramIcon}
              alt="Icone Instagram"
              width={15}
              height={15}
            />
            Instagram
          </Button>
          <Button href="https://www.youtube.com/@acarolgarden">
            <Image
              src={youtubeIcon}
              alt="Icone Youtube"
              width={18}
              height={18}
            />
            Youtube
          </Button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
