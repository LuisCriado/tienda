import { Container } from "semantic-ui-react";
import classNames from "classnames";
import {Topbar,Footer} from "@/componentes/Layout"
import styles from "./BasicLayout.module.scss";

export  function BasicLayout(props) {

    const {children, isOpenSearch = false , isContainer= false, relative = false} = props
  return (
    <>

        <Topbar isOpenSearch= {isOpenSearch} />

    <Container fluid>
        <div className={classNames({[styles.relative]:relative})}>
            {isContainer ? <Container> {children}</Container> : children}
        </div>
    
     
     </Container>


     <Footer/>



    </>
    
  )
}
