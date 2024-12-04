const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-16 bg-[#2C2D1C] px-4 md:px-20">
      <div className="flex w-full items-center justify-center border-t border-[#7A7A7A]">
        <span className="text-[#7a7a7a] text-xs md:text-sm lg:text-xl italic">
          &copy; {new Date().getFullYear()} Studio Garden Brows - Todos os
          Direitos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
