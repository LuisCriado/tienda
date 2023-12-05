import {Form} from "semantic-ui-react";
import {useRouter} from "next/router";
import {useFormik} from "formik";
import {Auth} from "@/api";
import {useAuth} from "@/hooks"
import {initialValues, validationSchema} from "./LoginForm.form";

const authCrtl = new Auth();


export  function LoginForm() {

    const router = useRouter();
    const {login} = useAuth();
  

  

    const formik = useFormik({
        initialValues : initialValues(),
        validationSchema : validationSchema(),
        validateOnChange: false,    
        onSubmit: async (formValue) => {
            try {
                const response = await authCrtl.login(formValue);
                login(response.jwt)
                
              
               
            } catch (error) {
                throw error;
                
            }
            
        },
    });




  return (
    <Form onSubmit={formik.handleSubmit}>

            <Form.Input name="identifier" type="text" placeholder="Correo Electronico o Nombre de Usuario" value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier} />
            <Form.Input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} />
            <Form.Button type="submit" fluid loading={formik.isSubmitting}>Entrar</Form.Button>
    
    </Form>
  )
}
