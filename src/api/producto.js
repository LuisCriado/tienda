import {ENV} from "@/utils"

export class Producto {

    async getLastPublished(){
        try {
            const sort = "sort=publishedAt:desc";
            const pagination = "pagination[limit]=1";
            const populate ="populate=*";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTO}?${sort}&${pagination}&${populate}`

            const response = await fetch(url)
            const result = await response.json()

            if(response.status !==200) throw result;

            return result;


        } catch (error) {
            throw error
        }

    }
    async getLatestPublished({limit , platformId= null}) {
        try {
            const filterPlatform =
             platformId && `filters[platform][id][$eq]=${platformId}`
            const paginationLimit= `pagination[limit]=${limit}`;
            const sort = `sort[0]=publishedAt:desc`
            const populate= `populate=*`

            const urlParams =`${sort}&${paginationLimit}&${filterPlatform}&${populate}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTO}?${urlParams}`


            const respone = await fetch(url);
            const result = await respone.json();

            if(respone.status !==200) throw result;

            return result;

        } catch (error) {
            throw error
        }
    }

    async getProductosByPlatformSlug(slug, page) {
        try {
            const filters = `filters[platform][slug][$eq]=${slug}`;
            const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
            const populate = `populate=*`;
            const urlParams = `${filters}&${pagination}&${populate}`;
    
            // Cambia localhost por 127.0.0.1 en la URL de la API
            const url = `${ENV.API_URL.replace('localhost', '127.0.0.1')}/${ENV.ENDPOINTS.PRODUCTO}?${urlParams}`;
    
            const response = await fetch(url);
            const result = await response.json();
    
            if (response.status !== 200) throw result;
    
            return result;
        } catch (error) {
            throw error;
        }
    }

}