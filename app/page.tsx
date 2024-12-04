import Image from "next/image";
import Button from "./_componentes/Button";
import Footer from "./_componentes/Footer";
import whatsappIcon from "@/public/whatsappIcon.svg";
import instagramIcon from "@/public/instagramIcon.svg";
import youtubeIcon from "@/public/youtubeIcon.svg";
import tiktokIcon from "@/public/tiktokIcon.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen relative  bg-black/80">
        <div className="flex flex-1 flex-col w-full items-center px-4 py-16 mb-20 gap-20 ">
          <div className="shadow-xl shadow-black/50 rounded-3xl overflow-hidden animate-fade-down animate-once animate-duration-[1400ms] animate-delay-75">
            <Image src={"/Logo.png"} alt="Logo" width={160} height={160} />
          </div>
          <div className="flex flex-col gap-8 animate-fade-up animate-once animate-duration-[1400ms] animate-delay-75">
            <Button href="https://wa.me/5512996343610">
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
            </Button>
            <Button href="https://tiktok.com/@acarolgarden">
              <Image
                src={tiktokIcon}
                alt="Icone Tiktok"
                width={14}
                height={14}
              />
              Tiktok
            </Button>
          </div>
        </div>
        <div className="w-full absolute bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
