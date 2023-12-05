import { useState,useEffect } from "react"
import { Producto } from "@/api"
import {GridProductos} from "@/componentes/Shared"


const productoCtrl = new Producto()


export  function LatestProducto(porps) {

    const {title, limit = 9, platformId= null } = porps

    const [productos, setProductos] = useState(null)
   


    useEffect(() => {
     (async() =>{
        try {
            const response = await productoCtrl.getLatestPublished({limit,platformId})

            
            setProductos(response.data)
        } catch (error) {
            console.error(error)
        }

     })()
    }, [])

    if(!productos)return null;
    

  return (
    <div>
         <h2> {title}</h2>
         <GridProductos productos={productos}  />
    </div>
  )
}
