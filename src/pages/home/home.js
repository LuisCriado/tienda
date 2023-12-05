import {Container} from "semantic-ui-react"
import {BasicLayout} from "@/layouts"

import {Home} from "@/componentes/home"
import {Separator , BarTrust, BannerAd} from "@/componentes/Shared"

const platformsId = {
  guantes:9,
  descartables:10,
  insumos:11,
  otros:12,
}

export default function HomePage() {
  return (

    <>
    <BasicLayout  >
        <Home.BannerLastProductoPublished/>
        <Separator height={100}/>
        <Container>
        <Home.LatestProducto title="Ultimos Lanzamientos"/>
        </Container>
        <Separator height={100}/>
        <BarTrust/>
        <Separator height={100}/>
        <Container>
          <Home.LatestProducto title="Productos Recomendados" limit={3} platformId={platformsId.guantes}/>
        </Container>
        <Separator height={100}/>
        <BannerAd title="Registrate y obten los mejores Precios" subtitle="Los mejores precios de todo el mercado" btnTitle="ingesa ahora"  btnLink ="/account" image="/images/img01.png"/>
        <Separator height={50}/>
        <Container>
          <Home.LatestProducto title="Otros" limit={3} platformId={platformsId.descartables}/>
        </Container>
        <Separator height={100}/>
        
    </BasicLayout>
    </>
  );
}
