"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: { name: string; url: string }[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: [
      { name: "Docs", url: "https://geoleaf.gitbook.io/geoleaf" },
      { name: "Prevail Swap", url: "https://prevailtoken.com/" },
      { name: "BridgIT", url: "https://www.bridgitwater.org" },
      { name: "Interlink", url: "https://www.interlinkalliance.net/" },
      { name: "MasterKey", url: "https://masterkey.finance" },
      { name: "Merchandise", url: "https://www.prevailshop.com/collections/geoleaf-token-merchandise" },
    ],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/Footer/telegram.png", href: "https://t.me/geoleaf" },
  { imgsrc: "/images/Footer/discord.png", href: "https://discord.com/invite/3pmzJyaA" },
  { imgsrc: "/images/Footer/twitter.svg", href: "https://x.com/GeoLeafToken" },
  { imgsrc: "/images/Footer/youtube.svg", href: "https://www.youtube.com/@GeoLeafToken" },
];

const footer = () => {
  return (
    <div className="relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <motion.div
            className="col-span-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="block h-12 w-20px mb-4"
              src={"/images/Logo/logo.png"}
              alt="Crypto-Logo"
            />
            <h3 className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16">
              GeoLeaf is a forward-thinking platform bridging the gap between
              digital assets and community engagement. From token trading to
              exclusive NFTs, we offer innovative ways to invest, collect, and
              grow within a vibrant ecosystem. Join us as we continue to expand
              and redefine the future of digital ownership. This investment carries 
              a high level of risk, and it is essential to understand that investors 
              may not be fully protected in the event of an adverse outcome.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={items.href}>
                    <img
                      src={items.imgsrc}
                      alt={items.imgsrc}
                      className="footer-icons"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-xl font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-5"
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-offwhite text-sm font-normal mb-6 space-links">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* COLUMN-4 */}
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-medium mb-9">Registered UK Business</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/numberbusiness.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              14772610
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/email.svg"}
                alt="email-icon"
                width={20}
                height={20}
              />
              info@geoleaf.io
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image
                src={"/images/Footer/address.svg"}
                alt="address-icon"
                width={20}
                height={20}
              />
              1a Bridge Hill, St. Columb, England, TR9 6BY
            </h4>
          </motion.div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <motion.div
        className="py-8 px-4 border-t border-t-lightblue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-offwhite">
          @2024 - All Rights Reserved by GeoLeaf
        </h3>
      </motion.div>
    </div>
  );
};

export default footer;
