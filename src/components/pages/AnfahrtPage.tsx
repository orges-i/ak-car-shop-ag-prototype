import { motion } from "motion/react";
import { Card } from "../ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { useTranslations, type Language } from "../../lib/translations";

interface AnfahrtPageProps {
  language: Language;
}

export function AnfahrtPage({ language }: AnfahrtPageProps) {
  const t = useTranslations(language);

  const directions = [
    { step: 1, text: t.directions.step1 },
    { step: 2, text: t.directions.step2 },
    { step: 3, text: t.directions.step3 },
    { step: 4, text: t.directions.step4 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-white mb-4">{t.directions.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.directions.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.directions.contactTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">{t.directions.address}</h3>
                      <p className="text-gray-700">
                        Industriestrasse 6<br />
                        7208 Malans GR<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">{t.directions.phone}</h3>
                      <p className="text-gray-700">
                        <a href="tel:+41813226633" className="hover:text-accent transition-colors">
                          +41 81 322 66 33
                        </a>
                        <br />
                        <a href="tel:+41792851350" className="hover:text-accent transition-colors">
                          +41 79 285 13 50
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">{t.directions.openingHours}</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>{language === 'de' ? 'Mo - Do: 9:00 - 12:00 / 13:30 - 19:00' : 'Mon - Thu: 9:00 - 12:00 / 13:30 - 19:00'}</p>
                        <p>{language === 'de' ? 'Fr: 9:00 - 12:00 / 13:30 - 18:00' : 'Fri: 9:00 - 12:00 / 13:30 - 18:00'}</p>
                        <p>{language === 'de' ? 'Sa - So: Geschlossen' : 'Sat - Sun: Closed'}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Directions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.directions.directionsTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />

              <div className="space-y-4">
                {directions.map((direction, index) => (
                  <motion.div
                    key={direction.step}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <span className="text-accent">{direction.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">{direction.text}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Industriestrasse+6,+7208+Malans+GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
                >
                  <Navigation size={20} />
                  {t.directions.openInMaps}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-black mb-4">{t.directions.mapTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.3682766358687!2d9.5212799!3d47.0334556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31f9e9d7ef57%3A0x6c5b5c6d4b5e3c2a!2sIndustriestrasse%206%2C%207208%20Malans%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1644000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AK CAR SHOP AG Standort"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t.directions.mapText}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
