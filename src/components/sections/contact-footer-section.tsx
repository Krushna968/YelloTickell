import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NavLink {
  href: string;
  text: string;
}

interface NavSection {
  title: string;
  href?: string;
  links?: NavLink[];
}

const socialLinks = [
  { href: "https://www.facebook.com/arvindlimited/", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/icons/icon-facebook-1.png?", alt: "Facebook" },
  { href: "https://twitter.com/arvindlimited", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/icons/icon-x-2.png?", alt: "X" },
  { href: "https://www.instagram.com/arvindlimited/", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/icons/icon-instagram-3.png?", alt: "Instagram" },
  { href: "https://www.linkedin.com/company/arvindlimited", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/icons/icon-linkedin-4.png?", alt: "LinkedIn" },
  { href: "https://www.youtube.com/user/TheArvindLimited", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/icons/icon-youtube-5.png?", alt: "YouTube" },
];

const renderLink = (link: NavLink, className: string) => {
  if (link.href.startsWith('http')) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.text}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.text}
    </Link>
  );
};

const FooterNavColumn: React.FC<{ sections: NavSection[] }> = ({ sections }) => (
  <div>
    {sections.map((section) => (
      <div key={section.title} className="mb-8 last:mb-0">
        {section.href ? renderLink({ href: section.href, text: section.title }, "font-semibold uppercase text-sm mb-4 text-white hover:text-gray-300 transition-colors block") : (
          <h3 className="font-semibold uppercase text-sm mb-4 text-white">
            {section.title}
          </h3>
        )}
        {section.links && (
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.text}>
                {renderLink(link, "text-gray-300 hover:text-white transition-colors text-[15px]")}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const ContactFooterSection: React.FC = () => {
    const navColumns: NavSection[][] = [
        [
            {
                title: "Who We Are",
                links: [
                    { href: "/about-us", text: "About Us" },
                    { href: "/leadership", text: "Leadership" },
                ],
            },
            {
                title: "Our Businesses",
                links: [
                    { href: "/businesses/fabric-apparel", text: "Fabric & Apparel" },
                ],
            },
            {
                title: "Fashioning Possibilities",
                href: "/fashioning-possibilities",
            }
        ],
        [
            {
                title: "Careers",
                href: "/careers",
            },
            {
                title: "Contact Us",
                href: "/contact-us",
            },
        ],
    ];


  return (
    <footer className="font-sans">
      <section className="bg-primary py-[75px]">
        <div className="container mx-auto">
          <Link href="/contact-us" className="block text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#9d2449] rounded-sm">
            <h1 className="font-serif text-white text-[42px] leading-tight font-normal">
              Contact Us
            </h1>
          </Link>
        </div>
      </section>

      <section className="bg-secondary text-foreground">
        <div className="container mx-auto pt-8 pb-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-x-4 gap-y-6">
            <div className="w-full lg:w-[28%] xl:w-1/4 flex-shrink-0">
              <div className="mb-4">
                <Link href="/">
                  <Image
                    src="/images/landing_logo.png"
alt="YelloTickell Logo"
                    width={210}
                    height={60}
className="h-auto -ml-3 md:-ml-4"
                  />
                </Link>
              </div>

              <div className="mb-4 text-[15px] leading-relaxed text-muted-foreground">
                <h3 className="font-semibold text-foreground mb-2 text-sm uppercase">India Headquarters</h3>
                <p>Ahmedabad</p>
                <p>Naroda Road, Near Chamunda Bridge,</p>
                <p>Ahmedabad - 382 345, Gujarat, India.</p>
                <p className="mt-3">
                  Tel: <a href="tel:+917968268000" className="hover:text-foreground transition-colors">+91-79-68268000</a>
                </p>
              </div>

              <a href="#" className="inline-flex items-center gap-3 border border-gray-400 text-foreground px-5 py-2.5 text-xs tracking-[2px] uppercase font-semibold hover:bg-foreground hover:text-white transition-colors">
                Other Offices
                <ArrowRight size={16} />
              </a>

              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.alt}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center"
                      aria-label={social.alt}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary transition-colors duration-200 group-hover:bg-[#111111] flex items-center justify-center">
                        <span
                          className="block w-4 h-4 bg-[#111111] transition-colors duration-200 group-hover:bg-primary"
                          style={{
                            maskImage: `url(${social.icon})`,
                            WebkitMaskImage: `url(${social.icon})`,
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                          } as React.CSSProperties}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Flattened sections into tighter tiles */}
            <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...navColumns[0], ...navColumns[1]].map((section) => (
                <div key={section.title}>
                  {section.href ? (
                    <Link href={section.href} className="font-semibold uppercase text-sm mb-2 text-foreground hover:opacity-80 transition-colors block">
                      {section.title}
                    </Link>
                  ) : (
                    <h3 className="font-semibold uppercase text-sm mb-2 text-foreground">{section.title}</h3>
                  )}
                  {section.links && (
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.text}>
                          {renderLink(link, "text-muted-foreground hover:text-foreground transition-colors text-[15px]")}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-y-3">
Copyright © 2025 YelloTickell Pvt Ltd
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default ContactFooterSection;