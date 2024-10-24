import { side1, side2, side3 } from "../assets";
import Container from "./Container";

const Features = () => {
      return (
            <div className="lg:py-20 py-16 text-lightText">
                  <Container id={"features"} className={"flex flex-col lg:flex-row justify-between"}>
                        {/* Left site */}
                        <div>
                              <div className="lg:text-5xl text-2xl font-semibold space-y-8 tracking-wide uppercase ">
                                    <h1>You do the business,</h1>
                                    <h1> well handle the money.</h1>
                              </div>
                              <p className="mt-6 lg:w-[450px] tracking-wide">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                              <button type="button" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-md mt-8">
                                    Get Started
                              </button>
                        </div>
                        {/* Right site */}
                        <div className="flex flex-col gap-4">
                              <div className="flex items-center gap-4 hover:bg-gray-500 py-4 px-4 rounded-lg duration-300 cursor-pointer">
                                    <span className="bg-cyan-300/20 py-3 px-3 rounded-full"><img src={side3} alt="img" className="h-10 w-10" /></span>
                                    <div>
                                          <h1 className="text-xl font-medium">Rewards</h1>
                                          <p className="mt-1">The best credit cards offer some tantalizing combinations <br /> of promotions and prizes</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 hover:bg-gray-500 py-4 px-4 rounded-lg duration-300 cursor-pointer">
                                    <span className="bg-cyan-300/20 py-3 px-3 rounded-full"><img src={side2} alt="img" className="h-10 w-10" /></span>
                                    <div>
                                          <h1 className="text-xl font-medium">100% Secured</h1>
                                          <p className="mt-1">The best credit cards offer some tantalizing combinations <br /> of promotions and prizes</p>
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 hover:bg-gray-500 py-4 px-4 rounded-lg duration-300 cursor-pointer">
                                    <span className="bg-cyan-300/20 py-3 px-3 rounded-full"><img src={side1} alt="img" className="h-10 w-10" /></span>
                                    <div>
                                          <h1 className="text-xl font-medium">Balance Transfer</h1>
                                          <p className="mt-1">The best credit cards offer some tantalizing combinations <br /> of promotions and prizes</p>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Features;