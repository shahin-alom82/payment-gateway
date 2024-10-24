import { b1, b2, b3, b4 } from "../assets";
import { peopleCart } from "./constants";
import Container from "./Container";

const People = () => {
      return (
            <div className="text-lightText lg:py-20 py-16">

                  <Container>
                        {/* Section One Start */}
                        <div className={"flex flex-col lg:flex-row justify-between gap-10"}>
                              <div className="lg:text-4xl font-semibold tracking-wide space-y-6 uppercase lg:w-1/2 text-2xl">
                                    <h1>What people are</h1>
                                    <h1>saying about us</h1>
                              </div>
                              <p className="lg:w-1/2 lg:text-xl text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatibus enim esse a cupiditate voluptatum cum commodi optio molestias at, quasi ipsam, natus nobis deleniti, sed ex labore blanditiis iusto.</p>
                        </div>
                        {/* Section One End */}


                        {/* Section Two Start */}
                        <div className="lg:py-20 py-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-10">
                              {
                                    peopleCart.map((item, index) => (
                                          <div key={index} className="hover:bg-gray-500 py-6 px-4 rounded-lg duration-300 cursor-pointer">
                                                <img src={item?.img} alt="" />
                                                <h1 className="mt-10 tracking-wide lg:text-xl text-sm">{item.title}</h1>

                                                <div className="flex items-center gap-3 mt-10">
                                                      <img src={item?.imgtwo} alt="img" className="h-16" />
                                                      <div>
                                                            <h1 className="text-xl">{item?.titletwo}</h1>
                                                            <h1>{item?.name}</h1>
                                                      </div>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                        {/* Section Two End */}

                        {/* Section Three Start */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:py-20 py-16">
                              <img src={b4} alt="img" className="h-12" />
                              <img src={b3} alt="img" className="h-12" />
                              <img src={b1} alt="img" className="h-11" />
                              <img src={b2} alt="img" className="h-11" />
                        </div>
                        {/* Section Three End */}

                        {/* Section Four Start */}
                        <div className="lg:py-20 py-16 ">
                              <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                                    <div className="mb-8 lg:mb-0 lg:w-1/2">
                                          <h1 className="text-2xl lg:text-4xl font-semibold tracking-wide uppercase mb-4 lg:mb-6">
                                                Let's try our service now
                                          </h1>
                                          <p className="lg:text-lg">
                                                Everything you need to accept card payments and grow your business anywhere on the planet.
                                          </p>
                                    </div>
                                    <div>
                                          <button type="button" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition duration-300">
                                                Get Started
                                          </button>
                                    </div>
                              </div>
                        </div>
                        {/* Section Four End */}
                  </Container>

            </div>
      );
};

export default People;