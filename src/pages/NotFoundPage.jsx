import { Link } from 'react-router-dom'
import '../styles/NotFoundPage.css'

function NotFoundPage() {
	return (
		<div className='not-found-page'>
			<div className='not-found-content'>
				<div className='not-found-icon'>🌱</div>
				<h1>404</h1>
				<h2>Page introuvable</h2>
				<p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
				<div className='not-found-actions'>
					<Link to="/" className='home-button'>
						Retour à l'accueil
					</Link>
					<Link to="/cart" className='cart-button'>
						Voir mon panier
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFoundPage 