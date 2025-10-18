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
                    { href: "/arvind-story", text: "The Arvind Story" },
                    { href: "/leadership", text: "Leadership" },
                ],
            },
            {
                title: "Our Businesses",
                links: [
                    { href: "/businesses/fabric-apparel", text: "Fabric & Apparel" },
                    { href: "/brands-retail", text: "Brands & Retail" },
                    { href: "/businesses/real-estate", text: "Real Estate" },
                    { href: "/businesses/engineering", text: "Engineering" },
                    { href: "/businesses/environmental-solution", text: "Environmental Solutions" },
                    { href: "/businesses/advanced-materials", text: "Advanced Materials" },
                    { href: "/businesses/telecom", text: "Telecom" },
                ],
            },
            {
                title: "Fashioning Possibilities",
                href: "/fashioning-possibilities",
            }
        ],
        [
            {
                title: "Investors",
                links: [
                    { href: "/investor-overview", text: "Overview" },
                    { href: "/stock-information", text: "Stock Information" },
                    { href: "/financial-reports", text: "Financial Reports" },
                    { href: "/shareholding-pattern", text: "Shareholding Pattern" },
                    { href: "/analyst-coverage", text: "Analyst Coverage" },
                    { href: "/shareholder-communication", text: "Shareholder Communication" },
                    { href: "/scheme-arrangement", text: "Scheme Of Arrangement" },
                    { href: "/corporate-governance", text: "Corporate Governance" },
                    { href: "/investor-support", text: "Investor Support" },
                ],
            },
            {
                title: "Media",
                links: [
                    { href: "/media-releases", text: "Media Releases" },
                    { href: "/media-contacts", text: "Media Contact" },
                    { href: "/resource-center", text: "Resource Center" },
                    { href: "/media-coverage", text: "Media Coverage" },
                ]
            }
        ],
        [
            {
                 title: "Sustainability",
                  links: [
                    { href: "/sustainability", text: "Overview" },
                    { href: "/environment", text: "Environment" },
                    { href: "/social", text: "Social" },
                    { href: "/governance", text: "Governance" },
                ],
            },
        ],
        [
             {
                title: "Careers",
                links: [
                    { href: "/careers", text: "Overview" },
                    { href: "/life-arvind", text: "Life at Arvind" },
                    { href: "/our-people", text: "Our People" },
                    { href: "https://careers.arvind.com/", text: "Current Openings" },
                ],
            },
            {
                title: "Contact Us",
                href: "/contact-us",
            },
        ],
    ];


  return (
    <footer className="font-sans">
      <section className="bg-[#9d2449] py-[75px]">
        <div className="container mx-auto">
          <Link href="/contact-us" className="block text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#9d2449] rounded-sm">
            <h1 className="font-serif text-white text-[42px] leading-tight font-normal">
              Contact Us
            </h1>
          </Link>
        </div>
      </section>

      <section className="bg-[#3d3d3d] text-white">
        <div className="container mx-auto pt-20 pb-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-x-8 gap-y-12">
            <div className="w-full lg:w-[30%] xl:w-1/4 flex-shrink-0">
              <div className="mb-8">
                <Link href="/">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/23396db3-c63c-4dec-82e2-896966beb06a-arvind-com/assets/svgs/arvlogo-5.svg"
                    alt="Arvind Logo"
                    width={140}
                    height={40}
                    className="h-auto"
                  />
                </Link>
                <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-300">
                  Fashioning Possibilities
                </p>
              </div>

              <div className="mb-8 text-[15px] leading-relaxed text-gray-300">
                <h3 className="font-semibold text-white mb-2 text-sm uppercase">India Headquarters</h3>
                <p>Ahmedabad</p>
                <p>Naroda Road, Near Chamunda Bridge,</p>
                <p>Ahmedabad - 382 345, Gujarat, India.</p>
                <p className="mt-4">
                  Tel: <a href="tel:+917968268000" className="hover:text-white transition-colors">+91-79-68268000</a>
                </p>
              </div>

              <a href="#" className="inline-flex items-center gap-3 border border-gray-500 text-white px-6 py-3 text-xs tracking-[2px] uppercase font-semibold hover:bg-white hover:text-[#3d3d3d] transition-colors">
                Other Offices
                <ArrowRight size={16} />
              </a>

              <div className="mt-12">
                <h3 className="font-semibold text-white mb-4 text-sm uppercase">Follow Us</h3>
                <div className="flex space-x-5">
                  {socialLinks.map((social) => (
                    <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                      <Image src={social.icon} alt={social.alt} width={15} height={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={`w-full lg:w-[70%] xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
              {navColumns.map((column, index) => (
                <FooterNavColumn key={index} sections={column} />
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-y-4">
            <p>Copyright © 2017 Arvind Limited</p>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default ContactFooterSection;