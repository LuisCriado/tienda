import {Button} from "semantic-ui-react"
import styles from "./AddAddress.module.scss"
import {BasicModal} from "@/componentes/Shared"
import {AddressForm} from "../AddressForm"
import { useState } from "react"


export  function AddAddress(props) {

  const {onReload} = props


  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) =>!prevState)



  return (
    <>
    <Button primary className={styles.ddBtn} onClick={onOpenClose} > crear</Button>

    <BasicModal show={show} onClose={onOpenClose} title="Nueva Direccion" >
     <AddressForm onClose={onOpenClose}  onReload={onReload}/>
    </BasicModal>
    </>
  )
}
