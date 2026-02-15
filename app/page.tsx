import Topo from "./Componentes/Topo/topo";
import Capa from "./Componentes/Capa/capa";
import Produtos from "./Componentes/Produtos/produtos";
import Sobre from "./Componentes/Sobre/sobre";
import Contato from "./Componentes/Contato/contato";
import Rodape from "./Componentes/Rodape/rodape";

export default function Home() {
  return (
    <>
      <Topo/>
      <Capa/>
      <Produtos/>
      <Sobre/>
      <Contato/>
      <Rodape/>
    </>
  );
}
