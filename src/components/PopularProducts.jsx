import ProductCard from "./ProductCard";

const PopularProducts =async () => {
 const res = await fetch('https://sun-cart-lac.vercel.app/data.json')
 const products = await res.json()
 const popularProducts = products.slice(0,3)
    return (
        <div className="my-15">
            <h2 className="text-center font-bold text-2xl mb-5">Popular Products</h2>
            <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    popularProducts.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;