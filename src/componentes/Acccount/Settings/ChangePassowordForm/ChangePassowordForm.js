import {Form} from "semantic-ui-react"
import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues , validationSchema } from "./ChangePassowordForm.form";
import styles from './ChangePassowordForm.module.scss';


const userCtrl = new User();



export  function ChangePassowordForm() {



    const {user, logout} = useAuth();

    const  formik = useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange:false,
        onSubmit: async (formValue) => {

            try {
               await userCtrl.updateMe(user.id,{password:formValue.password});
               logout();
            } catch (error) {
                throw error;
            }
        
        
        }
    })
  
    return (

    




    <Form  onSubmit = {formik.handleSubmit} className={styles.form}>
        <label>Cambiar contraseña</label>
        <Form.Input type="password" name ="password" placeholder="Nueva Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        <Form.Input type="password" name ="repeatPassword" placeholder="Repetir Contraseña" value={formik.values.repeatPassword} onChange={formik.handleChange} error={formik.errors.repeatPassword}/>
        <Form.Button type="submit">Enviar</Form.Button>
        
    </Form>
  )
}
