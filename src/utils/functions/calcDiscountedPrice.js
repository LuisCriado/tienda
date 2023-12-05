export function calcDiscountedPrice(price ,discount) {
    if(!discount)return price;

   const discountAmount = (price * discount) / 100;

   const finalPice = price - discountAmount;

   return finalPice;



}