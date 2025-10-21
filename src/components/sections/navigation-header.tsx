"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "The Arvind Story", href: "/arvind-story" },
      { label: "Leadership", href: "/leadership" },
    ]
  },
  {
    label: "Fashioning Possibilities",
    href: "/fashioning-possibilities"
  },
  {
    label: "Our Businesses",
    href: "/businesses",
    children: [
      { label: "Fabrix and Apparel", href: "/businesses/fabric-apparel" },
      { label: "Brands and Retail", href: "/brands-retail" },
      { label: "Real Estate", href: "/businesses/real-estate" },
      { label: "Engineering", href: "/businesses/engineering" },
      { label: "Environmental Solutions", href: "/businesses/environmental-solution" },
      { label: "Advanced Materials", href: "/businesses/advanced-materials" },
      { label: "Telecom", href: "/businesses/telecom" },
      { label: "Garmenting", href: "/businesses/garmenting" },
    ]
  },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Overview", href: "/investor-overview" },
      { label: "Stock Information", href: "/stock-information" },
      { label: "Financial Reports", href: "/financial-reports" },
      { label: "Shareholding Pattern", href: "/shareholding-pattern" },
      { label: "Analyst Coverage", href: "/analyst-coverage" },
      { label: "Shareholder Communication", href: "/shareholder-communication" },
      { label: "Scheme of Arrangement", href: "/scheme-arrangement" },
      { label: "Corporate Governance", href: "/corporate-governance" },
      { label: "Investor Support", href: "/investor-support" },
    ]
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Overview", href: "/sustainability" },
      { label: "Environment", href: "/environment" },
      { label: "Social", href: "/social" },
      { label: "Governance", href: "/governance" },
    ]
  },
  {
    label: "CSR",
    href: "/csr",
    children: [
      { label: "Overview", href: "/csr-overview" },
      { label: "Empowering Tribal Women", href: "/empowering-tribal-women" },
      { label: "Slum Rehabilitation", href: "/slum-rehabilitation" },
      { label: "Health", href: "/health" },
      { label: "Education", href: "/education" },
    ]
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Media Releases", href: "/media-releases" },
      { label: "Media Contact", href: "/media-contacts" },
      { label: "Resource Center", href: "/resource-center" },
      { label: "Media Coverage", href: "/media-coverage" },
    ]
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Overview", href: "/careers" },
      { label: "Life At Arvind", href: "/life-arvind" },
      { label: "Our People", href: "/our-people" },
      { label: "Current Openings", href: "https://careers.arvind.com/" },
    ]
  },
  {
    label: "Contact Us",
    href: "/contact-us"
  }
];

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* GTM iframe fallback */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WJL2CJV" 
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <header className="bg-white relative z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/svgs/arvlogo-5.svg"
                alt="Arvind Ltd."
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-[70%]">
              <div className="flex items-center justify-between w-full">
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className="relative text-sm font-medium text-gray-700 hover:text-[#901B2E] transition-colors py-2 px-3"
                    >
                      {item.label}
                      {/* Underline hover effect */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#901B2E] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>

                  {/* Dropdown Menu */}
                  {item.children && hoveredItem === item.label && (
                    <div className="absolute top-full left-0 min-w-[250px] bg-white shadow-lg py-3 z-50">
                      <ul className="list-none">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              target={child.href.startsWith('http') ? '_blank' : undefined}
                              rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-[#901B2E] hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  </div>
                ))}
                
                {/* Search icon as part of navigation */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-700 hover:text-[#901B2E] transition-colors relative group"
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#901B2E] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#901B2E] transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white">
            <div className="container mx-auto py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-sm font-medium text-gray-700 hover:text-[#9d2449] transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.href.startsWith('http') ? '_blank' : undefined}
                            rel={child.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block text-sm text-gray-600 hover:text-[#901B2E] transition-colors py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
            <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl">
              <form onSubmit={handleSearchSubmit} className="p-6">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 text-lg outline-none"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-4 p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#901B2E] text-white text-sm font-medium rounded hover:bg-[#7d1829] transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavigationHeader;