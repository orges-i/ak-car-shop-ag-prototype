import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Droplets, Sparkles, Zap, Shield, Star, CheckCircle, Phone } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslations, type Language } from "../../lib/translations";
import { Button } from "../ui/button";

interface CarWashPageProps {
  language: Language;
}

export function CarWashPage({ language }: CarWashPageProps) {
  const t = useTranslations(language);
  
  const features = [
    {
      icon: Droplets,
      title: t.carWash.feature1,
      description: t.carWash.feature1Desc
    },
    {
      icon: Zap,
      title: t.carWash.feature2,
      description: t.carWash.feature2Desc
    },
    {
      icon: Shield,
      title: t.carWash.feature3,
      description: t.carWash.feature3Desc
    },
    {
      icon: Sparkles,
      title: t.carWash.feature4,
      description: t.carWash.feature4Desc
    },
    {
      icon: Star,
      title: t.carWash.feature5,
      description: t.carWash.feature5Desc
    },
    {
      icon: Droplets,
      title: t.carWash.feature6,
      description: t.carWash.feature6Desc
    },
  ];

  const programs = [
    { name: language === 'de' ? 'Express Wäsche' : 'Express Wash', price: "CHF 15.-", features: [language === 'de' ? 'Vorwäsche' : 'Pre-wash', language === 'de' ? 'Hauptwäsche' : 'Main wash', language === 'de' ? 'Trocknung' : 'Drying'] },
    { name: language === 'de' ? 'Standard Wäsche' : 'Standard Wash', price: "CHF 22.-", features: [language === 'de' ? 'Vorwäsche' : 'Pre-wash', language === 'de' ? 'Hauptwäsche' : 'Main wash', language === 'de' ? 'Unterbodenwäsche' : 'Underbody wash', language === 'de' ? 'Trocknung' : 'Drying', language === 'de' ? 'Glanztrocknung' : 'Shine drying'] },
    { name: language === 'de' ? 'Premium Wäsche' : 'Premium Wash', price: "CHF 30.-", features: [language === 'de' ? 'Vorwäsche' : 'Pre-wash', language === 'de' ? 'Schaum-Wäsche' : 'Foam wash', language === 'de' ? 'Hauptwäsche' : 'Main wash', language === 'de' ? 'Unterbodenwäsche' : 'Underbody wash', language === 'de' ? 'Heißwachs' : 'Hot wax', language === 'de' ? 'Trocknung' : 'Drying', language === 'de' ? 'Glanztrocknung' : 'Shine drying'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
            alt="Car Wash"
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
          <h1 className="text-white mb-4">{t.carWash.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.carWash.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.carWash.facilityTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t.carWash.facilityText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent group cursor-pointer">
                  <motion.div
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-accent" size={28} />
                  </motion.div>
                  <h3 className="text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.carWash.programsTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`p-8 h-full transition-all duration-300 ${
                  index === 1 
                    ? "border-2 border-accent bg-white shadow-xl" 
                    : "border-2 border-transparent hover:border-accent"
                }`}>
                  {index === 1 && (
                    <div className="bg-accent text-white px-4 py-1 rounded-full inline-block mb-4">
                      {t.carWash.popular}
                    </div>
                  )}
                  <h3 className="text-black mb-2">{program.name}</h3>
                  <div className="text-3xl text-accent mb-6">{program.price}</div>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-900 text-lg font-medium mb-6 pt-8">{language === 'de' ? 'Haben Sie Fragen zu unseren Waschprogrammen?' : 'Do you have questions about our washing programs?'}</p>
            <a href="tel:+41813226633">
              <Button className="bg-accent hover:bg-accent/90 px-8 py-6">
                <Phone className="mr-2 text-gray-300" size={20} />
                <span className="text-gray-300">{language === 'de' ? 'Jetzt anrufen: +41 81 322 66 33' : 'Call now: +41 81 322 66 33'}</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.carWash.additionalTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: t.carWash.handWash, description: t.carWash.handWashDesc },
              { title: t.carWash.interior, description: t.carWash.interiorDesc },
              { title: t.carWash.polish, description: t.carWash.polishDesc },
              { title: t.carWash.wheels, description: t.carWash.wheelsDesc },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-accent mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}