Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.94, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.082236837977518 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1.18, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.84, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 14.5, range: [0, 100] },
    },
    gooey: true,
});


var i = 1;
var animating = false;
main.onclick = () => {
    var setter = i;


    if (!animating) {
        animating = true;
        gsap.to(`.elem h1:nth-child(${i})`, {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: () => gsap.to(`.elem h1:nth-child(${setter})`, { top: "100%", duration: 0 })
        })
        i > 4 && (i = 1)
        i++;
        gsap.to(`.elem h1:nth-child(${i})`, {
            top: "0",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: () => animating = false
        })
    }
};