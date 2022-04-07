import './home.css'
import imageCity from '../../Assets/imageCity.svg';

export default function Home(){
    return(
        <main className='page' >
            
         <section className='body' >
            <h1>every night can be a game night</h1>
            <img src={imageCity} />
         </section>

        </main>
       
    )
}