import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Review {
  id: string;
  author_name: string;
  rating: number;
  review_text: string;
  review_date: string;
  is_featured: boolean;
}

interface TestimonialsProps {
  language: 'de' | 'en';
}

export function Testimonials({ language }: TestimonialsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (data && !error) {
        setReviews(data);
      }
    };

    fetchReviews();
  }, []);

  const title = language === 'de' ? 'Was unsere Kunden sagen' : 'What Our Customers Say';
  const subtitle = language === 'de'
    ? 'Echte Bewertungen von echten Kunden'
    : 'Real reviews from real customers';

  return (
    <section className="py-16 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-black mb-4">{title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review_text}"</p>
                <div className="mt-auto">
                  <p className="text-black font-medium">{review.author_name}</p>
                  <p className="text-gray-500 text-sm">{review.review_date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
