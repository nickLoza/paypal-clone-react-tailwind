import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ClipLoader } from "react-spinners"

const Home 	   = lazy(()=> import("../pages/Home"))
const Transfer = lazy(()=> import("../pages/Transfer"))
const Wallet   = lazy(()=> import("../pages/Wallet"))
const Activity = lazy(()=> import("../pages/Activity"))
const Help 	   = lazy(()=> import("../pages/Help"))

function Routers() {
	const loaderStyle = {
	    display: "flex",
	    justifyContent: "center",
	    alignItems: "center",
	    margin: "3rem auto"
  	};
	return (
		<Suspense fallback={<ClipLoader color="#1040C1" size={100} cssOverride={loaderStyle}/>}>
			<Routes>
		        <Route path="/" element={<Home />} />
		        <Route path="/transfer/:type" element={<Transfer />} />
		        <Route path="/wallet" element={<Wallet />} />
		        <Route path="/activity" element={<Activity />} />
		        <Route path="/help" element={<Help />} />
		    </Routes>
	    </Suspense>
	)
}

export default Routers