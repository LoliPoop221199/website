import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Download, Video, Shield, Home, ExternalLink, Users } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная", icon: Home },
    { path: "/videos", label: "Видео", icon: Video },
    { path: "/admin-list", label: "Администрация", icon: Shield },
    { path: "/downloads", label: "Загрузки", icon: Download },
    { path: "/partners", label: "Партнеры", icon: Users },
  ];

  const NavLink = ({ path, label, icon: Icon, mobile = false }) => (
    <Link
      to={path}
      onClick={() => mobile && setIsOpen(false)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg hover:shadow-cyan-500/20 ${
        location.pathname === path
          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
          : "text-slate-300 hover:text-white"
      } ${mobile ? "w-full justify-start" : ""}`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </Link>
  );

  return (
    <nav className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 shadow-xl shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-bold text-lg">FC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              FreeClients
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} {...item} />
            ))}
            <Button 
              asChild
              className="ml-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
            >
              <a href="https://discord.gg/freeclients" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Присоединиться к Discord
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-700">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-800 border-slate-700">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.path} {...item} mobile />
                ))}
                <Button 
                  asChild
                  className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0"
                >
                  <a href="https://discord.gg/freeclients" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Присоединиться к Discord
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
