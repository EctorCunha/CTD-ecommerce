import logoHome from '../../Assets/Basic/logo-gamenight.svg';
import imgHome from '../../Assets/Home/home-photo.png';
import Categories from '../../Components/Categories';
import Top10 from '../../Components/Top10';
import './home.css'

export default function Home() {

    return (
        
        <main className='page-1' id='page-1'>

            <section className='body-1' >
                <img className='logoHome' src={logoHome} alt='logo home'/>
                <img className='imgHome' src={imgHome} alt='imagem home'/>
            </section>

            <Top10/>

            <Categories/>

        </main>
        

        
    )
}