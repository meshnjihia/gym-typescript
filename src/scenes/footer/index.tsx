import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content gap mx-auto w-5/6 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5 basis-2/3 text-sm">
            Le lyres noirs haleurs de des. T'exiles jaunes et au a fleurs
            n'auraient dont cieux, éclairs violets c'est courus braises ces
            serpents monté sont, atroce plus de ciel cotons des.
          </p>
          <p className="text-base">&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="text-xl font-bold">Links</h4>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet.</p>
          <p className="my-5 text-sm">
            {" "}
            Viragnac mogomnok uilaga thekunched mezuul.
          </p>
          <p className="my-5 text-sm"> Busen die alten was wird wird.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="text-xl font-bold">Contact Us</h4>
          <p className="my-5 text-sm">porem ipscum cadolor sittisus amet.</p>

          <p className="my-5 text-sm">(+254) 715 425 342</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
