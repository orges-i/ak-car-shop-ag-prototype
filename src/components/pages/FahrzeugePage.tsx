import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ImageGalleryModal } from "../ImageGalleryModal";
import { Eye } from "lucide-react";
import { useTranslations, type Language } from "../../lib/translations";

interface FahrzeugePageProps {
  language: Language;
}

export function FahrzeugePage({ language }: FahrzeugePageProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const t = useTranslations(language);

  const vehicles = [
    {
      category: language === 'de' ? "Jeep Wrangler JK 3 door 2007" : "Jeep Wrangler JK 3 door 2007",
      description: t.vehicles.jeep3doorDesc,
      features: [language === 'de' ? "4x4 Antrieb" : "4x4 Drive", language === 'de' ? "Geländetauglich" : "Off-road capable", language === 'de' ? "Robust" : "Robust", language === 'de' ? "Alltagstauglich" : "Daily usable"],
      image: "https://static.wixstatic.com/media/90a441_7e232dec35e84914b2a6c3d166c64b5f~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_7e232dec35e84914b2a6c3d166c64b5f~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/90a441_7e232dec35e84914b2a6c3d166c64b5f~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_7e232dec35e84914b2a6c3d166c64b5f~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_31b11268c1bf423aa715dfcf79823a61~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_31b11268c1bf423aa715dfcf79823a61~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_5b61171341e34119858fb8e54362fa31~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_5b61171341e34119858fb8e54362fa31~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_5127a7d8f48f40cca4904933ac52ebdf~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_5127a7d8f48f40cca4904933ac52ebdf~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_3678fd1aeb804384be9cb62467651a17~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_3678fd1aeb804384be9cb62467651a17~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_f05ad2ec2dbc46d4888d95ae15296a61~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_f05ad2ec2dbc46d4888d95ae15296a61~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_a940d2ba3cbe46678f0948cc63f6d26c~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_a940d2ba3cbe46678f0948cc63f6d26c~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_5b7ac78ad95c423ba22311d092c280e8~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_5b7ac78ad95c423ba22311d092c280e8~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_3fd565c182de4796a741d88139e8db26~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_3fd565c182de4796a741d88139e8db26~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_d4173c92ec1946ce9a4702762c1af983~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_d4173c92ec1946ce9a4702762c1af983~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_6db5a5c753f147da9b8e464e05dd4f59~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_6db5a5c753f147da9b8e464e05dd4f59~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_4fd193fcf01643cb853c08745788fff5~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_4fd193fcf01643cb853c08745788fff5~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_c135c75b9345448a86638605fe50bce9~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_c135c75b9345448a86638605fe50bce9~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_9b800ebd63d04620a6e4dffff88cc67c~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_9b800ebd63d04620a6e4dffff88cc67c~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_0f7aa9fe6b5146608e5c75556b14e804~mv2.jpg/v1/fill/w_448,h_600,al_c,lg_1,q_80,enc_auto/90a441_0f7aa9fe6b5146608e5c75556b14e804~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_330c1e75894e49bd9e6d708897535ee3~mv2.jpg/v1/fill/w_750,h_561,al_c,lg_1,q_85,enc_auto/90a441_330c1e75894e49bd9e6d708897535ee3~mv2.jpg",
      ]
    },
    {
      category: language === 'de' ? "Jeep Wrangler Unlimited JK 5 door 2007-" : "Jeep Wrangler Unlimited JK 5 door 2007-",
      description: t.vehicles.jeep5doorDesc,
      features: [language === 'de' ? "5 Türen" : "5 Doors", language === 'de' ? "Mehr Platz" : "More space", language === 'de' ? "Langstreckenkomfort" : "Long-distance comfort", language === 'de' ? "Vielseitig" : "Versatile"],
      image: "https://static.wixstatic.com/media/90a441_25522561173547af839841533acafef9~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_25522561173547af839841533acafef9~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/90a441_25522561173547af839841533acafef9~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_25522561173547af839841533acafef9~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_f482896e402f4406a379d6d1f864ecce~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_f482896e402f4406a379d6d1f864ecce~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_07ebb36f335b4121a09e8d45d9754d33~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_07ebb36f335b4121a09e8d45d9754d33~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_45d871613103412cbcafa4c6c4a906f1~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_45d871613103412cbcafa4c6c4a906f1~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_7ff74f4e97a4407ebbc111f3718d8007~mv2.jpg/v1/fill/w_448,h_600,al_c,lg_1,q_80,enc_auto/90a441_7ff74f4e97a4407ebbc111f3718d8007~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_f705d962cc75487897a8ca6f387b0537~mv2.jpg/v1/fill/w_750,h_561,al_c,lg_1,q_85,enc_auto/90a441_f705d962cc75487897a8ca6f387b0537~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_aa070ab73dd14688ab0a95ba454803c9~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_aa070ab73dd14688ab0a95ba454803c9~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_20719b472eaa4645a1935225aae1adbf~mv2.jpg/v1/fill/w_448,h_600,al_c,lg_1,q_80,enc_auto/90a441_20719b472eaa4645a1935225aae1adbf~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_b0e1e420eaa0482188eda6831f0241c1~mv2.jpg/v1/fill/w_448,h_600,al_c,lg_1,q_80,enc_auto/90a441_b0e1e420eaa0482188eda6831f0241c1~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_a94425c83d6847139aac18ba192c5ec2~mv2.jpg/v1/fill/w_448,h_600,al_c,lg_1,q_80,enc_auto/90a441_a94425c83d6847139aac18ba192c5ec2~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_17eef1d884744ae092920c7cb408ed71~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_17eef1d884744ae092920c7cb408ed71~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_486363e552a74a868c7db16231b3175f~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_486363e552a74a868c7db16231b3175f~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_0f3f3375ec11446d9ddfcd9dbe379ae9~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_0f3f3375ec11446d9ddfcd9dbe379ae9~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_dff744ec37404f4b80f26bb9fb028f8e~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_dff744ec37404f4b80f26bb9fb028f8e~mv2.jpg",
      ]
    },
    {
      category: t.vehicles.conversions,
      description: t.vehicles.conversionsDesc,
      features: [language === 'de' ? "Maßgeschneidert" : "Custom-made", language === 'de' ? "Einzigartig" : "Unique", language === 'de' ? "Hochwertig" : "High-quality", language === 'de' ? "Kreativ" : "Creative"],
      image: "https://static.wixstatic.com/media/90a441_1bf189dc0feb4957a884a08065c642b0~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_1bf189dc0feb4957a884a08065c642b0~mv2.jpg",
      gallery: [
        "https://static.wixstatic.com/media/90a441_1bf189dc0feb4957a884a08065c642b0~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_1bf189dc0feb4957a884a08065c642b0~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_33d5d7728f73435d85dc4e76d24a0255~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_33d5d7728f73435d85dc4e76d24a0255~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_b73cdee6881d4cf7832951c6cf394542~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_b73cdee6881d4cf7832951c6cf394542~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_1a2bedbcb91944c08c32cf412b470469~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_1a2bedbcb91944c08c32cf412b470469~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_3797170ce9cc47b8a3d48b08ba60f2c3~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_3797170ce9cc47b8a3d48b08ba60f2c3~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_51aaceb5c50347eab16c624697a99b3d~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_51aaceb5c50347eab16c624697a99b3d~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_428f95ff02b849c393a6261b472b5255~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_428f95ff02b849c393a6261b472b5255~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_bd44cba09aa34a66a491c698bb946e73~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_bd44cba09aa34a66a491c698bb946e73~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_68b6042fc9e3422f93637c3bfdfba416~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_68b6042fc9e3422f93637c3bfdfba416~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_6c8ad052f5e6469b8e4ebbc9d1b2a714~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_6c8ad052f5e6469b8e4ebbc9d1b2a714~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_b3dc9bbc15964772a1e9ba096dd7f7d1~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_b3dc9bbc15964772a1e9ba096dd7f7d1~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_82d950ce03d441b9af0c3b098f7ff8f8~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_82d950ce03d441b9af0c3b098f7ff8f8~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_f19645d3167a4832b4905095bc131aa5~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_f19645d3167a4832b4905095bc131aa5~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_72185c4565df427ca223e09a0c6a714c~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_72185c4565df427ca223e09a0c6a714c~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_960605f2ee714e5798cc94c42627a9ae~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_960605f2ee714e5798cc94c42627a9ae~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_8f82ca203669457a9d3969dc27653468~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_8f82ca203669457a9d3969dc27653468~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_015d8bcb4e95417db9e767ac4cbc400f~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_015d8bcb4e95417db9e767ac4cbc400f~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_09b389deb3df4f128dd26a9a6f0f6ee2~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_09b389deb3df4f128dd26a9a6f0f6ee2~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_79be65a568db4674af5636fea9959491~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_79be65a568db4674af5636fea9959491~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_6e3b981cf5a24195a88a2c5fbec2f8ee~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_6e3b981cf5a24195a88a2c5fbec2f8ee~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_07e47eb4b40743be96569e79c8601de9~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_07e47eb4b40743be96569e79c8601de9~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_50861a7e692c4c73ab0259f33eb457ec~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_50861a7e692c4c73ab0259f33eb457ec~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_ec960df08f2341bc99938542628340ab~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_ec960df08f2341bc99938542628340ab~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_58b20926f96d40178c2a426f56d15765~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_58b20926f96d40178c2a426f56d15765~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_5ee7eb4b8bc74b43b9a5d0de1c095f01~mv2.jpg/v1/fill/w_799,h_600,al_c,lg_1,q_85,enc_auto/90a441_5ee7eb4b8bc74b43b9a5d0de1c095f01~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_b3021923f89044918fc6655ff29ea28d~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_b3021923f89044918fc6655ff29ea28d~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_999640ff7aac4386aa3c7a4c4a4a0a32~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_999640ff7aac4386aa3c7a4c4a4a0a32~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_94d42e1e87c845c08e8ff9bd3ec0c87c~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_94d42e1e87c845c08e8ff9bd3ec0c87c~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_f6c446464f6440baaab962b949b54e36~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_f6c446464f6440baaab962b949b54e36~mv2.jpg",
        "https://static.wixstatic.com/media/90a441_358ee04de3f3408b8f42999c73121cf4~mv2.jpg/v1/fill/w_803,h_600,al_c,lg_1,q_85,enc_auto/90a441_358ee04de3f3408b8f42999c73121cf4~mv2.jpg",
      ]
    },
  ];

  const services = [
    language === 'de' ? "Fahrzeugankauf und -verkauf" : "Vehicle purchase and sale",
    language === 'de' ? "Individuelle Umbauten und Tuning" : "Individual conversions and tuning",
    language === 'de' ? "Restaurierung von Classic Cars" : "Restoration of classic cars",
    language === 'de' ? "Jeep-Spezialisierung" : "Jeep specialization",
    language === 'de' ? "US-Cars Import und Service" : "US cars import and service",
    language === 'de' ? "Begutachtung und Bewertung" : "Appraisal and evaluation",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1652727743972-5fd1483a23ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xhc3NpYyUyMGNhcnxlbnwxfHx8fDE3NjAwMDIyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fahrzeuge"
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
          <h1 className="text-white mb-4">{t.vehicles.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.vehicles.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black mb-6">{t.vehicles.introTitle}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t.vehicles.introText}
              {language === 'de' && ' Klicken Sie auf ein Fahrzeug, um die vollständige Bildergalerie zu sehen.'}
              {language === 'en' && ' Click on a vehicle to see the complete image gallery.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4">{t.vehicles.categoriesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent group cursor-pointer"
                  onClick={() => setSelectedVehicle(index)}
                >
                  <div className="relative overflow-hidden h-64">
                    <ImageWithFallback
                      src={vehicle.image}
                      alt={vehicle.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* View Gallery Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                      <div className="text-center">
                        <Eye className="text-accent mx-auto mb-2" size={48} />
                        <p className="text-white">Galerie ansehen</p>
                        <p className="text-silver-light">{vehicle.gallery.length} Bilder</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-white hover:bg-accent/90">
                        {vehicle.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white border border-accent">
                        {vehicle.gallery.length} Fotos
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{vehicle.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="border-black text-black hover:bg-black hover:text-white"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t.vehicles.servicesTitle}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-transparent hover:border-accent"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-white">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-black mb-6">{t.vehicles.interestedTitle}</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              {t.vehicles.interestedText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+41813226633">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                  +41 81 322 66 33
                </motion.button>
              </a>
              <a href="mailto:ak@akcarshop.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  {language === 'de' ? 'E-Mail senden' : 'Send Email'}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedVehicle !== null && (
        <ImageGalleryModal
          isOpen={selectedVehicle !== null}
          onClose={() => setSelectedVehicle(null)}
          images={vehicles[selectedVehicle].gallery}
          title={vehicles[selectedVehicle].category}
        />
      )}
    </div>
  );
}