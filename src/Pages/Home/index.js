import logoHome from '../../Assets/Basic/logo-gamenight.svg';
import imgHome from '../../Assets/Home/home-photo.png';
import './home.css'

export default function Home() {
    return (
        <>
        <main className='page' >
            <section className='body-1' >
                <img className='logoHome' src={logoHome} />
                <img className='imgHome' src={imgHome} />
            </section>
        </main>
        </>

    )
}