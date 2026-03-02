/*import { useEffect, useState } from "react";
import "../styles/ComponentsStyles/CountryCardCarousel.css";

export default function CountryCardCarousel({ images, title, subtitle }) {
  if (!images || images.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}*/

import { useEffect, useState } from "react";
import "../styles/componentsStyles/CountryCardCarousel.css";

interface CountryCardCarouselProps {
  images: string[];
  title: string;
  subtitle: string;
}

export default function CountryCardCarousel({
  images,
  title,
  subtitle,
}: CountryCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Сбрасываем индекс в 0, когда меняется набор картинок (выбрана другая страна)
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return; // Не запускаем интервал, если картинка одна

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images]); // Следим за самим массивом

  if (!images || images.length === 0) return null;

  return (
    <div className="hero">
      {images.map((img, index) => (
        <div
          key={img} // Лучше использовать URL картинки как ключ, если они уникальны
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
