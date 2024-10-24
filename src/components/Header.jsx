import { IoLogoSkype, IoMdMenu } from "react-icons/io";
import Container from "./Container";
import { nav } from "./constants";
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
      const [menuOpen, setMenuOpen] = useState(false);

      return (
            <div>
                  <Container className="flex items-center justify-between border-b border-textColor py-6">
                        {/* Logo Section */}
                        <div className="flex items-center gap-2">
                              <IoLogoSkype size={40} className="text-lightText" />
                              <h1 className="lg:text-2xl text-xl text-lightText uppercase">
                                    Shahin <span className="text-textColor">Alom</span>
                              </h1>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:flex items-center gap-6 hidden md:block">
                              {nav.map((item, index) => (
                                    <Link
                                          key={index}
                                          smooth={true}
                                          duration={700}
                                          to={item.path.toLowerCase()}
                                          className="text-white tracking-wide cursor-pointer"
                                    >
                                          <span className="text-designColor mr-1">
                                                {item.value}
                                          </span>
                                          <span className="tracking-wide">
                                                {item.title}
                                          </span>
                                    </Link>
                              ))}
                        </div>

                        {/* Menu Toggle for Mobile */}
                        <IoMdMenu
                              size={30}
                              className="text-lightText block md:hidden cursor-pointer"
                              onClick={() => setMenuOpen(!menuOpen)}
                        />
                  </Container>

                  {/* Mobile Menu */}
                  {menuOpen && (
                        <div className="md:hidden bg-black text-white px-6 py-4">
                              {nav.map((item, index) => (
                                    <Link
                                          key={index}
                                          smooth={true}
                                          duration={700}
                                          to={item.path.toLowerCase()}
                                          className="block py-2 text-designColor"
                                          onClick={() => setMenuOpen(false)} // Close menu after clicking
                                    >
                                          {item.title}
                                    </Link>
                              ))}
                        </div>
                  )}
            </div>
      );
};

export default Header;
