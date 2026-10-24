import { PhotoStackGallery } from "./photo-stack-gallery";
import { galleryPhotos } from "@/content/gallery";
import local from "./home-sections.module.css";

export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative isolate overflow-hidden bg-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-30" />
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className={local.eyebrow}>POSTCARDS FROM OUR COMMUNITY</p>
          <h2
            id="gallery-title"
            className="mb-6 text-4xl font-black tracking-wider text-gray-900 md:text-6xl"
          >
            OUR GALLERY
          </h2>
          <p className="text-xl text-gray-600 md:text-2xl">
            Good people. New ideas. A little Bangalore magic.
          </p>
        </div>
        <div className="mx-auto mt-8 h-[340px] max-w-6xl sm:h-[480px] lg:h-[620px]">
          <PhotoStackGallery photos={galleryPhotos} />
        </div>
        <p className={local.galleryNote}>
          <span>BLR</span> Different backgrounds. One very curious city.
        </p>
      </div>
    </section>
  );
}
