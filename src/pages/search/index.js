import { Producto } from "@/api";
export  { default} from "./search"


export async function getServerSideProps(context){

    const {query: {s},page =1} = context;




    const porductoCtrl = new Producto();
    const response = await porductoCtrl.searchProducto(s,page);



    return {
        props: {
            productos:response.data,
            pagination:response.meta.pagination,
            searchText:s,
        },
    };
}