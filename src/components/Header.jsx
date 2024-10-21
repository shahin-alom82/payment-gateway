import { IoLogoSkype, IoMdMenu } from "react-icons/io";


import Container from "./Container";
import { nav } from "./constants";
import { Link } from "react-router-dom";

const Header = () => {
      return (
            <div className=" py-6 border-b border-textColor">
                  <Container className={"flex items-center justify-between"}>
                        <div className="flex items-center gap-2">
                              <IoLogoSkype size={40} className="text-lightText" />
                              <h1 className="lg:text-2xl text-xl text-lightText uppercase">Shahin <span className="text-textColor">Alom</span></h1>
                        </div>
                        <div className="lg:flex items-center gap-6 hidden md:block">
                              {
                                    nav.map((item, index) => (
                                          <Link className="text-white tracking-wide" key={index} to={item?.path}>
                                                <span className="text-designColor mr-1">
                                                      {item.value}
                                                      {item.value && ""}
                                                </span>
                                                <span className="tracking-wide">
                                                      {item.title}
                                                </span>
                                          </Link>
                                    ))
                              }
                        </div>
                        {/* Meno Bar */}
                        <IoMdMenu size={30} className="text-lightText block md:hidden" />
                  </Container>
            </div>
      );
};

export default Header;