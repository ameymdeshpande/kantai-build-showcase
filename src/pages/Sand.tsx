import ProductCard from "@/components/ProductCard";
import riverSandImage from "@/assets/river-sand.jpg";

const Sand = () => {
  const sandTypes = [
    {
      image: riverSandImage,
      title: "River Sand",
      description: "Natural fine-grained sand from riverbeds. Excellent for concrete work, plastering, and masonry. Clean and well-graded particles."
    },
    {
      image: riverSandImage,
      title: "Concrete Sand",
      description: "Specially graded sand for concrete applications. Optimal particle size distribution for strong and durable concrete structures."
    },
    {
      image: riverSandImage,
      title: "Pit Sand (Coarse Sand)",
      description: "Coarse-grained sand extracted from pits. Ideal for concrete work where high strength and good drainage are required."
    },
    {
      image: riverSandImage,
      title: "Manufactured Sand (M-Sand)",
      description: "Artificially manufactured sand from crushed rock. Consistent quality and gradation, perfect alternative to natural sand."
    },
    {
      image: riverSandImage,
      title: "Sea Sand",
      description: "Marine sand with rounded particles. Requires washing to remove salt content before use in construction applications."
    },
    {
      image: riverSandImage,
      title: "Desert Sand",
      description: "Fine sand from desert regions. Suitable for landscaping and non-structural applications after proper treatment."
    },
    {
      image: riverSandImage,
      title: "Quarry Dust",
      description: "Fine particles from stone crushing operations. Excellent for concrete work and as a partial replacement for natural sand."
    },
    {
      image: riverSandImage,
      title: "Crushed Stone Sand",
      description: "Angular sand particles from crushed stone. Provides excellent binding properties for high-strength concrete applications."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Types of Sand
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete range of construction sand types for all your building needs. From natural river sand 
            to manufactured alternatives, we supply quality sand for concrete, masonry, and finishing work.
          </p>
        </div>

        {/* Sand Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sandTypes.map((sand, index) => (
            <ProductCard
              key={index}
              image={sand.image}
              title={sand.title}
              description={sand.description}
            />
          ))}
        </div>

        {/* Sand Applications */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Sand Applications & Uses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Concrete Work</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Foundation concrete</li>
                <li>• RCC structures</li>
                <li>• Precast elements</li>
                <li>• Road construction</li>
                <li>• Paving blocks</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Masonry & Plastering</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Brick/block laying</li>
                <li>• Wall plastering</li>
                <li>• Cement mortar</li>
                <li>• Pointing work</li>
                <li>• Finishing work</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Specialized Uses</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Landscaping</li>
                <li>• Drainage systems</li>
                <li>• Sports surfaces</li>
                <li>• Filtration media</li>
                <li>• Decorative work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mt-12 bg-gradient-to-r from-construction-yellow/20 to-construction-orange/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quality Standards & Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quality Parameters</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Particle size distribution</li>
                <li>• Moisture content testing</li>
                <li>• Silt content analysis</li>
                <li>• Organic impurity check</li>
                <li>• Bulk density measurement</li>
                <li>• Fineness modulus calculation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Quality Assurance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IS 383:2016 compliance</li>
                <li>• Regular laboratory testing</li>
                <li>• Washed and graded sand</li>
                <li>• Consistent quality supply</li>
                <li>• Quality certificates provided</li>
                <li>• Technical support available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sand Selection Guide */}
        <div className="mt-12 bg-card rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sand Selection Guide</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-muted/30 rounded">
              <div className="font-semibold text-foreground">For Concrete Work:</div>
              <div className="text-muted-foreground">River Sand, M-Sand, Crushed Stone Sand</div>
              <div className="text-sm text-muted-foreground">Choose based on strength requirements</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-muted/30 rounded">
              <div className="font-semibold text-foreground">For Plastering:</div>
              <div className="text-muted-foreground">River Sand, Fine Concrete Sand</div>
              <div className="text-sm text-muted-foreground">Fine particles for smooth finish</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-muted/30 rounded">
              <div className="font-semibold text-foreground">For Heavy Construction:</div>
              <div className="text-muted-foreground">Pit Sand, Crushed Stone Sand</div>
              <div className="text-sm text-muted-foreground">Coarse particles for high strength</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sand;