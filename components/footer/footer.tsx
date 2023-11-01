import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const navigation = {
    main: [
        {
            name: "home",
            label: "Home",
        },
        {
            name: "about",
            label: "Sobre",
        },
        {
            name: "experience",
            label: "Experiência",
        },
        {
            name: "project",
            label: "Projetos",
        },
        {
            name: "contact",
            label: "Contatos",
        },
    ],
    social: [
        {
            name: "facebook",
            icon: (
                <FaFacebookF/>
            ),
            href: 'https://www.facebook.com/igorguarioba'
        },
        {
            name: "twitter",
            icon: (
                <FaTwitter/>
            ),
            href: 'https://twitter.com/igorguariroba'
        },
        {
            name: "linkedin",
            icon: (
                <FaLinkedinIn />
            ),
            href: 'https://www.linkedin.com/in/igor-ravel'
        },
        {
            name: "instagram",
            icon: (
                <FaInstagram />
            ),
            href: 'https://www.instagram.com/igor.guariroba'
        },
    ],
}

export default function Footer() {
    const currentYear = new Date().getFullYear().toString();
    
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                          <div
                              className="text-sm leading-6 text-gray-600 hover:text-gray-900 pb-6"
                              key={item.name}
                          >
                          {item.label}
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            {item.icon}
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    {currentYear} Igor Guariroba, Inc. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}