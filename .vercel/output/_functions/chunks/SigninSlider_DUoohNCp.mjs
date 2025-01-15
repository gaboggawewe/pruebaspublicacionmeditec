import { jsxs, jsx } from 'react/jsx-runtime';
import { marked } from 'marked';
import { useState, useRef } from 'react';
import SwiperCore from 'swiper';
/* empty css                          */
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SigninSlider = ({ title }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6 lg:block", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "absolute left-0 top-0 h-full w-full",
        src: "/images/login-banner-bg.png",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full text-center mt-10", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "h3 text-white mt-10",
          dangerouslySetInnerHTML: { __html: marked.parse(title) }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "auth-banner-carousel", children: [
        /* @__PURE__ */ jsx(
          Swiper,
          {
            pagination: {
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true
            },
            onSwiper: (swiper2) => {
              setSwiper(swiper2);
            },
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            children: /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
              "img",
              {
                width: "667",
                height: "557",
                className: "mx-auto mt-10",
                src: "/images/DSC_0319.JPG",
                alt: ""
              }
            ) }, "feature-0")
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            width: "100%",
            className: " pagination",
            style: { width: "100%" },
            ref: paginationRef
          }
        ) })
      ] })
    ] })
  ] });
};

export { SigninSlider as S };
