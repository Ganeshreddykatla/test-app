import Image from "next/image";

const FormSection = ({ title, renderElement }) => {
  return (
    <section className="bg-gray-strom/30">
      <div className="lg:py-20 min-h-[85vh] flex items-center">
        <div className="container m-auto">
          <div className="flex flex-col relative md:flex-row p-10 md:p-14 lg:p-20 after:content-[''] after:absolute after:w-full after:left-0 after:top-0 after:h-full after:bg-white/30 bg-[url('/login-bg.jpg')] bg-cover bg-center max-w-[1180px] mx-auto justify-between shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden rounded-[30px]">
            <div className="md:w-2/4 relative z-[999]">
              <div className="w-full h-full flex items-center justify-center mb-4 md:mb-0">
                <div className="w-full md:pr-12 text-center">
                  <div className="pb-6 md:pb-12">
                    <Image
                      alt="logo"
                      loading="lazy"
                      width={118}
                      height={400}
                      className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] mx-auto"
                      src={"/logo.svg"}
                    />
                  </div>
                  {title && (
                    <h2 className="w-full text-2xl md:text-4xl font-bold mb-4 md:mb-8">
                      {title}
                    </h2>
                  )}
                </div>
              </div>
            </div>

            <div className="md:w-2/4 relative z-[9]">
              <div className="w-full bg-white p-6 sm:p-12 rounded-3xl shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)]">
                {renderElement && renderElement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
