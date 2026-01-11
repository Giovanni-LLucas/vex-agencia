import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Análise gratuita do seu projeto",
    "Estratégia personalizada",
    "Sem compromisso inicial",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm font-medium text-primary">
              Pronto para escalar?
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Seu próximo nível de crescimento{" "}
            <span className="gradient-text">começa aqui</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa estratégica gratuita e descubra como podemos 
            multiplicar seus resultados com landing pages, tráfego pago e 
            tecnologia sob medida.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="cta" size="xl" className="group" asChild>
              <a 
                href="https://wa.me/5511954233945?text=Olá! Gostaria de saber mais sobre os serviços da Vex Agência." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                Quero escalar meu negócio!
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Resposta em até 2 horas durante horário comercial
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
