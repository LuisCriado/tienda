import {Container} from "semantic-ui-react"
import { size } from "lodash"
import { BasicLayout } from "@/layouts"
import { Separator,GridProductos,NoResult,Pagination } from "@/componentes/Shared"

export default function PlatformPage(props) {


  const {productos, platform ,pagination} = props;

  const hasProducts =size(productos) > 0;



    
  return (


    <>
    <BasicLayout relative> 
      <Container>
        <Separator height={50}  />
        <h2> {platform.attributes.title} </h2>


        {hasProducts ? (
          <>
          <GridProductos productos={productos}/>
          <Separator height={30} />
          <Pagination currentPage={pagination.page} totalPages={pagination.pageCount}/>
          
          </>
        ):(<NoResult text={`La Categoria ${platform.attributes.title} Aun No Tiene Productos`}/>
        )}

        <Separator  height={100}  />
      </Container>
    </BasicLayout>
        
    </>
  )
}
