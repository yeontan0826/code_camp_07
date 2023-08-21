export const priceComma = (price: number) => {
    // return price?.toLocaleString("ko-KR");
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
