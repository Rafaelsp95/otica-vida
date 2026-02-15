import Image from "next/image";
import estilos from './produtos.module.css';
import Imagem from '@/public/oculos01.png';
import Imagem2 from '@/public/oculos02.png';
import Imagem3 from '@/public/oculos03.png';
import Imagem4 from '@/public/oculos04.png';

export default function Produtos () {
    return (
        <>
            <section id="produtos" className={estilos.produtos}>
                <h2>Nossos produtos</h2>
                <p>
                    Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>
                
                <div className={estilos.container_produtos}>
                    <div className={estilos.card_produto}>
                        <h3>Óculos de grau</h3>
                        <Image src={Imagem} alt="Óculos de grau"/>
                        <p>A partir de R$ 200,00</p>
                    </div>
                    <div className={estilos.card_produto}>
                        <h3>Óculos de sol</h3>
                        <Image src={Imagem2} alt="Óculos de sol"/>
                        <p>A partir de R$ 350,00</p>
                    </div>
                    <div className={estilos.card_produto}>
                        <h3>Lentes transition</h3>
                        <Image src={Imagem3} alt="Lentes transition"/>
                        <p>A partir de R$ 300,00</p>
                    </div>
                    <div className={estilos.card_produto}>
                        <h3>Óculos infantis</h3>
                        <Image src={Imagem4} alt="Óculos infantis"/>
                        <p>A partir de R$ 150,00</p>
                    </div>
                </div>

                <div className={estilos.produtos_inclui}>
                    <p className={estilos.texto_inclui}>Todos os nosso produtos incluem:</p>
                    <ul className={estilos.lista_inclui}>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </section>
        </>
    )
}