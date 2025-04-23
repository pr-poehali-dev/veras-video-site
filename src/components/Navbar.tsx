import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
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
            <ScrollLink
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-foreground/80 hover:text-primary cursor-pointer transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        <Button variant="default" size="sm" className="hidden md:block">
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
              <ScrollLink
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}
            <Button variant="default" size="sm" className="mt-2 w-full">
              Связаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
