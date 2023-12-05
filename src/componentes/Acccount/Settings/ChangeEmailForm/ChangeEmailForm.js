import { Form } from "semantic-ui-react"
import { useFormik } from "formik";
import {User} from "@/api"
import { initialValues ,validationSchema } from "./ChangeEmailForm.form";
import styles from "./ChangeEmailForm.module.scss"
import { useAuth } from "@/hooks";


const userCtrl =new User();

export  function ChangeEmailForm() {


   const {user,updateUser} = useAuth();

    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange:false,
        onSubmit: async (formValue) => {
            try {
                await userCtrl.updateMe(user.id, {email:formValue.email});
                updateUser("email", formValue.email);
                formik.handleReset();
                
                
            } catch (error) {
                console.error(error);
            }
        },
    }); 




  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
        <label>Cabiar correo electronico</label>

        <Form.Input name="email" placeholder="Ingrese su Nuevo correo electronico" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} />
        <Form.Input name="repeatEmail" placeholder="Reingrese su Nuevo correo electronico" value={formik.values.repeatEmail} onChange={formik.handleChange} error={formik.errors.repeatEmail} />

        <Form.Button type="submit" loading={formik.isSubmitting}>Cambiar correo electronico</Form.Button>

    </Form>
  )
}
