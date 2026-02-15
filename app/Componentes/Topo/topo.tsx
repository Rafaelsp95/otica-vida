import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/logo.png'
import estilos from './topo.module.css'

export default function Topo() {
    return (
        <>
            <header className={estilos.topo}>
                <div className={estilos.topo_inner}>
                    <Link href="/">
                        <Image className={estilos.img_logo} src={Logo} alt="Logo Ótica"/>
                    </Link>
                    <nav>
                        <ul className={estilos.lista_nav}>
                            <li><Link href="#produtos">Produtos</Link></li>
                            <li><Link href="#sobre">Sobre</Link></li>
                            <li><Link href="#contato">Contato</Link></li>
                        </ul>                
                    </nav>
                </div>
            </header>
        </>
    )
}