import ProductCard from "@/components/ProductCard";
import ambujaImage from "@/assets/ambuja-cement.jpg";
import ultratechImage from "@/assets/ultratech-cement.jpg";

const Cement = () => {
  const cementProducts = [
    {
      image: ambujaImage,
      title: "Ambuja Cement",
      description: "Premium quality cement with superior strength and durability. Ideal for all construction needs including residential and commercial projects."
    },
    {
      image: ultratechImage,
      title: "UltraTech Cement",
      description: "India's largest cement manufacturer offering high-grade cement with excellent binding properties and consistent quality."
    },
    {
      image: ambujaImage,
      title: "Birla Shakti Cement",
      description: "High-performance cement designed for superior construction quality. Perfect for foundations, columns, and structural elements."
    },
    {
      image: ultratechImage,
      title: "Birla Super Cement",
      description: "Premium cement brand known for its strength and reliability. Suitable for all types of construction applications."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cement Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We supply premium quality cement from India's leading manufacturers. 
            Our cement products ensure strong, durable construction for all your building needs.
          </p>
        </div>

        {/* Cement Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cementProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Why Choose Our Cement Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                All our cement products are sourced directly from authorized dealers 
                and undergo strict quality checks to ensure consistency and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                We offer the best market prices for premium cement brands, ensuring 
                you get excellent value for your construction investment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Our efficient logistics ensure that your cement orders are delivered 
                on time to keep your construction projects on schedule.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our knowledgeable team provides expert advice on cement selection 
                based on your specific construction requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cement;