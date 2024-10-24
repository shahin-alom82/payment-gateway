import { apple, bill, google } from "../assets";
import Container from "./Container";

const Products = () => {
      return (
            <div className="lg:py-20 py-16 text-lightText">
                  <Container id={'product'} className={"flex flex-col lg:flex-row gap-16"}>
                        <img src={bill} alt="productImage" className="lg:h-[600px]" />

                        <div>
                              <div className="lg:text-4xl uppercase tracking-wide font-semibold space-y-8 text-2xl lg:mt-24">
                                    <h1>Easily control your</h1>
                                    <h1>billing & invoicing.</h1>
                              </div>
                              <p className="tracking-wide mt-8 text-xl lg:w-[500px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, rem harum aspernatur impedit expedita repellendus officia! Suscipit ducimus debitis accusamus.</p>

                              <div className="mt-8 flex items-center gap-6">
                                    <img src={apple} alt="appleImage" />
                                    <img src={google} alt="googleImage" />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Products;