import { Link } from 'react-router-dom';
import jogo from '../../Assets/About/ector.jpeg';
import './aboutYourGame.css';

export default function AboutYourGame () {
    return (
        <section  className='container-about-your-game'>

            <div>
                <h1 className='title-about-your-game' >SOBRE SEU JOGO</h1>
            </div>
        
            <div className='game' >
                <div className='game-image' >
                    <img src={jogo} alt='imagem de um jogo'/>
                </div>
                
                <div className='game-info' >
                    <h2>TAKENOKO</h2>
                    <p>Há muito tempo na corte imperial japonesa, o imperador chinês ofereceu um urso panda gigante como um símbolo de paz para o imperador japonês. Deste então, o imperador japonês confiou os membros de sua corte &#40;os jogadores&#41;, com a difícil tarefa de cuidar do animal e de seu jardim de bambu.</p>
                    <br></br>
                    <br></br>
                    <p>Em Takenoko, os jogadores vão cultivar terrenos, irrigá-los para crescer uma das três espécies de bambu &#40;verde, amarelo e rosa&#41;. Ao mesmo tempo eles terão que cuidar da fome do animal panda que adora o suculento e macio bambu. O jogador que conseguir melhor cuidar dos terrenos enquanto vai alimentando o apetite delicado do panda, vai ganhar o jogo.</p>
                    <br></br>

                    <div className='price' >
                    <span>R$ 379,99</span>
                    <Link to={'/cart'}><button className='btn'>COMPRAR!</button></Link>
                    </div>

                    <div className='icons' >
                        <img/>
                        <img/>
                        <img/>
                    </div>

                </div>
            </div>

        </section>
    )
}