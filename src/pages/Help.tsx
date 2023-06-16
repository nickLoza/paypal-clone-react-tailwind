
function Help() {
return (
<>
  <div className=" bg-[#FAF8F5] ">
    <div className="py-4 px-8 max-w-[1250px] m-auto">
    <div className="grid grid-cols-3 ">
      <div className="col-span-3"></div>
    </div>
    <div className="hc_hero-module hc_hero-module--default">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Help Center - Personal Account</h1>
      </div>
      <div className="mt-2">
        <h2 className="text-3xl font-semibold">Welcome John, how can we help?</h2>
      </div>
      <div className="mt-6 ">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
              <path fill-rule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clip-rule="evenodd"></path>
            </svg>
          </span>
          <input type="text" className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm" placeholder="Search by keyword" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3">
      <div>
        <div className="py-4"></div>
      </div>
    </div>
    <div className="grid grid-cols-3">
      <div className="col-span-3"></div>
    </div>
    <div className="grid grid-cols-3">
      <div className="col-span-3"></div>
    </div>
  </div>
  </div>
  
  <div className="text-2xl py-4 px-8 text-center">
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <div className="text-3xl font-semibold">Browse articles and FAQs</div>
      </div>
    </div>
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <ul className="flex flex-col gap-y-2 mt-8">
          <li><a href="#" className="font-semibold">Home</a></li>
          <li><a href="#" className="font-semibold">Payments and Transfers</a></li>
          <li><a href="#" className="font-semibold">Disputes and Limitations</a></li>
          <li><a href="#" className="font-semibold">My Account</a></li>
          <li><a href="#" className="font-semibold">My Wallet</a></li>
          <li><a href="#" className="font-semibold">Login & Security</a></li>
          <li><a href="#" className="font-semibold">Seller Tools</a></li>
          <li><a href="#" className="font-semibold">Feedback</a></li>
          <li><a href="#" className="font-semibold">Add Phone Number</a></li>
          <li><a href="#" className="font-semibold">Referral Program</a></li>
        </ul>
      </div>
    </div>
  </div>

  </>
  );
  }

  export default Help;
