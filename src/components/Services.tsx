import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Layout, 
  TrendingUp, 
  Code2, 
  ArrowRight, 
  Check, 
  Zap,
  Target,
  Gauge,
  BarChart3,
  Settings,
  Shield,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "landing-pages",
      icon: Layout,
      title: "Landing Pages",
      subtitle: "Alta Conversão",
      tagline: "Páginas que vendem enquanto você dorme",
      description: "Criamos landing pages estratégicas com foco obsessivo em conversão. Design persuasivo, copy que conecta, e performance otimizada para transformar visitantes em clientes.",
      features: [
        { icon: Target, text: "UX focado em conversão" },
        { icon: Zap, text: "Carregamento ultra-rápido" },
        { icon: Gauge, text: "Otimização contínua A/B" },
      ],
      metrics: "+Vendas que Convertem",
      color: "from-primary to-blue-400",
      whatsappMessage: "Olá! Tenho interesse no serviço de Landing Pages de Alta Conversão. Gostaria de saber mais sobre!",
    },
    {
      id: "traffic",
      icon: TrendingUp,
      title: "Gestão de Tráfego",
      subtitle: "Performance & Escala",
      tagline: "Seu investimento trabalhando 24/7",
      description: "Gerenciamos suas campanhas no Meta Ads e Google Ads com estratégia data-driven. Otimização diária, relatórios claros, e escala previsível para seu negócio.",
      features: [
        { icon: BarChart3, text: "Análise de dados em tempo real" },
        { icon: Settings, text: "Otimização contínua de campanhas" },
        { icon: TrendingUp, text: "Escalabilidade estruturada" },
      ],
      metrics: "+Leads todos dias",
      color: "from-secondary to-primary",
      whatsappMessage: "Olá! Quero escalar meu negócio com Gestão de Tráfego Pago. Vamos marcar uma reunião?",
    },
    {
      id: "saas",
      icon: Code2,
      title: "Desenvolvimento SaaS",
      subtitle: "Soluções Sob Medida",
      tagline: "Tecnologia que automatiza seu crescimento",
      description: "Desenvolvemos sistemas personalizados: agendamentos, pedidos, pagamentos e automações. Tecnologia robusta que escala com seu negócio.",
      features: [
        { icon: Layers, text: "Arquitetura escalável" },
        { icon: Shield, text: "Segurança enterprise" },
        { icon: Code2, text: "Integrações ilimitadas" },
      ],
      metrics: "Sistema Lucrativo",
      color: "from-blue-400 to-secondary",
      whatsappMessage: "Olá! Preciso de um Sistema SaaS Sob Medida para automatizar meu negócio. Podemos agendar uma conversa?",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden section-glow" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Soluções completas para{" "}
            <span className="gradient-text">escalar seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada serviço é projetado para gerar ROI mensurável e 
            crescimento sustentável.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveService(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeService === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              <service.icon className="w-5 h-5" />
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Active Service Card */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${services[activeService].color} text-primary-foreground text-sm font-semibold mb-6`}>
                {services[activeService].subtitle}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                {services[activeService].tagline}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <ul className="space-y-4 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" asChild>
                <a 
                  href={`https://wa.me/5511954233945?text=${encodeURIComponent(services[activeService].whatsappMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2"
                >
                  Quero esse serviço
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${services[activeService].color} opacity-10 absolute inset-0`} />
              <div className="relative p-8">
                <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-8 animate-float">
                  {(() => {
                    const IconComponent = services[activeService].icon;
                    return <IconComponent className="w-16 h-16 text-primary" />;
                  })()}
                </div>
                
                {/* Metric Card */}
                <div className="glass-card rounded-2xl p-6 text-center max-w-xs mx-auto">
                  <div className="text-3xl font-heading font-bold gradient-text mb-2">
                    {services[activeService].metrics}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Resultado comprovado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
