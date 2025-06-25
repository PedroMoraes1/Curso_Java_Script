import CardPizza from '../../cardPizza'
import pizza01 from '../../../assets/pizzas/pizza01.png'
import pizza02 from '../../../assets/pizzas/pizza02.png'
import pizza03 from '../../../assets/pizzas/pizza03.png'
import './style.css'

const HighlightsSection = () => {
    return (
        <section className="highlights-section">

            <h3>Nossos Destaques</h3>

            <div className="cards">
                <CardPizza pizzaImage={pizza01} pizzaName={"Pizza de Calabresa"} pizzaIngredients={"Tradicional, com bastante sabor e crocância."}/>                                            
                <CardPizza pizzaImage={pizza02} pizzaName={"Pizza de Calabresa"} pizzaIngredients={"Tradicional, com bastante sabor e crocância."}/>                                            
                <CardPizza pizzaImage={pizza03} pizzaName={"Pizza de Calabresa"} pizzaIngredients={"Tradicional, com bastante sabor e crocância."}/>                                            
            </div>
            
        </section>
    )
}

export default HighlightsSection