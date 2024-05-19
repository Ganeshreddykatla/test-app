import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  let [auth, setAuth] = useState(false);
  let router = useRouter();
  const handleLogout = () => {
    localStorage.setItem("token", '');
    router.push("/login");
    setAuth(false);
  };
  useEffect(() => {
    let localData = localStorage?.getItem("token");
    setAuth(localData !== '' ? true : false);
  }, [router.asPath]);
  return (
    <header className="shadow-lg py-4 bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/logo.svg"}
              height={200}
              width={200}
              alt="logo"
              className="w-full h-auto max-w-[180px]"
            />
          </div>
          <div>
            <ul className="flex items-center justify-end gap-x-4">
              <li>
                {auth ? (
                  <div className="cursor-pointer" onClick={handleLogout}>
                    Logout
                  </div>
                ) : (
                  <Link href={"/login"}>Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
