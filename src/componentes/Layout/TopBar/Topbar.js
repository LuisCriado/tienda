import {Image} from "semantic-ui-react"
import Link from "next/link";
import {Account} from "../Account"
import {Menu} from "../Menu"
import styles from "./Topbar.module.scss";

export  function Topbar(porps) {

    const { isOpenSearch} = porps;
  return (
    <div className={styles.topBar}>
        <div className={styles.left}>
            <Link href="/" >
                <Image src="/images/logo.png" alt="MNinsumos" />
            
            </Link>
            
        </div>
        <div className={styles.center}>
            <Menu isOpenSearch = {isOpenSearch}/> 

        </div>


        <div className={styles.right}>
            <Account/> 

        </div>
    </div>
  )
}
