"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { StyleSheet, Text, View } from "react-native";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import ColorSelector from "@/components/MainContent/ColorSelector";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type ProductId = "product-1" | "product-2" | "product-3";

export const slides: Record<ProductId, string[]> = {
  "product-1": [
    "/images/speaker/black1.webp",
    "/images/speaker/black2.webp",
    "/images/speaker/black3.webp",
  ],
  "product-2": [
    "/images/speaker/cream1.webp",
    "/images/speaker/cream2.webp",
    "/images/speaker/cream3.webp",
  ],
  "product-3": [
    "/images/speaker/brown1.webp",
    "/images/speaker/brown2.webp",
    "/images/speaker/brown3.webp",
  ],
};

const ProductSlider: FC = () => {
  const [activeProduct, setActiveProduct] = useState<ProductId>("product-1");
  const [, setCurrentSlideIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  const handleColorChange = (productId: ProductId) => {
    setActiveProduct(productId);

    setCurrentSlideIndex(0);

    swiperInstance?.slideTo(0);
  };

  return (
    <View style={styles.sliderWrapper}>
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        style={styles.slider}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
      >
        {slides[activeProduct].map((image: string, index: number) => (
          <SwiperSlide
            key={`${activeProduct}-${index}`}
            style={styles.sliderSlide}
          >
            <View style={styles.imageWrapper}>
              <Image
                src={image}
                alt={`Product ${activeProduct} - ${index + 1}`}
                style={styles.sliderImage}
                fill
                sizes="100vw"
                priority={index === 0}
                // width={347}
                // height={216}
              />
            </View>
          </SwiperSlide>
        ))}
      </Swiper>

      <ColorSelector
        activeProduct={activeProduct}
        onChange={handleColorChange}
      />

      <Text
        style={{
          fontSize: 29,
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        £9,99
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    position: "relative",
    width: "100%",
    overflow: "hidden",

    marginBottom: 30,
  },
  slider: {
    width: "100%",
  },
  sliderSlide: {
    position: "relative",
    width: "100%",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: 1,
  },
  sliderImage: {
    objectFit: "contain",
  },
});

export default ProductSlider;
