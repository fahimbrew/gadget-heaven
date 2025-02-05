const Footer = () => {
  return (
    <div className="w-9/12 mx-auto bg-base-200 text-base-content p-10 ">
      <div className="text-center space-y-3">
        <h1 className="font-black text-3xl">Gadget Heaven</h1>
        <p className="text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <footer className="footer sm:footer-horizontal p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
