import {Tab} from "semantic-ui-react"
import { useRouter } from "next/router";
import {BasicLayout} from "@/layouts";
import { useAuth } from "@/hooks"; 
import {Info , Settings} from "@/componentes/Acccount";

import styles from "./account.module.scss";

export default function AccountPage() {

  const { user,logout } = useAuth(); 
  const router = useRouter();



  if(!user){
    router.push('/')
    return null
  }



  const panes = [
    {
      key: 'ListaPedidos',
      menuItem: 'Mis Pedidos',
      render : () => (
        <Tab.Pane attached={false} >
          <p> Mis Pedidos ...</p>
        </Tab.Pane>
      )
    },
    {
      key: 'ListaDeseos',
      menuItem: 'Lista de deseos',
      render : () => (
        <Tab.Pane attached={false} >
          <p> Mis Lista de Deseos ...</p>
        </Tab.Pane>
      )
    },
    {
      key: "Direciones",
      menuItem: 'Direcciones',
      render : () => (
        <Tab.Pane attached={false} >
          <p> Mis direcciones ...</p>
        </Tab.Pane>
      )
    },
    {
      key: 'Settings',
      menuItem: {icon:"settings",content:"Ajustes"},
      render : () => (
        <Tab.Pane attached={false} >
          <Settings.ChangeNameForm/>
        </Tab.Pane>
      )
    },
    {
      key: 'Logout',
      menuItem: {
        icon :"log out",
        content:"",
        onClick:logout,

      }
    }
  ]
  return (
    <>
    <BasicLayout isContainer relative >
        <Info/>
        <Tab menu={{secondary: true , pointing: true}}  panes={panes} className={styles.tabs} />
    </BasicLayout>
    </>
  )
}
