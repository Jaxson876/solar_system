# Orbit — Solar System Explorer

A dependency-free, responsive interactive solar system. Open `dist/index.html` in a modern browser, or serve `dist` with `python3 -m http.server 8000 --directory dist`.

Drag to rotate the 3D camera, scroll to zoom, and choose a planet to read its facts. Canvas keyboard controls: arrows rotate, +/− zoom, Space pauses, 0 resets. Planet buttons provide keyboard-accessible selection.

The scene projects 3D orbital coordinates onto a 2D canvas and uses procedurally shaded spherical illustrations. Display sizes and orbital distances are compressed for readability; the physical-model calculator uses a consistent real-world scale. Orbits are circular, coplanar illustrations with arbitrary starting positions, not an ephemeris. Relative orbital periods follow the listed values. Reduced-motion preferences pause the animation initially.

The five-question quiz covers planet size, order, colour, Earth’s diameter, and Saturn’s rings. Choose all five answers to receive a score and explanations, then use Try again to reset the quiz. Answers stay in the browser and are not stored.

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
