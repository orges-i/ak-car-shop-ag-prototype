import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Users, 
  Bed, 
  Calendar, 
  Settings, 
  Wind, 
  Camera, 
  Radio,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import { useTranslations, type Language } from "../../lib/translations";

interface WohnmobilPageProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function WohnmobilPage({ onNavigate, language }: WohnmobilPageProps) {
  const t = useTranslations(language);

  const features = [
    { icon: Users, label: language === 'de' ? "5 Reiseplätze" : "5 Travel Seats" },
    { icon: Bed, label: language === 'de' ? "6 Schlafplätze" : "6 Sleeping Places" },
    { icon: Settings, label: language === 'de' ? "Schaltgetriebe" : "Manual Transmission" },
    { icon: Wind, label: language === 'de' ? "Klimaanlage" : "Air Conditioning" },
    { icon: Camera, label: language === 'de' ? "Rückfahrkamera" : "Rear View Camera" },
    { icon: Radio, label: language === 'de' ? "Radio/Navi" : "Radio/GPS" },
  ];

  const technicalData = [
    { label: t.motorhome.year, value: "2020" },
    { label: t.motorhome.travelSeats, value: "5" },
    { label: t.motorhome.sleepingPlaces, value: "6" },
    { label: t.motorhome.length, value: "651 cm" },
    { label: t.motorhome.height, value: "319 cm" },
    { label: t.motorhome.width, value: "233 cm" },
    { label: t.motorhome.power, value: "160 PS" },
    { label: t.motorhome.emptyWeight, value: "3000 kg" },
    { label: t.motorhome.totalWeight, value: "3500 kg" },
  ];

  const equipment = [
    language === 'de' ? "Markise für Schatten" : "Awning for shade",
    language === 'de' ? "Rückfahrkamera für sicheres Rangieren" : "Rear view camera for safe maneuvering",
    language === 'de' ? "Veloträger für Fahrräder" : "Bike rack for bicycles",
    language === 'de' ? "Klimaanlage für angenehmes Raumklima" : "Air conditioning for pleasant climate",
    language === 'de' ? "Radio/Navigationssystem" : "Radio/Navigation system",
    language === 'de' ? "Vollausgestattete Küche" : "Fully equipped kitchen",
    language === 'de' ? "Sanitärbereich mit Dusche/WC" : "Sanitary area with shower/toilet",
    language === 'de' ? "Heizung für alle Jahreszeiten" : "Heating for all seasons",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1663951032591-0e31da272d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmhvbWUlMjBjYW1wZXJ8ZW58MXx8fHwxNzYwMDQ0NjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wohnmobil"
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
          <Badge className="bg-accent text-black hover:bg-accent/90 mb-4">
            {t.motorhome.available}
          </Badge>
          <h1 className="text-white mb-4">{t.motorhome.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t.motorhome.subtitle}
          </p>
          <Button
            onClick={() => onNavigate("Kontakt")}
            className="bg-accent text-black hover:bg-accent/90 px-8 py-6 group"
          >
            {t.motorhome.rentButton}
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Button>
        </motion.div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.motorhome.highlightsTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent cursor-pointer">
                  <motion.div
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-accent" size={24} />
                  </motion.div>
                  <p className="text-gray-700">{feature.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data & Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Data */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.motorhome.technicalTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <Card className="p-6">
                <div className="space-y-4">
                  {technicalData.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-700">{item.label}</span>
                      <span className="text-black">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.motorhome.equipmentTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <Card className="p-6">
                <div className="space-y-3">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rental Information */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.motorhome.rentalInfoTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: t.motorhome.flexBooking,
                description: t.motorhome.flexBookingDesc
              },
              {
                icon: CheckCircle,
                title: t.motorhome.allInclusive,
                description: t.motorhome.allInclusiveDesc
              },
              {
                icon: Settings,
                title: t.motorhome.condition,
                description: t.motorhome.conditionDesc
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 border-white/20 p-8 text-center hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://static.wixstatic.com/media/90a441_e124862d6e1e4dbf99c605aebcabfda4~mv2.jpg/v1/fill/w_883,h_450,al_c,lg_1,q_85,enc_avif,quality_auto/90a441_e124862d6e1e4dbf99c605aebcabfda4~mv2.jpg"
              alt="Wohnmobil Interior"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black mb-6">{t.motorhome.readyTitle}</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              {t.motorhome.readyText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("Kontakt")}
                className="bg-black text-white hover:bg-accent hover:text-black transition-all duration-300"
              >
                {t.motorhome.inquireButton}
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <a href="tel:+41813226633">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  +41 81 322 66 33
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
