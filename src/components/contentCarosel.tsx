import { useEffect, useState } from "react";
import "../style/carousel.css";

interface Card {
  title: string;
  content: string;
}

const cards: Card[] = [
  {
    title: "🚀 Innovation",
    content:
      "See examples of how leaf-js can make the 3d web enviroment simpler and faster to prototype in.",
  },
  {
    title: "🎨 Content",
    content:
      "Examples and graphs will be shown to explain content at a much deeper level all in once place. From the mind of a human not just a curriclum.",
  },

  {
    title: "📚 Knowledge",
    content:
      "Dive into an ocean of wisdom, where we slove complex problems in the most simple manner possible, through problem solving.",
  },

  {
    title: "💡 Insights",
    content:
      "Shows new langauges and build tools for other languages that make developer workflows more efficient, and covers the process of breaking down language syntax.",
  },
];

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Cards Wrapper */}
      <div className="carousel-wrapper">
        <h1 style={{ textAlign: "left" }}>Why is this worth looking into?</h1>
        <br />
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ContentCarousel;
