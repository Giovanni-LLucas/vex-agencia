import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Compass, 
  Lightbulb, 
  Handshake, 
  LineChart,
  ArrowRight 
} from "lucide-react";

const Differentiators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const differentiators = [
    {
      icon: Compass,
      title: "Abordagem Estratégica",
      description: "Não executamos tarefas, criamos estratégias. Cada ação é pensada para gerar retorno mensurável e alinhada aos seus objetivos de negócio.",
      highlight: "Estratégia antes da execução",
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Acompanhamos as últimas tendências e tecnologias do mercado digital para manter seu negócio sempre à frente da concorrência.",
      highlight: "Sempre um passo à frente",
    },
    {
      icon: Handshake,
      title: "Parceria de Verdade",
      description: "Não somos apenas fornecedores. Nos envolvemos com seu negócio como se fosse nosso, celebrando vitórias e resolvendo desafios juntos.",
      highlight: "Extensão do seu time",
    },
    {
      icon: LineChart,
      title: "Obsessão por Métricas",
      description: "Decisões baseadas em dados, não em achismos. Relatórios claros, metas definidas e transparência total em cada etapa.",
      highlight: "Data-driven sempre",
    },
  ];

  return (
    <section id="differentiators" className="py-24 relative overflow-hidden section-glow" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Por que a Vex?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            O que nos torna{" "}
            <span className="gradient-text">diferentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não somos uma agência genérica. Somos parceiros estratégicos 
            focados em resultados reais.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.5,
                  }}
                  style={{ width: "50%" }}
                />
                
                <div className="relative z-10">
                  {/* Icon with rotation */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <diff.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <motion.span 
                      className="text-xs font-semibold text-primary uppercase tracking-wider"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {diff.highlight}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                    {diff.title}
                  </h3>

                  {/* Description - Expandable */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedCards.includes(index) ? "auto" : 0,
                      opacity: expandedCards.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {diff.description}
                    </p>
                  </motion.div>

                  {/* Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center gap-2 text-primary transition-all duration-300 hover:gap-3"
                  >
                    <span className="text-sm font-semibold">
                      {expandedCards.includes(index) ? "Ocultar" : "Saiba mais"}
                    </span>
                    <motion.div
                      animate={{ 
                        rotate: expandedCards.includes(index) ? 90 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="glass-card rounded-2xl p-10 max-w-3xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            animate={{
              boxShadow: [
                "0 10px 40px rgba(58, 98, 184, 0.3), 0 0 0 1px rgba(58, 98, 184, 0.3)",
                "0 20px 60px rgba(58, 98, 184, 0.5), 0 0 0 2px rgba(58, 98, 184, 0.3)",
                "0 10px 40px rgba(58, 98, 184, 0.3), 0 0 0 1px rgba(58, 98, 184, 0.1)",
              ],
            }}
            style={{
              boxShadow: "0 10px 40px rgba(58, 98, 184, 0.3), 0 0 0 1px rgba(58, 98, 184, 0.1)"
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-heading font-bold mb-4"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Chega de agências que entregam{" "}
                <span className="gradient-text">menos do que prometem</span>
              </motion.h3>
              <motion.p 
                className="text-muted-foreground text-lg"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Na Vex, prometemos resultados e entregamos crescimento. 
                Simples assim.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;
