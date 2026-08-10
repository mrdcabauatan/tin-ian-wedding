import "./Gallery.css";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const set1 = Object.entries(
  import.meta.glob("../../assets/gallery/set1/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  )
  .map(([, image]) => image);

const set2 = Object.entries(
  import.meta.glob("../../assets/gallery/set2/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  )
  .map(([, image]) => image);

const gallerySets = [
  {
    number: "01",
    caption: "Moments Along the Way",
    photos: set1,
  },
  {
    number: "02",
    caption: "A Prelude to Forever",
    photos: set2,
  },
];

function GalleryModal({ gallery, onClose }) {
  const { photos: galleryPhotos, caption } = gallery;

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const intervalRef = useRef(null);

  const changeSlide = useCallback(
    (direction) => {
      setFade(true);

      setTimeout(() => {
        setCurrent((prev) => {
          if (direction === 1) {
            return prev === galleryPhotos.length - 1 ? 0 : prev + 1;
          }

          return prev === 0 ? galleryPhotos.length - 1 : prev - 1;
        });

        setFade(false);
      }, 250);
    },
    [galleryPhotos.length],
  );

  const next = useCallback(() => {
    clearInterval(intervalRef.current);

    changeSlide(1);

    intervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 6000);
  }, [changeSlide]);

  const previous = useCallback(() => {
    clearInterval(intervalRef.current);

    changeSlide(-1);

    intervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 6000);
  }, [changeSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 4000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [changeSlide]);

  const getIndex = (offset) => {
    return (current + offset + galleryPhotos.length) % galleryPhotos.length;
  };

  return (
    <div className="gallery-modal">
      <button
        className="gallery-modal-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <div className="gallery-modal-content">
        <div className="gallery-modal-heading">
          <h3>{caption}</h3>
        </div>
        <div className="gallery-modal-carousel-wrapper">
          <button
            className="gallery-modal-arrow"
            onClick={previous}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="gallery-modal-carousel">
            {galleryPhotos.length > 2 && (
              <img
                src={galleryPhotos[getIndex(-2)]}
                className="gallery-modal-image gallery-modal-far-left"
                alt=""
              />
            )}

            {galleryPhotos.length > 1 && (
              <img
                src={galleryPhotos[getIndex(-1)]}
                className="gallery-modal-image gallery-modal-left"
                alt=""
              />
            )}

            <img
              src={galleryPhotos[current]}
              className={`gallery-modal-image gallery-modal-center ${
                fade ? "gallery-fade-out" : "gallery-fade-in"
              }`}
              alt={`${caption} photo`}
            />

            {galleryPhotos.length > 1 && (
              <img
                src={galleryPhotos[getIndex(1)]}
                className="gallery-modal-image gallery-modal-right"
                alt=""
              />
            )}

            {galleryPhotos.length > 2 && (
              <img
                src={galleryPhotos[getIndex(2)]}
                className="gallery-modal-image gallery-modal-far-right"
                alt=""
              />
            )}
          </div>

          <button
            className="gallery-modal-arrow"
            onClick={next}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        <div className="gallery-modal-dots">
          {[0, 1, 2].map((dot) => {
            const lastIndex = galleryPhotos.length - 1;

            let isActive = false;

            if (dot === 0) {
              // First photo
              isActive = current === 0;
            } else if (dot === 1) {
              // Middle photos
              isActive = current > 0 && current < lastIndex;
            } else {
              // Last photo
              isActive = current === lastIndex;
            }

            return (
              <button
                key={dot}
                className={
                  isActive ? "gallery-modal-dot active" : "gallery-modal-dot"
                }
                onClick={() => {
                  if (dot === 0) {
                    setFade(true);
                    setTimeout(() => {
                      setCurrent(0);
                      setFade(false);
                    }, 250);
                  } else if (dot === 1) {
                    const middleIndex = Math.floor(lastIndex / 2);

                    setFade(true);
                    setTimeout(() => {
                      setCurrent(middleIndex);
                      setFade(false);
                    }, 250);
                  } else {
                    setFade(true);
                    setTimeout(() => {
                      setCurrent(lastIndex);
                      setFade(false);
                    }, 250);
                  }
                }}
                aria-label={
                  dot === 0
                    ? "First photo"
                    : dot === 1
                      ? "Middle photos"
                      : "Last photo"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <section className="gallery-section section-page" id="gallery">
      <div className="gallery-container section-container">
        <h2 className="gallery-title section-title">Our Love Story</h2>

        <div className="gallery-blocks">
          {gallerySets.map((gallery, index) => (
            <article className="gallery-block" key={gallery.number}>
              <div className="gallery-block-image">
                {gallery.photos.length > 0 && (
                  <img src={gallery.photos[0]} alt={gallery.caption} />
                )}

                <div className="gallery-image-overlay" />
              </div>

              <div className="gallery-block-content">
                <span className="gallery-number">{gallery.number}</span>

                <h3>{gallery.caption}</h3>

                <button
                  className="gallery-view-button"
                  onClick={() => setActiveGallery(index)}
                >
                  <span>View Photos</span>
                  <span className="gallery-button-arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="gallery-quote">
          "Every love story is beautiful, but ours is our favorite."
        </p>
      </div>

      {activeGallery !== null && (
        <GalleryModal
          gallery={gallerySets[activeGallery]}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
