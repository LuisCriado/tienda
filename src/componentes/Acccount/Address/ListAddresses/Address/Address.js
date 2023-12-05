import { useState } from "react"
import {Button , Icon } from "semantic-ui-react"
import {Address as AddressCtrl} from "@/api"
import {BasicModal,Confirm} from "@/componentes/Shared"
import { AddressForm} from "../../AddressForm"
import styles from "./Address.module.scss"


const addressCtrl = new AddressCtrl()


export  function Address(props) {
    const {addressId, address,onReload} = props
    const [showEdit, setShowEdit] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)


    const openCloseEdit = () => setShowEdit((prevState) => !prevState);

    const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

    const onDelete = async () => {        
        try {
             await addressCtrl.delete(addressId)
             onReload()

        } catch (error) {
            console.error(error)
        }
    }
    
  return (
    <>
        <div className={styles.address}>

            <div>
                <p className={styles.title}> {address.title} :</p>
                <p className={styles.addressInfo}> {address.name}, {address.address} , {address.state},{address.city}, {address.postal_code}</p>
            </div>

            <div className={styles.actions}>
                <Button primary icon onClick={openCloseEdit}>
                    <Icon name="pencil"/>
                </Button>
                <Button primary icon onClick={openCloseConfirm}>
                    <Icon name="delete"/>
                </Button>
            </div>

        </div>


        <Confirm open={showConfirm} onCancel={openCloseConfirm} onConfirm = {onDelete} content="Estas segurop de que quieres eliminar la Direccion "/>

        <BasicModal show={showEdit} onClose={openCloseEdit} title="Editar Direccion">

            <AddressForm onReload={onReload} onClose={openCloseEdit}  addressId={addressId} address={address}/>

        </BasicModal>
    </>
  )
}
