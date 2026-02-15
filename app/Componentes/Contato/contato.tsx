import estilos from './contato.module.css';
import Image from "next/image";
import local_img from '@/public/local.png';
import telefone_img from '@/public/telefone.png';
import email_img from '@/public/email.png';
import instagram_img from '@/public/ig.png';
import facebook_img from '@/public/fb.png';
import twitter_img from '@/public/tt.png';

export default function Contato () {
    return (
        <>
            <section id="contato" className={estilos.secao_contato}>
                <h2>Fale conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div className={estilos.container_contato}>
                    <div className={estilos.contato_item}>
                        <h3>Contato</h3>
                        <div className={estilos.item}>
                            <Image src={local_img} alt='Imagem local'/>
                            <span>Nova Iguaçu - RJ</span>
                        </div>
                        <div className={estilos.item}>
                            <Image src={telefone_img} alt='Imagem telefone'/>
                            <span>(21) 9999-9999</span>
                        </div>
                        <div className={estilos.item}>
                            <Image src={email_img} alt='Imagem email'/>
                            <span>contato@oticavida.com.br</span>
                        </div>
                    </div>
                    <div className={estilos.contato_item}>
                        <h3>Redes Sociais</h3>
                        <div className={estilos.item}>
                            <Image src={facebook_img} alt='Imagem facebook'/>
                            <span>/OticaVida</span>
                        </div>
                        <div className={estilos.item}>
                            <Image src={instagram_img} alt='Imagem instagram'/>
                            <span>@oticavidarj</span>
                        </div>
                        <div className={estilos.item}>
                            <Image src={twitter_img} alt='Imagem twitter'/>
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}