import Image from "next/image";
import estilos from './sobre.module.css'; 
import Imagem from '@/public/atendimento.png';
import Imagem2 from '@/public/loja.png';

export default function Sobre () {
    return (
        <>
            <section id="sobre" className={estilos.secao_sobre}>
                <h2>QUEM SOMOS?</h2>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                </p>
                <div className={estilos.container_sobre}>
                    <div className={estilos.card_sobre}>
                        <Image src={Imagem} alt="Imagem de atendimento" />
                    </div>
                    <div className={estilos.card_sobre}>
                        <div className={estilos.texto}>
                            <h3>NOSSAS FILIAIS</h3>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                    </div>
                    <div className={estilos.card_sobre}>
                        <div className={estilos.texto}>
                            <h3>ATENDIMENTO FLEXÍVEL</h3>
                            <p>Nossa equipe possui um atendimento de alta qualidade</p>
                        </div>
                    </div>
                            
                    <div className={estilos.card_sobre}>
                        <Image src={Imagem2} alt="Imagem da loja" />
                    </div>
                </div>
            </section>
        </>
    )
}