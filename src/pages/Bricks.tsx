import ProductCard from "@/components/ProductCard";
import clayBricksImage from "@/assets/clay-bricks.jpg";

const Bricks = () => {
  const brickTypes = [
    {
      image: clayBricksImage,
      title: "Sun-dried Bricks",
      description: "Traditional bricks dried naturally in the sun. Eco-friendly option suitable for non-load bearing walls and temporary structures."
    },
    {
      image: clayBricksImage,
      title: "Burnt Clay Bricks",
      description: "High-quality fired clay bricks with excellent durability and strength. Perfect for load-bearing walls and structural applications."
    },
    {
      image: clayBricksImage,
      title: "Fly Ash Bricks",
      description: "Environmentally friendly bricks made from fly ash. Lightweight with good thermal insulation properties."
    },
    {
      image: clayBricksImage,
      title: "Concrete Bricks",
      description: "Strong and durable concrete bricks ideal for heavy-duty construction. Excellent compressive strength and weather resistance."
    },
    {
      image: clayBricksImage,
      title: "Engineering Bricks",
      description: "High-performance bricks with superior strength and low water absorption. Suitable for engineering and industrial applications."
    },
    {
      image: clayBricksImage,
      title: "Calcium Silicate Bricks",
      description: "Sand-lime bricks with uniform shape and size. Excellent fire resistance and sound insulation properties."
    },
    {
      image: clayBricksImage,
      title: "Eco Bricks",
      description: "Sustainable bricks made from recycled materials. Environmentally conscious choice for green building projects."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Types of Bricks
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of bricks for all construction needs. From traditional clay bricks 
            to modern eco-friendly options, we supply quality bricks for every project requirement.
          </p>
        </div>

        {/* Bricks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {brickTypes.map((brick, index) => (
            <ProductCard
              key={index}
              image={brick.image}
              title={brick.title}
              description={brick.description}
            />
          ))}
        </div>

        {/* Brick Comparison */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Brick Selection Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Brick Type</th>
                  <th className="text-left p-4 font-semibold text-foreground">Strength</th>
                  <th className="text-left p-4 font-semibold text-foreground">Water Resistance</th>
                  <th className="text-left p-4 font-semibold text-foreground">Best Use</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-4">Burnt Clay Bricks</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">Load-bearing walls</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Concrete Bricks</td>
                  <td className="p-4">Very High</td>
                  <td className="p-4">Excellent</td>
                  <td className="p-4">Heavy construction</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Fly Ash Bricks</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">Residential buildings</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Engineering Bricks</td>
                  <td className="p-4">Very High</td>
                  <td className="p-4">Excellent</td>
                  <td className="p-4">Industrial projects</td>
                </tr>
                <tr>
                  <td className="p-4">Eco Bricks</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Good</td>
                  <td className="p-4">Green buildings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Quality Assurance</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Uniform size and shape</li>
              <li>• Consistent quality across batches</li>
              <li>• Tested for compressive strength</li>
              <li>• Quality certified materials</li>
              <li>• Regular quality inspections</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Bulk quantity supply</li>
              <li>• Direct site delivery</li>
              <li>• Technical consultation</li>
              <li>• Competitive pricing</li>
              <li>• After-sales support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bricks;