
import './accessRestricted.css'

export default function AccessRestricted() {
  return (
    <main className='page-access-restricted' >
      {alert("Senha ou Usuário incorretos.\n\nLogin Correto:\n    Usuário = adm\n    Senha = 1234")}
      <section className='body' >
      </section>
    </main>
  )
}