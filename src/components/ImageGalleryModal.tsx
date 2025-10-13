import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  initialIndex?: number;
}

export function ImageGalleryModal({ 
  isOpen, 
  onClose, 
  images, 
  title,
  initialIndex = 0 
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-6xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 bg-black/50 backdrop-blur-md rounded-t-lg p-4 border-b-2 border-accent">
              <div className="flex items-center gap-3">
                <ZoomIn className="text-accent" size={24} />
                <h2 className="text-white">{title}</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-silver-light">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={onClose}
                  className="text-white hover:text-accent transition-colors p-2 hover:bg-accent/20 rounded-lg bg-accent/10 border border-accent/50"
                  aria-label="Close gallery"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative flex items-center justify-center mb-3 bg-black/30 rounded-lg h-[55vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center p-4"
                >
                  <ImageWithFallback
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-accent text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border-2 border-silver/30"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-accent text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border-2 border-silver/30"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="bg-black/50 backdrop-blur-md rounded-b-lg p-4 border-t-2 border-accent">
              <div 
                className="flex gap-3 overflow-x-auto py-2 px-1"
                style={{
                  maxHeight: '120px',
                  scrollbarWidth: 'auto',
                  scrollbarColor: '#841619 rgba(0, 0, 0, 0.5)'
                }}
              >
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentIndex
                        ? "border-accent ring-2 ring-accent ring-offset-2 ring-offset-black shadow-lg shadow-accent/50"
                        : "border-silver/30 hover:border-accent"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}