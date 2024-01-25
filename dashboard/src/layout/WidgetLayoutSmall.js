import React from "react";
import Weather from "../pages/Weather";

export const WidgetLayoutSmall = ({ weather }) => {
  return (
    <>
      <section className="widget-container small">
        {/* Pass the weather variable to the Weather component */}
        <Weather weather={weather} />
      </section>
    </>
  );
};

export const WidgetLayoutHalf = ({}) => {
  return (
    <>
      <section className="widget-container half">
        <h2>WidgetLayoutHalf</h2>
      </section>
    </>
  );
};

export const WidgetLayoutWide = ({}) => {
  return (
    <>
      <section className="widget-container wide">
        <h2>WidgetLayoutWide</h2>
      </section>
    </>
  );
};
