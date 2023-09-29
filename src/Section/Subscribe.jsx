import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between  max-lg:flex-col  items-center gap-10"
      id="contact-us"
    >
      <h3 className=" mt-5  text-center text-3xl items-center leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded">
        <input type="text" placeholder="Subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="SignUp" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
