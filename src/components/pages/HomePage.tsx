import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslations, type Language } from "../../lib/translations";

interface HomePageProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function HomePage({ onNavigate, language }: HomePageProps) {
  const t = useTranslations(language);
  
  const values = [
    { icon: Heart, label: t.home.valuesHonesty, description: t.home.valuesHonestyDesc },
    { icon: Shield, label: t.home.valuesLoyalty, description: t.home.valuesLoyaltyDesc },
    { icon: Users, label: t.home.valuesRespect, description: t.home.valuesRespectDesc },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black w-full">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwMTczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="AK Car Shop Workshop"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-6"
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t.home.heroSubtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => onNavigate("Kontakt")}
              className="bg-accent text-white hover:bg-accent/90 px-8 py-6 group"
            >
              {t.home.heroButton}
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.home.valuesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent group cursor-pointer">
                  <motion.div
                    className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="text-accent" size={32} />
                  </motion.div>
                  <h3 className="text-black mb-2">{value.label}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-gray-50 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.home.aboutTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-gray-700 mb-4">
                {t.home.aboutText1}
              </p>
              <p className="text-gray-700 mb-6">
                {t.home.aboutText2}
              </p>
              <Button
                onClick={() => onNavigate("UeberUns")}
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                {t.home.aboutButton}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer"
            >
              <ImageWithFallback
                src="https://static.wixstatic.com/media/90a441_69cfa499baff44dc8c2d0df20c049835~mv2.jpg/v1/fill/w_732,h_550,al_c,q_85,enc_avif,quality_auto/90a441_69cfa499baff44dc8c2d0df20c049835~mv2.jpg"
                alt="AK Car Shop Team"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black text-white w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.home.servicesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.nav.carWash, page: "CarWash", img: "https://static.wixstatic.com/media/90a441_456e648fc144456da300004812cfcde0~mv2.jpg/v1/fill/w_705,h_550,al_c,q_85,enc_auto/90a441_456e648fc144456da300004812cfcde0~mv2.jpg" },
              { title: t.nav.workshop, page: "Werkstatt", img: "https://images.unsplash.com/photo-1759580827787-2eed5f9eb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwMTczMjh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: t.nav.vehicles, page: "Fahrzeuge", img: "https://images.unsplash.com/photo-1652727743972-5fd1483a23ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xhc3NpYyUyMGNhcnxlbnwxfHx8fDE3NjAwMDIyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { title: t.nav.motorhome, page: "Wohnmobil", img: "https://images.unsplash.com/photo-1663951032591-0e31da272d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmhvbWUlMjBjYW1wZXJ8ZW58MXx8fHwxNzYwMDQ0NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onNavigate(service.page)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={service.img}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-2">{service.title}</h3>
                    <div className="w-12 h-1 bg-accent transform origin-left transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}