import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";

const Home = () => {
  const features = [
    {
      icon: <Building2 className="h-12 w-12 text-construction-orange" />,
      title: "Quality Materials",
      description: "Premium grade building materials from trusted manufacturers"
    },
    {
      icon: <Shield className="h-12 w-12 text-construction-orange" />,
      title: "Trusted Supplier",
      description: "Years of experience serving construction professionals"
    },
    {
      icon: <Truck className="h-12 w-12 text-construction-orange" />,
      title: "Fast Delivery",
      description: "Prompt delivery to your construction site"
    },
    {
      icon: <Award className="h-12 w-12 text-construction-orange" />,
      title: "Best Prices",
      description: "Competitive pricing for all your building material needs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Construction materials and building site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-charcoal/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kantai Building Material Suppliers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your trusted partner for quality building materials - Cement, Steel, Bricks, and Sand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cement">
              <Button size="lg" className="bg-construction-orange hover:bg-construction-orange/90 text-white px-8 py-3">
                View Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-charcoal px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Kantai Building Material Suppliers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a reliable supplier of quality building materials, serving construction 
              professionals and homeowners with premium cement, steel, bricks, and sand. 
              Our commitment to excellence ensures your projects are built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive range of building materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/cement" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-construction-orange to-construction-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-construction-orange transition-colors">
                    Cement Products
                  </h3>
                  <p className="text-muted-foreground">
                    Premium cement from top brands
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/steel" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-gray to-concrete-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-construction-orange transition-colors">
                    Steel Products
                  </h3>
                  <p className="text-muted-foreground">
                    High-quality steel and TMT bars
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/bricks" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-construction-orange transition-colors">
                    Types of Bricks
                  </h3>
                  <p className="text-muted-foreground">
                    Various brick types for construction
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/sand" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-construction-orange transition-colors">
                    Types of Sand
                  </h3>
                  <p className="text-muted-foreground">
                    Different sand types for all needs
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-muted-foreground">
              Find us at our convenient location for all your building material needs
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
            <div className="aspect-video bg-concrete-gray flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Building2 className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Google Maps Integration</p>
                <p className="text-sm">123 Industrial Area, Construction Zone, Building City - 560001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;