import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Wrench, Car, Sparkles, Cog, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslations, type Language } from "../../lib/translations";

interface WerkstattPageProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function WerkstattPage({ onNavigate, language }: WerkstattPageProps) {
  const t = useTranslations(language);
  
  const services = [
    {
      icon: Wrench,
      title: t.workshop.service1,
      description: t.workshop.service1Desc
    },
    {
      icon: Sparkles,
      title: t.workshop.service2,
      description: t.workshop.service2Desc
    },
    {
      icon: Car,
      title: t.workshop.service3,
      description: t.workshop.service3Desc
    },
    {
      icon: Cog,
      title: t.workshop.service4,
      description: t.workshop.service4Desc
    },
  ];

  const detailedServices = [
    language === 'de' ? 'Motor- und Getriebereparaturen' : 'Engine and transmission repairs',
    language === 'de' ? 'Karosserie- und Lackarbeiten' : 'Body and paint work',
    language === 'de' ? 'Bremsen- und Fahrwerksservice' : 'Brake and chassis service',
    language === 'de' ? 'Klimaanlagenservice' : 'Air conditioning service',
    language === 'de' ? 'Auspuffanlagen' : 'Exhaust systems',
    language === 'de' ? 'Elektrische Systeme' : 'Electrical systems',
    language === 'de' ? 'Innenraumrestaurierung' : 'Interior restoration',
    language === 'de' ? 'Oldtimer-Gutachten' : 'Classic car appraisals',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwMTczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Werkstatt"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white mb-4">{t.workshop.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.workshop.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.workshop.servicesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t.workshop.servicesText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent group cursor-pointer">
                  <motion.div
                    className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-accent" size={32} />
                  </motion.div>
                  <h3 className="text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.workshop.fullServiceTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-gray-700 mb-6">
                {t.workshop.fullServiceText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {detailedServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
              <Button
                onClick={() => onNavigate("Kontakt")}
                className="bg-black text-white hover:bg-accent hover:text-white transition-all duration-300 group"
              >
                {t.workshop.appointmentButton}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg shadow-2xl group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwMTczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Werkstatt Arbeit"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.workshop.whyUsTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.workshop.expertise,
                description: t.workshop.expertiseDesc
              },
              {
                title: t.workshop.technology,
                description: t.workshop.technologyDesc
              },
              {
                title: t.workshop.pricing,
                description: t.workshop.pricingDesc
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}