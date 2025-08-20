import ProductCard from "@/components/ProductCard";
import steelBarsImage from "@/assets/steel-bars.jpg";

const Steel = () => {
  const steelProducts = [
    {
      image: steelBarsImage,
      title: "Icon Steel",
      description: "High-quality TMT bars with superior tensile strength and corrosion resistance. Perfect for reinforced concrete construction."
    },
    {
      image: steelBarsImage,
      title: "PMT Bars",
      description: "Premium Thermo Mechanically Treated bars offering excellent ductility and weldability for structural applications."
    },
    {
      image: steelBarsImage,
      title: "Binding Wires",
      description: "High-grade binding wires for securing reinforcement bars. Available in various gauges for different construction needs."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Steel Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium steel products including TMT bars, reinforcement steel, and binding wires. 
            Our steel products meet the highest quality standards for structural strength and durability.
          </p>
        </div>

        {/* Steel Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steelProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>

        {/* Steel Specifications */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Steel Product Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">TMT Bar Sizes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 8mm - Light construction work</li>
                <li>• 10mm - Slabs and beams</li>
                <li>• 12mm - Columns and footings</li>
                <li>• 16mm - Heavy structural work</li>
                <li>• 20mm - Industrial construction</li>
                <li>• 25mm - Large scale projects</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Quality Standards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IS 1786:2008 certified</li>
                <li>• High tensile strength</li>
                <li>• Superior bend and re-bend properties</li>
                <li>• Excellent weldability</li>
                <li>• Corrosion resistant</li>
                <li>• Earthquake resistant</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Applications</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Residential buildings</li>
                <li>• Commercial complexes</li>
                <li>• Industrial structures</li>
                <li>• Bridges and flyovers</li>
                <li>• Foundation work</li>
                <li>• Infrastructure projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Our Steel */}
        <div className="mt-12 bg-gradient-to-r from-steel-gray to-concrete-gray text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Steel Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Certified Quality</h3>
              <p className="text-gray-200">
                All our steel products are certified and tested for quality assurance, 
                meeting international standards for construction applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-200">
                We offer the most competitive prices in the market without 
                compromising on quality or service standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-200">
                Fast and reliable delivery service ensures your construction 
                schedule stays on track with timely material supply.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-200">
                Our technical experts provide guidance on steel selection 
                and usage for optimal construction results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steel;