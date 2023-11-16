import Link from "next/link"
import {Container, Image, Button} from "semantic-ui-react"
import styles from "./Footer.module.scss"


export  function Footer() {
  return (

    <div className={styles.footer}>
       
    <Container>
        <div className={styles.columns}>
            <div>
                 <Link href="/">
                     <Image src="images/logo.png" size="medium" alt="NNinsumos"/>
                 
                 </Link>
            </div>

            <div>
                <ul>
                    <Link href="#"> terminos y condiciones </Link>
                    <Link href="#"> politicas de privacidad </Link>
                    <Link href="#"> contacto </Link>
                    <Link href="#"> fAQS </Link>
                </ul>

            </div>

            <div className={styles.social}>
                <Button as="a" href="#" circular color="facebook" icon="facebook"/>
                <Button as="a" href="#" circular color="twitter" icon="twitter"/>
                <Button as="a" href="#" circular color="linkedin" icon="linkedin"/>
                <Button as="a" href="#" circular color="youtube" icon="youtube"/>
                

              


            </div>
        </div>

        <div className={styles.copyright}>
            <span>Copyright NNinsumos 2021 - Todos los Derechos reservados - Designe Luis Criado</span>
        </div>
    </Container>
    
    
    </div>
  )
}
