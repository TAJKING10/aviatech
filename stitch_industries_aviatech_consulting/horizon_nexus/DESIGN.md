# Design System Documentation: Precision Aerospace Editorial

## 1. Overview & Creative North Star
### The Creative North Star: "Aerospace Precision"
This design system is built upon the concept of **Aerospace Precision**. In aviation technology, there is no room for clutter; every element must be intentional, high-performance, and sophisticated. We move away from the "generic corporate template" by embracing an editorial layout style that prioritizes massive whitespace (the "Stratosphere"), technical typography, and asymmetric balance. 

The goal is to evoke the feeling of a high-end flight deck—minimalist yet deeply informative. We achieve this through "The Layered Atmosphere," where depth is created not by lines, but by subtle shifts in tonal elevation and glass-like transparency.

---

## 2. Colors & Tonal Architecture
The palette transitions from the deep, authoritative vacuum of space to the clean, crisp light of high-altitude flight.

### The "No-Line" Rule
To maintain a premium, modern aesthetic, **1px solid borders are strictly prohibited for sectioning or containment.** Physical boundaries must be defined solely through:
1.  **Background Color Shifts:** Moving from `surface` (#f6f9ff) to `surface_container_low` (#eef4fc).
2.  **Tonal Transitions:** Utilizing the `surface_container` tiers to distinguish content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Content should be "docked" within surfaces that reflect their priority:
*   **Base Layer:** `surface` (#f6f9ff).
*   **Secondary Content:** `surface_container` (#e8eef6).
*   **Floating Technical Cards:** `surface_container_lowest` (#ffffff) on top of `surface_container_low`.

### The "Glass & Gradient" Rule
For floating navigational elements or hero overlays, apply **Glassmorphism**. Use semi-transparent `surface` colors with a `backdrop-filter: blur(20px)`. 
*   **Signature Textures:** Main CTAs should not be flat. Use a subtle linear gradient from `primary` (#0059bb) to `primary_container` (#0070ea) at a 135-degree angle to provide a sense of "technological soul" and directional movement.

---

## 3. Typography: The Editorial Voice
Our typography pairing balances the technical rigidity of aviation with the approachable nature of a high-end consultancy.

*   **Headlines (Manrope):** Use `display-lg` and `headline-lg` for high-impact statements. Manrope’s geometric structure feels engineered yet modern. Use intentional asymmetry by left-aligning large headlines and offsetting them against right-aligned body copy to break the "standard grid."
*   **Body & Technical Data (Inter):** Use `body-md` for all long-form content. Inter provides the "Instrument-grade" readability required for technical competence.
*   **Label Styling:** Use `label-md` with `uppercase` styling and `letter-spacing: 0.1rem` for categories and small headers to mimic aerospace cockpit labeling.

---

## 4. Elevation & Depth
Depth in this system is "Atmospheric," meaning it feels like natural light passing through layers rather than artificial dropshadows.

### The Layering Principle
Avoid shadows for standard cards. Instead, use "Tonal Lift." Place a `surface_container_highest` element inside a `surface_container_low` parent. This creates a soft, sophisticated distinction that feels integrated into the architecture.

### Ambient Shadows
When a component must float (e.g., a primary modal or a global navigation bar), use **Ambient Shadows**:
*   **Color:** Use the `on_surface` (#161c22) token at 5% opacity.
*   **Values:** `0px 20px 40px`. The large blur radius mimics diffused light at high altitudes.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., in input fields), use a **Ghost Border**. Apply the `outline_variant` token at **15% opacity**. Never use 100% opaque borders as they disrupt the fluid, airy feel of the layout.

---

## 5. Components

### Buttons: The Flight Controls
*   **Primary:** Gradient of `primary` to `primary_container`. Large padding (`spacing-3` vertical, `spacing-6` horizontal). Corner radius: `md` (0.375rem).
*   **Secondary:** No background. Use a `Ghost Border` and `on_surface` text. On hover, transition to `surface_container_high`.
*   **Tertiary:** Text-only using `primary` color with a `spacing-1` underline that expands on hover.

### Input Fields: Technical Entry
*   **Surface:** Use `surface_variant`. 
*   **Focus State:** Shift background to `surface_container_lowest` and apply a 1px `Ghost Border` using the `primary` token.
*   **Label:** Use `label-sm` positioned strictly above the field, never as a placeholder.

### Cards & Lists: The Data Modules
*   **Constraint:** Divider lines are forbidden. 
*   **Separation:** Use `spacing-8` of vertical white space or a subtle shift to `surface_container_low`. 
*   **Interaction:** On hover, a card should not grow; instead, the background should shift from `surface_container` to `surface_container_highest` with a smooth 300ms transition.

### Contextual Navigation (Breadcrumbs/Chips)
Use `surface_container_high` for chips with `label-md` text. These should feel like small "toggles" found in a cockpit.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place an image in the center-right and the headline in the top-left to create a dynamic, editorial flow.
*   **Use Generous Whitespace:** Utilize `spacing-20` and `spacing-24` between major sections to let the "technical" content breathe.
*   **Focus on Hierarchy:** Ensure `display-lg` is significantly larger than `body-lg` to create a clear entry point for the eye.

### Don't:
*   **Don't use 1px dividers:** If you feel the need to separate content, increase the `spacing` token instead.
*   **Don't use pure black:** Always use `on_background` (#161c22) for text to maintain a softer, high-end feel.
*   **Don't clutter the grid:** Avoid "Three-Column Feature Rows." Instead, try a staggered "Two-One" layout where one element takes up 66% of the width for an editorial look.
*   **Don't use sharp corners:** While we are "technical," we are not "brutalist." Always use at least the `DEFAULT` (0.25rem) or `md` (0.375rem) roundedness.