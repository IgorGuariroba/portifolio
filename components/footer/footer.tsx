import Image from "next/legacy/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../logo/logo";

// const navigation = {
//     main: [
//         {
//             name: "home",
//             label: "Home",
//         },
//         {
//             name: "about",
//             label: "Sobre",
//         },
//         {
//             name: "experience",
//             label: "Experiência",
//         },
//         {
//             name: "project",
//             label: "Projetos",
//         },
//         {
//             name: "contact",
//             label: "Contatos",
//         },
//     ],
//     social: [
//         {
//             name: "facebook",
//             icon: (
//                 <FaFacebookF/>
//             ),
//             href: 'https://www.facebook.com/igorguarioba'
//         },
//         {
//             name: "twitter",
//             icon: (
//                 <FaTwitter/>
//             ),
//             href: 'https://twitter.com/igorguariroba'
//         },
//         {
//             name: "linkedin",
//             icon: (
//                 <FaLinkedinIn />
//             ),
//             href: 'https://www.linkedin.com/in/igor-ravel'
//         },
//         {
//             name: "instagram",
//             icon: (
//                 <FaInstagram />
//             ),
//             href: 'https://www.instagram.com/igor.guariroba'
//         },
//     ],
// }

// export default function Footer() {
//     const currentYear = new Date().getFullYear().toString();

//     return (
//         <footer className="bg-white">
//             <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
//                 <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
//                     {navigation.main.map((item) => (
//                           <div
//                               className="text-sm leading-6 text-gray-600 hover:text-gray-900 pb-6"
//                               key={item.name}
//                           >
//                           {item.label}
//                         </div>
//                     ))}
//                 </nav>
//                 <div className="mt-10 flex justify-center space-x-10">
//                     {navigation.social.map((item) => (
//                         <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
//                             <span className="sr-only">{item.name}</span>
//                             {item.icon}
//                         </a>
//                     ))}
//                 </div>
//                 <p className="mt-10 text-center text-xs leading-5 text-gray-500">
//                     {currentYear} Igor Guariroba, Inc. Todos os direitos reservados.
//                 </p>
//             </div>
//         </footer>
//     )
// }

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaTwitter />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: <FaGithub />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube />,
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex">
              <Logo />
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            {currentYear} Igor Guariroba, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
