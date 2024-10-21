import { twMerge } from "tailwind-merge";

const Container = ({ children, className, id }) => {
      return (
            <div id={id} className={twMerge("max-w-screen-xl mx-auto px-4 lg:px-0", className)}>
                  {children}
            </div>
      );
};

export default Container;