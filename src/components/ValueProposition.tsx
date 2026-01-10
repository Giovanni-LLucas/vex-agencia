import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, BarChart3, Rocket, Shield, Clock, Users } from "lucide-react";

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Target,
      title: "Foco em Conversão",
      description: "Cada pixel é pensado para maximizar suas vendas e captar leads qualificados.",
    },
    {
      icon: BarChart3,
      title: "Decisões Baseadas em Dados",
      description: "Métricas claras e dashboards em tempo real para você acompanhar o ROI.",
    },
    {
      icon: Rocket,
      title: "Escala Previsível",
      description: "Estrutura para crescer de forma sustentável, sem surpresas no orçamento.",
    },
    {
      icon: Shield,
      title: "Segurança & Compliance",
      description: "Práticas de segurança robustas e conformidade com LGPD em todos os projetos.",
    },
    {
      icon: Clock,
      title: "Agilidade na Entrega",
      description: "Sprints rápidas e comunicação transparente do início ao lançamento.",
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Mais que fornecedores, somos extensão do seu time de crescimento.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Por que escolher a Vex
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Resultados mensuráveis,{" "}
            <span className="gradient-text">não promessas vazias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos estratégia, tecnologia e performance para entregar 
            crescimento real e sustentável para o seu negócio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <benefit.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
