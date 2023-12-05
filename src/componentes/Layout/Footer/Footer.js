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
                     <Image src="/images/logo.png" size="medium" alt="NNinsumos"/>
                 
                 </Link>
            </div>

            <div>
                <ul>
                    <Link href="#"> Terminos y Condiciones </Link>
                    <Link href="#"> Politicas de Privacidad </Link>
                    <Link href="#"> Contacto: 113917-7650 /1131868538 </Link>
                    <Link href="#"> Direccion: : Carlos Antonio López 3672,  Devoto </Link>
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
