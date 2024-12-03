const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-16 bg-[#2C2D1C] px-4 lg:px-20 ">
      <div className="flex flex-col w-full items-center justify-center border-t border-[#7A7A7A]">
        <p className="text-[#7a7a7a] text-xs lg:text-lg italic">
          &copy; {new Date().getFullYear()} Studio Garden Brows - Todos os
          Direitos Reservados.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
