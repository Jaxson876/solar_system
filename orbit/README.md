# Orbit — Solar System Explorer

A dependency-free, responsive interactive solar system. Open `dist/index.html` in a modern browser, or serve `dist` with `python3 -m http.server 8000 --directory dist`.

Drag to rotate the 3D camera, scroll to zoom, and choose a planet to read its facts. Canvas keyboard controls: arrows rotate, +/− zoom, Space pauses, 0 resets. Planet buttons provide keyboard-accessible selection.

The scene projects 3D orbital coordinates onto a 2D canvas and uses procedurally shaded spherical illustrations. Display sizes and orbital distances are compressed for readability; the physical-model calculator uses a consistent real-world scale. Orbits are circular, coplanar illustrations with arbitrary starting positions, not an ephemeris. Relative orbital periods follow the listed values. Reduced-motion preferences pause the animation initially.

The ten-question quiz starts with planet size, order, colour, Earth’s diameter, and Saturn’s rings, then adds five harder questions about rotation periods, axial tilt, moons, density, and Mercury’s spin-orbit resonance. Choose all ten answers to receive a score and explanations, then use Try again to reset the quiz. Answers stay in the browser and are not stored.

The Sun section includes approximate diameter, age, photospheric/core temperatures, mean distance from Earth, mass, rotation, and surface gravity, with facts about fusion and solar activity.

## Sources and conventions

- https://nssdc.gsfc.nasa.gov/planetary/factsheet/ — equatorial diameters, mean distances, approximate temperatures and axial tilt.
- https://ssd.jpl.nasa.gov/planets/phys_par.html — sidereal orbital and rotation periods, masses and equatorial gravity.
- https://science.nasa.gov/solar-system/planets/ — overview and linked planet profiles.

Temperatures are rounded reference values, with gas/ice giant values referring to atmospheric levels rather than a solid surface. Negative rotations indicate retrograde rotation. Moon examples are provided instead of rapidly changing total counts. Planet colours are illustrative and procedural patterns are not geographical maps. Google Fonts is optional; system sans-serif fonts work offline. No third-party JavaScript or build step is required.

### Sun sources

- https://science.nasa.gov/sun/facts/
- https://radiojove.gsfc.nasa.gov/education/sun/basics/material/sunfacts.htm
- https://www.esa.int/Science_Exploration/Space_Science/The_Sun

### Hard quiz question sources

- https://science.nasa.gov/venus/venus-facts/
- https://science.nasa.gov/uranus/facts/
- https://science.nasa.gov/jupiter/jupiter-moons/ganymede/facts/
- https://science.nasa.gov/saturn/facts/
- https://science.nasa.gov/mercury/facts/

The orbital view includes representative moons: Earth’s Moon; Phobos and Deimos; Io, Europa, Ganymede, and Callisto; Enceladus and Titan; Titania and Oberon; and Triton. Moon sizes, separations, and speeds are illustrative for visibility. Select a planet to see its moon labels. The Labels control also hides moon names. Pause and speed affect moon animation, and destroy/restore removes and restores moons with their planet.

Moon references: https://science.nasa.gov/jupiter/jupiter-moons/ and https://science.nasa.gov/saturn/moons/ (also see linked NASA planet profiles above).

The orbital cannon supports pointer/touch aiming, arrow keys (Shift for fine aiming), and Space/Enter or the Fire button to shoot. The cannon has unlimited shots. It destroys the selected planet and its moons once about 70% of the visible surface has been chipped away. The damage percentage tracks the combined area of the holes, so overlapping hits cause less new damage. Shots into space or existing holes miss. Chunk damage persists in the orbit view; Restore repairs all worlds. Reduced-motion mode applies impacts without the projectile animation.

Planet image textures are by Solar System Scope (https://www.solarsystemscope.com/textures/), licensed CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). They are adapted with spherical projection and simulated lighting. Some unmapped areas are reconstructed; colours are illustrative. Procedural graphics remain as loading/offline-error fallbacks.

Planet maps rotate visibly around each globe while the lighting stays fixed, with deeper day/night shadows. Spin rates are exaggerated for visibility; Venus and Uranus rotate in the opposite direction. Pause, speed, and reduced-motion settings also control spin.

The Sun uses the Solar System Scope Sun texture with emissive rendering, limb shading, and an illustrated corona. Warm colours enhance the surface detail. The strike aircraft uses a swept-wing silhouette, engine nacelles, cockpit glazing, panel lines, and metallic shading.

Visual effects use layered smoke particles for the mushroom cloud, articulated shaded miniature people, and separate debris bursts as the Sun shockwave reaches each planet. These are artistic effects, not a scientific explosion model.
