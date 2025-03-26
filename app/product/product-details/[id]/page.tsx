import React from "react";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id;
  return <div>Product Details ID: {id}</div>;
};

export default ProductDetailsPage;
