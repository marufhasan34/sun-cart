import ProductCard from "@/components/ProductCard";

const ProductsPage =async () => {
    const res = await fetch('https://sun-cart-lac.vercel.app/data.json')
    const products = await res.json()
    return (
        <div>
            <h2 className="text-center font-bold text-2xl mb-5">All Products</h2>
           <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <ProductCard product={product} key={product.id} />)
            }
           </div>
        </div>
    );
};

export default ProductsPage;