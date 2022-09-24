import Header from "../components/Header"
import ProductLists from "../components/ProductList"
import Footer from "../components/Footer"
import { SliderData } from "../components/SliderData";

function Home() {
	return (
		<>
			<Header />
			<ProductLists slides = {SliderData} />
			<Footer />
		</>
	);
}

export default Home;
