import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMartiniGlassCitrus,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="glass border-t border-white/60 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faMartiniGlassCitrus} className="size-6 text-primary" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium mobile bartending for weddings, corporate events, and private parties. Craft cocktails, professional service, unforgettable experiences.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="size-5" />
              </a>
              <a href={siteConfig.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="size-5" />
              </a>
              <a href={siteConfig.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/wedding-bartending" className="hover:text-primary transition-colors">Wedding Bartending</Link></li>
              <li><Link href="/services/corporate-events" className="hover:text-primary transition-colors">Corporate Events</Link></li>
              <li><Link href="/services/private-parties" className="hover:text-primary transition-colors">Private Parties</Link></li>
              <li><Link href="/services/mixology-classes" className="hover:text-primary transition-colors">Mixology Classes</Link></li>
              <li><Link href="/services/cocktail-catering" className="hover:text-primary transition-colors">Cocktail Catering</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-4 mt-0.5 text-primary" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 mt-0.5 text-primary" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-4 mt-0.5 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faClock} className="size-4 mt-0.5 text-primary" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
