import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";

const navigation = {
  english: [
    { name: "About", href: "/about-section" },
    { name: "Luxury Service", href: "/luxury-services" },
    { name: "Event", href: "/events" },
    { name: "Captured Moment", href: "/capture-moments" },
  ],
  arabic: [
    { name: "حول", href: "/about-section" },
    { name: "الخدمات الفاخرة", href: "/luxury-services" },
    { name: "الحدث", href: "/events" },
    { name: "اللحظات الملتقطة", href: "/capture-moments" },
  ],
};

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, language, toggleLanguage }) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="text-[#FFD700] text-2xl font-bold">ركن</span>
            <span className="text-white text-2xl font-bold"> الضيافة</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
        <button
  onClick={toggleLanguage}
  className="flex items-center gap-2 text-white text-lg border-2 border-yellow-500 bg-black px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition"
  aria-label="Toggle Language"
>
  <MdLanguage className="text-2xl" />
  {language === "english" ? "🇬🇧" : "🇸🇦"}
</button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 p-2.5 text-white"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation[language].map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-100">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact & Language Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
        <button onClick={toggleLanguage} className="flex items-center gap-2 text-white text-sm font-semibold border-transparent px-3 py-1 rounded-md hover:bg-yellow-500 hover:text-black transition">
  <MdLanguage />{language === "english" ? "English" : "العربية"}
</button>


          <a
            href="https://wa.me/7045992776?text=Hello%20I%20need%20more%20information"
            className="text-sm font-semibold text-white"
          >
            {language === "english" ? "Contact Us" : "اتصل بنا"} &rarr;
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-[#FFD700] text-2xl font-bold">ركن</span>
              <span className="text-white text-2xl font-bold"> الضيافة</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-white"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-6">
            <div className="space-y-2 py-6">
              {navigation[language].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <a
                href="https://wa.me/7045992776?text=Hello%20I%20need%20more%20information"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-100 hover:bg-gray-800"
              >
                {language === "english" ? "Contact Us" : "اتصل بنا"}
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
