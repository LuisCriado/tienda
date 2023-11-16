import Link from "next/link";
import {JoinLayout} from "@/layouts"
import {LoginForm} from "@/componentes/Auth";
import styles from "./sign-in.module.scss";

export default function SingInPage() {
  return (
    <>
    <JoinLayout>
    <div className={styles.signIn}>
        <h3>Iniciar sesion</h3>

       <LoginForm/>

        <div className={styles.actions} >
          <Link href="/join/sign-up" >No tienes Cuenta?</Link>
        </div>
     </div>
     </JoinLayout>
    </>
  )
}