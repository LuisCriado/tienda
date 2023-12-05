import Link from "next/link"
import { map} from "lodash";
import { fn, ENV } from "@/utils";
import { Label } from "@/componentes/Shared";
import styles from './GridProductos.module.scss'



export  function GridProductos(porps) {

    const {productos} = porps;
   
    const enlaceurlServer=`${ENV.SERVER_HOST}`
   

  return (
    <div className={styles.gridProductos}>
        {map(productos,(producto)=>(

            <Link key={producto.id} href={`/${producto.attributes.slug}`} className={styles.gidits}>
                <div>
                    <img src={`${enlaceurlServer}${producto.attributes.cover.data.attributes.url}`} alt="imagen" />
                    {producto.attributes.discount > 0 && (
                        <Label.Discount className={styles.discount}>
                            {`-${producto.attributes.discount}%`}

                        </Label.Discount>
                    )}
                </div>

                <div>
                    <span className={styles.necesitoestilos}>
                        {producto.attributes.title}
                    </span>
                    <span className={styles.price}>
                        {fn.calcDiscountedPrice(producto.attributes.price , producto.attributes.discount)}$
                     </span>
                </div>
            </Link>
        ))}

        
    </div>
  )
}
