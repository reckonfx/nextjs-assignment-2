import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#252B42] text-white w-full h-auto font-">
      {/* Navigation Section Starts Here */}
      <div className="md:w-[1322px] h-[91px] mx-auto">
        <nav className="md:flex items-center justify-between">
          <div className="md:w-[187px] h-[58px] mt-4 ml-[134px]">
            <h3 className="md:font-serif text-[24px] leading-8 tracking-wider font-bold mt-3">
              BrandName
            </h3>
          </div>
          <div className="md:w-[815px] h-[58px] mt-4 ml-[230px] flex items-center justify-between">
            <ul className="flex items-center gap-5 mt-4 font-semibold">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/"}>Product</Link></li>
              <li><Link href={"/"}>Pricing</Link></li>
              <li><Link href={"/"}>Contact</Link></li>
            </ul>
            <div className="flex w-48 h-14 gap-0 font-semibold">
              <button className="flex-1">Login</button>
              <button className="flex-1 bg-[#23A6F0] rounded-md text-center text-white font-bold">Join Us</button>
            </div>
          </div>
        </nav>
      </div>
      {/* End of Navigation Section */}

      {/* Hero Section Starts Here */}
      <section className="flex justify-center items-center  ">
        {/* Inner Container */}
        <div className="flex flex-col items-center w-[1180px] p-20">
          <div className="flex flex-col gap-10 w-[701px] h-[496] p-10">
            <h5 className="w-full text-center text-[16px] leading-6 tracking-[0.1px] text-[#23A6F0]">Welcome</h5>
            <h1 className="font-bold text-[58px] leading-[80px] tracking-wide text-center">
              Selling on the internet like a pro
            </h1>
            <h4 className="text-lg text-center">
              We know how large objects will act, but things on a small scale just do not act that way.
            </h4>
            <div className="space-x-3 flex justify-center">
              <button className="w-[193px] h-[52px] text-sm rounded-md bg-[#23A6F0] font-bold leading-6 tracking-wide text-white">
                Get Quote Now
              </button>
              <button className="w-[162px] h-[52px] rounded-md border-[#23A6F0] border-2 bg-black text-[#23A6F0] font-bold text-sm leading-6 tracking-wide">
                Learn More
              </button>
            </div>

            
          </div>
          {/* cards section */}
          <div className="h-[292px] w-full flex items-center gap-6 mt-10 justify-between">
            {/* card1 */}
            <div className=" bg-white h-full w-1/3 pt-9 pr-10 pb-9 pl-10 ">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] "></div>
            <h5 className="w-[135px] h-[24px] text-[16px] font-bold leading-6 tracking-tighter text-[#252B42] mt-5">training Courses</h5>
            <div className="w-12 h-[2px] bg-[#E74040] mt-5"></div>
            <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-wide text-[#737373] mt-5">The gradual accumulation of 
                information about atomic and small-scale behaviour...</p>
            
            </div>
            {/* card2 */}
            <div className=" bg-white h-full w-1/3">
            <div className=" bg-white h-full w-1/3 pt-9 pr-10 pb-9 pl-10 ">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] "></div>
            <h5 className="w-[168px] h-[24px] text-[16px] font-bold leading-6 tracking-tighter text-[#252B42] mt-5">2,769 online courses</h5>
            <div className="w-12 h-[2px] bg-[#E74040] mt-5"></div>
            <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-wide text-[#737373] mt-5">The gradual accumulation of 
                information about atomic and small-scale behaviour...</p>
            
            </div>
            </div>
            {/* card 3 */}
            <div className=" bg-[#23A6F0] h-full w-1/3">
            <div className=" bg-[#23A6F0] h-full w-1/3 pt-9 pr-10 pb-9 pl-10 ">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-white "></div>
            <h5 className="w-[168px] h-[24px] text-[16px] font-bold leading-6 tracking-tighter text-white mt-5">2,769 online courses</h5>
            <div className="w-12 h-[2px] bg-[#E74040] mt-5"></div>
            <p className="w-[222px] h-[60px] text-sm font-normal leading-5 tracking-wide text-white mt-5">The gradual accumulation of 
                information about atomic and small-scale behaviour...</p>
            
            </div>
            </div>

            </div>
        </div>
        
      </section>
      {/* End of Hero Section */}
     
    </main>
  );
}
