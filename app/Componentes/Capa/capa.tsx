import estilos from './capa.module.css'

export default function Capa() {
    return (
        <>
            <section className={estilos.capa}>
                <div className={estilos.container_texto}>
                    <p>Preços baixos em</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </section>
        </>
    )
}