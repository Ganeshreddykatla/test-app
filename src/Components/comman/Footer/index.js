import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('/login-bg.jpg')] bg-cover bg-center py-10 bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/logo.svg"}
              height={150}
              width={150}
              alt="logo"
              className="w-full h-full max-w-[250px]"
            />
          </div>
          <div>
            <p className="text-black-main text-md font-medium">
              Copyright&#169;2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
