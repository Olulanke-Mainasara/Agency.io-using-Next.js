"use client";

import React from "react";

import { useLocation } from "@/hooks/useLocation";

import CarouselSkeleton from "../UI/Carousel/CarouselSkeleton";
import SharedPageEstablishmentCarousel from "../UI/Carousel/SharedPageEstablishmentCarousel";

const RecommendedCitySpots = () => {
  const {
    isGeolocationEnabled,
    isConfirmed,
    userLocation,
    availableEstablishments,
    loading,
  } = useLocation();

  if (!isGeolocationEnabled || isConfirmed === "false") {
    return null;
  }

  console.log("Cowboy");

  return loading ? (
    <CarouselSkeleton side="items-end" />
  ) : (
    <section className="flex flex-col gap-8 xl:py-8">
      <h1 className="px-6 text-4xl text-right md:text-5xl xl:px-8">
        Recommended{" "}
        <span className="text-brandDark dark:text-brandLight">spots in</span>{" "}
        {userLocation.address.city.split(" ")[0]}
      </h1>
      <SharedPageEstablishmentCarousel items={availableEstablishments} />
    </section>
  );
};

export default RecommendedCitySpots;
