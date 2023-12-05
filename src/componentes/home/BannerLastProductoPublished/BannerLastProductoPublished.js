import {useState ,useEffect} from 'react';
import {Container ,Image} from "semantic-ui-react"
import {DateTime} from "luxon"
import Link from "next/link";
import {Producto} from "@/api"
import {fn ,ENV} from "@/utils"
import { Label } from '@/componentes/Shared';
import styles from "./BannerLastProductoPublished.module.scss"


const productoCtrl = new Producto();

export  function BannerLastProductoPublished() {


    const [producto, setProducto] = useState(null)

    useEffect(() => {
        (async()=> {
              try {

              

            const response= await productoCtrl.getLastPublished();
            setProducto(response.data[0]);

        } catch (error) {
            console.error(error)
        } 
        })
     ()
      
    }, [])

    if(!producto) return null

    const relaseDate = new Date(producto.attributes.releaseDate).toISOString();
    const price = fn.calcDiscountedPrice(producto.attributes.price, producto.attributes.discount);

    const wallpaper=producto.attributes.wallpaper;
    const enlaceurlServer=`${ENV.SERVER_HOST}`


 
 
  return (
    <div className={styles.container} >
        <Image src={`${enlaceurlServer}${wallpaper.data.attributes.url}`} className={styles.wallpaper} alt="imagen" />
        <Link className={styles.infoContainer} href={producto.attributes.slug} > 
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(relaseDate).minus({days: 1}).toRelative()}
          </span>

          <h2>{producto.attributes.title}</h2>
          <p className={styles.price}>
            <Label.Discount>-{producto.attributes.discount}%</Label.Discount>
         
            <span className={styles.finalPrice}>
            ${price}
            </span>
          </p>
        </Container>
        </Link>
    </div>  
  )
}
