
import walletImg from "../assets/wallet.svg";

function Wallet() {
	return (
		<>
			<section className="text-center">
				<img className="m-auto mt-14" src={walletImg} alt="wallet" height={160} width={250}/>
				<h3 className="text-5xl mt-4">Link a new card</h3>
				<p className="max-w-[450px] m-auto text-lg font-semibold mt-3 mb-6">Join the millions of customers who use PayPal to pay for everyday purchases any time, any day, anywhere.</p>
				<a className="text-lg font-semibold py-2 px-8 bg-[#142C8E] text-white rounded-full hover:brightness-125" href="#">Link a card</a>
			</section>
		</>
	)
}

export default Wallet