import { IoLogoSkype } from "react-icons/io";
import Container from "./Container";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
      return (
            <div className="text-lightText">
                  <Container>
                        <div className={"flex flex-col lg:flex-row lg:gap-0 gap-6 justify-between"}>
                              <div className="lg:w-2/6">
                                    {/* Logo Section */}
                                    <div className="flex items-center gap-2">
                                          <IoLogoSkype size={40} className="text-lightText" />
                                          <h1 className="lg:text-2xl text-xl text-lightText uppercase font-semibold">
                                                Shahin <span className="text-textColor">Alom</span>
                                          </h1>
                                    </div>
                                    <h1 className="tracking-wide mt-4 text-gray-500">shahinalom3511371@gmail.com</h1>
                                    <p className="mt-4 text-gray-500">Phone : 01682247291</p>
                                    <p className="mt-4 text-gray-500">Assim, Fulbaria, Mymensingh</p>
                              </div>
                              <div className="lg:space-y-4 space-y-2">
                                    <h1 className="text-xl">Useful Links</h1>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Content</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">How it Works</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Create</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Explore</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Terms & Services</p>
                              </div>
                              <div className="lg:space-y-4 space-y-2">
                                    <h1 className="text-xl">Community</h1>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Help Center</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Partners</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Suggestions</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Blog</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Newsletters</p>
                              </div>
                              <div className="lg:space-y-4 space-y-2">
                                    <h1 className="text-xl">Partner</h1>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Our Partner</p>
                                    <p className="text-gray-500 hover:text-cyan-600 duration-300 cursor-pointer">Become a Partner</p>
                              </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between border-t border-blue-400 mt-10 py-10">
                              <h1 className="text-sm tracking-wide">2024 Shahin Alom. All Rights Reserved.</h1>
                              <div className="flex text-center gap-4 lg:mt-0 mt-6 text-gray-300">
                                    <FaGithub size={25} />
                                    <FaFacebook size={25} />
                                    <FaLinkedin size={25} />
                                    <FaInstagramSquare size={25} />
                                    <FaSquareXTwitter size={25} />
                                    <FaYoutube size={25} />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Footer;