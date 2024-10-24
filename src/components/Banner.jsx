import { FaPercentage } from "react-icons/fa";
import { robot } from "../assets";
import Container from "./Container";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
      return (
            <div className="lg:mt-16">
                  <Container className="text-lightText flex flex-col lg:flex-row justify-between gap-10">
                        {/* Left Side Content */}
                        <div className="lg:mt-14 mt-10 flex-1">
                              <h1 className="flex items-center gap-2 lg:text-[16px] text-xs rounded-md bg-gray-900/50 py-2 px-3 tracking-wide  lg:w-[310px] w-[240px]">
                                    <FaPercentage className="text-textColor" /> 20% Discount for 1 Month Account
                              </h1>

                              <div className="mt-6">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                                          {/* Title Section */}
                                          <div className="lg:text-6xl text-3xl font-semibold space-y-2 lg:space-y-8 uppercase tracking-wide">
                                                <h1>The Next</h1>
                                                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                                      Generation
                                                </h1>

                                          </div>

                                          {/* Get Started Button */}
                                          <div className="lg:w-36 w-24 lg:h-36 h-24 mt-6 lg:mt-0 flex items-center justify-center rounded-full border-2 border-textColor">
                                                <div className="flex flex-col items-center">
                                                      <span className="flex items-center gap-2 text-sm lg:text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                                            Get <FiArrowUpRight className="text-textColor" />
                                                      </span>
                                                      <span className="text-sm lg:text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Started</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Sub-title */}
                                    <h1 className="lg:text-6xl text-3xl font-semibold uppercase tracking-wide mt-10">
                                          Payment Method
                                    </h1>

                                    {/* Description */}
                                    <p className="mt-10 lg:text-base text-sm tracking-wide">
                                          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                                    </p>
                              </div>
                        </div>
                        {/* inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
                        {/* Robot Image */}
                        <div className="flex-1 flex justify-center items-center relative">
                              {/* Gradient Background */}
                              <div className="absolute "></div>
                              {/* Image */}
                              <img src={robot} alt="robotImage" className="lg:h-[580px] h-[300px relative z-10 ml-11" />
                        </div>

                  </Container>
                  {/* Count Section */}
                  <div className="max-w-screen-xl mx-auto lg:px-0 px-4 flex lg:gap-0 gap-10 flex-col lg:flex-row justify-between lg:items-center lg:mt-10 mt-4 text-lightText">
                        <div>
                              <h1 className="text-2xl flex items-center gap-4"><span className="lg:text-5xl font-semibold">3800+</span> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">User Active</span></h1>
                        </div>
                        <div>
                              <h1 className="text-2xl flex items-center gap-4"><span className="lg:text-5xl font-semibold"></span> <span></span></h1>
                              <h1 className="text-2xl flex items-center gap-4"><span className="lg:text-5xl font-semibold">230+</span> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Trusted by Company</span></h1>
                        </div>
                        <div>
                              <h1 className="text-2xl flex items-center gap-4"><span className="lg:text-5xl font-semibold">230M+</span> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transaction</span></h1>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;
