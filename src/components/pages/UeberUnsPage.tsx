import { motion } from "motion/react";
import { Card } from "../ui/card";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslations, type Language } from "../../lib/translations";

interface UeberUnsPageProps {
  language: Language;
}

export function UeberUnsPage({ language }: UeberUnsPageProps) {
  const t = useTranslations(language);
  
  const timeline = [
    { year: "2003", event: t.about.milestone2003 },
    { year: "2005", event: t.about.milestone2005 },
    { year: "2007", event: t.about.milestone2007 },
    { year: "2013", event: t.about.milestone2013 },
    { year: "2017", event: t.about.milestone2017 },
  ];

  const team = [
    { 
      name: "Arno Krättli jr.", 
      role: t.about.ceo,
      description: t.about.ceoDesc
    },
    { 
      name: "Marco Kunz", 
      role: t.about.workshopManager,
      description: t.about.workshopManagerDesc
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631720040176-0d789a643a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjBnYXJhZ2V8ZW58MXx8fHwxNzU5OTc1MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Über uns"
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
          <h1 className="text-white mb-4">{t.about.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-6">{t.about.storyTitle}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t.about.storyText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.about.milestonesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                        <span className="text-accent">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                        <p className="text-gray-800">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.about.teamTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent">
                  <div className="w-32 h-32 bg-gradient-to-br from-black to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent text-4xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-black mb-2">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.about.whyUsTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.about.experience,
                description: t.about.experienceDesc
              },
              {
                title: t.about.quality,
                description: t.about.qualityDesc
              },
              {
                title: t.about.service,
                description: t.about.serviceDesc
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
                  <CheckCircle2 className="text-black" size={32} />
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