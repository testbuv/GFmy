"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

declare global {
  interface Window {
    google?: typeof google;
  }
}

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["maps"],
      });

      await loader.importLibrary("maps");

      const position = {
        lat: 51.514882,
        lng: -0.123571,
      };
     
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
      };

      const map = new window.google.maps.Map(mapRef.current!, mapOptions);

      new window.google.maps.Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}