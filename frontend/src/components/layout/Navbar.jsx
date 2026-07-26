import { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-teal-500 flex items-center justify-center shadow-md">
              <ShieldCheck className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Kavach AI
              </h1>

              <p className="text-xs text-slate-500">
                Intelligent Fraud Detection
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-teal-600 transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-6 space-y-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-700 font-medium"
              >
                {item.name}
              </a>
            ))}

            <button className="w-full mt-2 bg-teal-500 text-white py-3 rounded-xl font-semibold">
              Try Prediction
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;