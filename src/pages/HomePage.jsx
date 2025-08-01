import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'

function HomePage({ cart, addToCart }) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 