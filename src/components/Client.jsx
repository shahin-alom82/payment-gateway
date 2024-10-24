import { card } from "../assets";
import Container from "./Container";

const Client = () => {
      return (
            <div className="lg:py-20 py-16 text-lightText">
                  <Container id={'clients'} className={"flex flex-col lg:flex-row gap-16"}>


                        <div>
                              <div className="lg:text-4xl uppercase tracking-wide font-semibold space-y-8 text-2xl lg:mt-24">
                                    <h1>Find a better card deal </h1>
                                    <h1>in few eay steps</h1>
                              </div>
                              <p className="tracking-wide mt-8 text-xl lg:w-[500px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, rem harum aspernatur impedit expedita repellendus officia! Suscipit ducimus debitis accusamus.</p>
                              <button type="button" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-md mt-8">
                                    Get Started
                              </button>
                        </div>
                        <img src={card} alt="productImage" className="lg:h-[600px]" />


                  </Container>
            </div>
      );
};

export default Client;