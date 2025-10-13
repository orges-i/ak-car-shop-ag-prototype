import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useTranslations, type Language } from "../../lib/translations";

interface KontaktPageProps {
  language: Language;
}

export function KontaktPage({ language }: KontaktPageProps) {
  const t = useTranslations(language);
  
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    adresse: "",
    stadt: "",
    plz: "",
    kommentare: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    const message = language === 'de' 
      ? "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden."
      : "Thank you for your message! We will get back to you soon.";
    alert(message);
    setFormData({ vorname: "", nachname: "", email: "", telefon: "", adresse: "", stadt: "", plz: "", kommentare: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <h1 className="text-white mb-4">{t.contact.pageTitle}</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.contact.formTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />

              <Card className="p-8 border-2 border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First and Last Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vorname">{language === 'de' ? 'Vorname' : 'First Name'} *</Label>
                      <Input
                        id="vorname"
                        name="vorname"
                        type="text"
                        required
                        value={formData.vorname}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                        placeholder={language === 'de' ? 'Max' : 'John'}
                      />
                    </div>

                    <div>
                      <Label htmlFor="nachname">{language === 'de' ? 'Nachname' : 'Last Name'} *</Label>
                      <Input
                        id="nachname"
                        name="nachname"
                        type="text"
                        required
                        value={formData.nachname}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                        placeholder={language === 'de' ? 'Mustermann' : 'Doe'}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                      placeholder="name@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="telefon">{language === 'de' ? 'Telefon' : 'Phone'}</Label>
                    <Input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>

                  {/* Address Line 1 */}
                  <div>
                    <Label htmlFor="adresse">{language === 'de' ? 'Adresszeile 1' : 'Address Line 1'}</Label>
                    <Input
                      id="adresse"
                      name="adresse"
                      type="text"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                      placeholder={language === 'de' ? 'Musterstrasse 123' : 'Example Street 123'}
                    />
                  </div>

                  {/* City and Postal Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="stadt">{language === 'de' ? 'Stadt' : 'City'}</Label>
                      <Input
                        id="stadt"
                        name="stadt"
                        type="text"
                        value={formData.stadt}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                        placeholder={language === 'de' ? 'Zürich' : 'Zurich'}
                      />
                    </div>

                    <div>
                      <Label htmlFor="plz">{language === 'de' ? 'PLZ' : 'Postal Code'}</Label>
                      <Input
                        id="plz"
                        name="plz"
                        type="text"
                        value={formData.plz}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-accent focus:ring-accent"
                        placeholder="8000"
                      />
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <Label htmlFor="kommentare">{language === 'de' ? 'Kommentare' : 'Comments'} *</Label>
                    <Textarea
                      id="kommentare"
                      name="kommentare"
                      required
                      value={formData.kommentare}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-accent focus:ring-accent min-h-[150px]"
                      placeholder={language === 'de' ? 'Ihre Nachricht an uns...' : 'Your message to us...'}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-accent hover:text-white transition-all duration-300 group"
                    >
                      <Send className="mr-2" size={18} />
                      {t.contact.sendButton}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-black mb-4">{t.contact.infoTitle}</h2>
              <div className="w-24 h-1 bg-accent mb-6" />

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">{language === 'de' ? 'Telefon' : 'Phone'}</h3>
                      <p className="text-gray-700">
                        <a href="tel:+41813226633" className="hover:text-accent transition-colors block">
                          +41 81 322 66 33
                        </a>
                        <a href="tel:+41792851350" className="hover:text-accent transition-colors block">
                          +41 79 285 13 50
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">E-Mail</h3>
                      <p className="text-gray-700">
                        <a href="mailto:ak@akcarshop.com" className="hover:text-accent transition-colors">
                          ak@akcarshop.com
                        </a>
                      </p>
                      <p className="text-gray-600 mt-2">
                        <a href="http://www.akcarshop.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          www.akcarshop.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black mb-2">{language === 'de' ? 'Adresse' : 'Address'}</h3>
                      <p className="text-gray-700">
                        Industriestrasse 6<br />
                        7208 Malans GR<br />
                        {language === 'de' ? 'Schweiz' : 'Switzerland'}
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
                      <h3 className="text-black mb-2">{language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>{language === 'de' ? 'Mo - Do' : 'Mon - Thu'}: 9:00 - 12:00 / 13:30 - 19:00</p>
                        <p>{language === 'de' ? 'Fr' : 'Fri'}: 9:00 - 12:00 / 13:30 - 18:00</p>
                        <p className="text-accent">{language === 'de' ? 'Sa - So: Geschlossen' : 'Sat - Sun: Closed'}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">{t.contact.visitTitle}</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.contact.visitText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+41813226633">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={18} />
                  {t.contact.callButton}
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
