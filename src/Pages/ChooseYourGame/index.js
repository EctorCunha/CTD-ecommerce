import {Link} from 'react-router-dom';
import './chooseYourGame.css'

export default function ChooseYouGame (){
    return (
        <section className='choose-your-game'>
            <div>
                <h1>ESCOLHA SEU JOGO</h1>
                <Link to={'/aboutyourgame'}><button>JOGO</button></Link>
            </div>
        </section>
    )
}