import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";

import { FaAlignRight } from "react-icons/fa6";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsopen] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <header className="w-[100%] ">
      <div className="container">
        <div className="flex justify-between items-center md:py-6 text-white">
          {/* =============================Logo============================= */}
          <div>
            <Link to="/">
              <h2 className="text-3xl md:text-6xl font-bold text-[#f24c00]">
                BTECH
              </h2>
            </Link>
          </div>
          {/* ==========================Desktop Menu========================== */}
          <div className="md:block hidden">
            <ul className="flex gap-5 text-xl">
              <li className="py-2">
                <Link>Home</Link>
              </li>
              <li className="py-2">
                <Link>About</Link>
              </li>
              <li className="py-2 drop-link relative flex items-center gap-2 cursor-pointer">
                Pages <IoIosArrowDown className="text-xl mt-1" />
                <ul className="drop-menu absolute top-10 left-0 bg-[#f24c00] hidden">
                  <li className="pb-3 py-4 pl-10 pr-28">
                    <Link>Screenshot</Link>
                  </li>
                  <li className="pb-3 py-4 pl-10 pr-28">
                    <Link>Features</Link>
                  </li>
                  <li className="pb-3 py-4 pl-10 pr-28">
                    <Link>Career</Link>
                  </li>
                  <li className="pb-3 py-4 pl-10 pr-28">
                    <Link>Faq</Link>
                  </li>
                  <li className="pb-3 py-4 pl-10 pr-28">
                    <Link>404</Link>
                  </li>
                </ul>
              </li>
              <li className="py-2">
                <Link>Pricing</Link>
              </li>
              <li className="py-2">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          {/* ==========================Mobile Menu========================== */}
          <div className="mobile-menu md:hidden block">
            <button
              className=" bg-[#F24C00] py-6 pl-28 pr-8 sm:pr-20 -mr-[5vw] sm:-mr-[10vw] rounded-md"
              onClick={() => setIsopen(!isOpen)}
            >
              <FaAlignRight className="text-2xl" />
            </button>

            {isOpen && (
              <div className="fixed left-0 bg-[#F24C00] w-[100%]">
                <ul className="flex flex-col gap-5 py-2 pl-2 pr-5">
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setDropMenu(!dropMenu)}
                  >
                    Pages <IoIosArrowDown className="text-xl mt-1" />
                  </li>

                  {/* Mobile Dropdown Menu */}
                  <ul
                    className={`ml-5 flex flex-col gap-3 ${
                      dropMenu ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link to="">Screenshot</Link>
                    </li>
                    <li>
                      <Link to="">Features</Link>
                    </li>
                    <li>
                      <Link to="">Career</Link>
                    </li>
                    <li>
                      <Link to="">Faq</Link>
                    </li>
                    <li>
                      <Link to="">404</Link>
                    </li>
                  </ul>
                  {/* Mobile Dropdown Menu */}
                  <li>
                    <Link>Pricing</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
