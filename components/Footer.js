const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-3 p-5 pt-8 border-t-2 md:grid-cols-4 border-borderColor bg-footerBg md:px-10 text-primeBlack">
      <div className="space-y-3 border-b-2 border-borderColor md:border-b-0">
        <h3 className="text-xs font-bold uppercase">About</h3>
        <p className="">How Airbnb works</p>
        <p className="">Newsroom</p>
        <p className="">Airbnb 2021</p>
        <p className="">Investors</p>
        <p className="">Airbnb Plus</p>
        <p className="">Airbnb Luxe</p>
        <p className="">HotelTonight</p>
        <p className="">Airbnb for Work</p>
        <p className="">Made possible by Hosts</p>
        <p className="">Careers</p>
        <p className="">Founders&apos; letter</p>
      </div>
      <div className="space-y-3 border-b-2 border-borderColor md:border-b-0 ">
        <h3 className="text-xs font-bold uppercase">Community</h3>
        <p className="">Diversity & Belonging</p>
        <p className="">Against Discrimination</p>
        <p className="">Accessibility</p>
        <p className="">Airbnb Associates</p>
        <p className="">Frontline Stays</p>
        <p className="">Guest Referrals</p>
        <p className="">Gift cards</p>
        <p className="">Airbnb.org</p>
      </div>
      <div className="space-y-3 border-b-2 border-borderColor md:border-b-0 ">
        <h3 className="text-xs font-bold uppercase">Host</h3>
        <p className="">Host your home</p>
        <p className="">Host an Online Experience</p>
        <p className="">Host an Experience</p>
        <p className="">Responsible hosting</p>
        <p className="">Resource Center</p>
        <p className="">Community Center</p>
      </div>
      <div className="space-y-3 border-b-2 border-borderColor md:border-b-0 ">
        <h3 className="text-xs font-bold uppercase">Support</h3>
        <p className="">Our COVID-19 Response</p>
        <p className="">Help Center</p>
        <p className="">Cancellation options</p>
        <p className="">Neighborhood Support</p>
        <p className="">Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
