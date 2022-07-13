import Image from "next/image";

//Extract the info from props and pass it to the component

const Product = ({ product }) => {
  const { title, price, image } = product.attributes;
  return (
    <div>
      <div>
        <Image
          src={image.data.attributes.formats.medium.url}
          alt={title}
          height={200}
          width={200}
          layout="intrinsic"
        />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
