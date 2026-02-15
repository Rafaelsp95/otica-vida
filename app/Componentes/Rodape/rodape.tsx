import Link from "next/link";
import estilos from './rodape.module.css'
import Image from "next/image";
import github_img from '@/public/github_PNG40.png';
import linkedin_img from '@/public/linkedin-logo.png';

export default function Rodape() {
    return (
        <>
            <footer className={estilos.rodape}>
                <div className={estilos.containerRodape}>
                    <div className={estilos.texto}>
                        <p>Desenvolvido por <span>Rafael Borba</span></p>
                    </div>
                    <div className={estilos.redes_sociais_icones}>
                        <Link href='https://github.com/Rafaelsp95' target='_blank'>
                            <Image src={github_img} alt="GitHub" title="Github"/>
                        </Link>
                        
                        <Link href='https://www.linkedin.com/in/rrcb-rafaelborba/' target='_blank'>
                            <Image src={linkedin_img} alt='Linkedin' title="Linkedin"/>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}