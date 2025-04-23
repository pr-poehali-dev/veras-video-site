import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Главная", target: "hero" },
    { name: "Обо мне", target: "about" },
    { name: "Услуги", target: "services" },
    { name: "Портфолио", target: "portfolio" },
    { name: "Контакты", target: "contact" },
  ];

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary font-heading text-2xl font-bold">Вера</span>
          <span className="text-foreground font-heading text-2xl ml-1">Видео</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="text-foreground/80 hover:text-primary cursor-pointer transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        <Button 
          variant="default" 
          size="sm" 
          className="hidden md:block"
          onClick={() => scrollToSection("contact")}
        >
          Связаться
        </Button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm py-4 px-4 border-b border-border/50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-foreground/80 hover:text-primary py-2 transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="mt-2 w-full"
              onClick={() => scrollToSection("contact")}
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
