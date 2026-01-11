import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import vexLogo from "@/assets/2.0.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/vex.agenciaa/", label: "Instagram" },
    { icon: Mail, href: "mailto:vexagenciamarketing@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+5511954233945", label: "Telefone" },
  ];

  const footerLinks = [
    {
      title: "Serviços",
      links: [
        { name: "Landing Pages", href: "#services" },
        { name: "Gestão de Tráfego", href: "#services" },
        { name: "Desenvolvimento SaaS", href: "#services" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#" },
        { name: "Contato", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={vexLogo} 
                alt="Vex Agência" 
                className="h-16 w-auto"
              />
              <span className="font-heading font-bold text-xl text-foreground">
                Vex Agência
              </span>
            </motion.a>
            
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed text-center md:text-left">
              Transformamos negócios através de estratégias digitais que 
              geram resultados mensuráveis e crescimento sustentável.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="text-center md:text-left">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vex Agência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
