import {Platform,Producto} from "@/api"
export {default } from "./platform"

export async function getServerSideProps(context){

    const {query ,params} = context;
    const {page = 1} =query;
    const {platform} = params;

    

    const platformCrtl= new Platform();
    const responsePlatform = await platformCrtl.getBySlug(platform);
    

    const productoCtrl = new Producto();
    const  responseProductos = await productoCtrl.getProductosByPlatformSlug(platform,page);

    
    return {
        props: {
         platform:responsePlatform,
         productos:responseProductos.data,
         pagination:responseProductos.meta.pagination,
        }
    }
}