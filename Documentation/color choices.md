# Website Design Document: Tranquil Portfolio

## 1. Concept & Aesthetic

I tried to remake one of my favorite scenes from hollow knight.
A tranquil scene with a lone charming bench with a luminecent waterfall overrun with green vegetation and fireflies giving light to pastel colors.
I hope to make this portfolio as relaxing as the scene I described, making people want to stay on it for a relaxing scroll through my work as software developer.

The core identity of this personal developer website is rooted in tranquility, depth, and organic flow. Inspired by secluded, lush water environments, the design aims to project a sense of calm competence. As a software developer, this aesthetic communicates thoughtful problem-solving, clarity, and a stress-free user experience. 

The visual language relies heavily on a dark-mode foundation, layered with deep aquatic greens and illuminated by crisp, crystalline blues.

---

## 2. Color Palette & Usage

### Base Background
* **Black (`#0D0D0D`)**
    * **Usage:** The primary canvas for the entire website. This near-black provides a deep, restful backdrop that reduces eye strain and allows the lighter accent colors to glow naturally. 
    * **Application:** `body` background, primary container backgrounds.

### Structural & Depth Colors
* **Dark Green (`#2D5F73`)**
    * **Usage:** Used to create subtle elevation and separation from the base black. It acts as the shadows and deep waters of the interface.
    * **Application:** Card backgrounds (at lowered opacities, e.g., `rgba(45, 95, 115, 0.2)`), subtle borders, footer backgrounds, and inactive UI elements.

* **Medium Green (`#3B848C`)**
    * **Usage:** A transitional color that bridges the dark background and the bright accents.
    * **Application:** Hover states for cards, secondary buttons, muted text elements, and blockquote borders.

### Accent & Interactive Colors
* **Light Green (`#44A69C`)**
    * **Usage:** The primary action color. It carries enough saturation to draw the eye without breaking the tranquil atmosphere.
    * **Application:** Primary buttons, Section Headings (`<h2>`, `<h3>`), active navigation links, and important icons.

* **Light Blue (`#9CD9D3`)**
    * **Usage:** The highest contrast color in the palette. It acts as the "light" hitting the water.
    * **Application:** Primary body text, text links, code syntax highlighting, and delicate visual accents (like thin divider lines).

### The "Flow" Gradient
* **Gradient (`linear-gradient(135deg, #234051 0%, #3B9397 50%, #010103 100%)`)**
    * **Usage:** Represents the dynamic, flowing nature of water. It adds visual interest to large, otherwise empty areas.
    * **Application:** Hero section background, call-to-action banners, and decorative header borders.

---

## 3. Typography Recommendations

To maintain the clean, modern feel of a software developer while respecting the tranquil theme, the typography should be highly legible and unornamented.

* **Primary Font (Headings & Body):** *Inter*, *Roboto*, or *Nunito Sans*. These sans-serif fonts are highly readable on dark backgrounds.

* **Monospace Font (Code Blocks):** *Fira Code* or *JetBrains Mono*. Essential for showcasing developer projects and code snippets cleanly.

* **Text Weights:**
    * Body Text: Regular (400)
    * Subheadings: Medium (500)
    * Main Headings: Bold (700) - Keep letter-spacing slightly loose for a modern feel.

---

## 4. UI Components & Elements

### Buttons

* **Primary Button:**
    * Background: `#44A69C` (Light Green)
    * Text: `#0D0D0D` (Black)
    * Hover State: Background shifts to `#9CD9D3` (Light Blue) with a subtle glow `box-shadow: 0 0 10px rgba(156, 217, 211, 0.4)`.

* **Secondary/Outline Button:**
    * Background: Transparent
    * Border: 2px solid `#3B848C` (Medium Green)
    * Text: `#9CD9D3` (Light Blue)
    * Hover State: Background fills with `#3B848C`.

### Content Cards (For Projects/Portfolio)
Cards should feel like they are floating slightly above the dark background.

* **Background:**
`rgba(45, 95, 115, 0.15)` (Dark Green, 15% opacity)

* **Border:**
1px solid `#2D5F73` (Dark Green)

* **Border Radius:**
8px to 12px (soft edges mimic organic shapes)

* **Hover Effect:**
Border transitions to `#44A69C` (Light Green), background opacity increases to 25%, and the card lifts slightly on the Y-axis.

### Navigation Bar
* **Style:**
Transparent at the top of the page, blending into the Hero Gradient.

* **Scroll State:**
As the user scrolls down, the nav bar should gain a solid `#0D0D0D` background with an 80% opacity and a backdrop blur (glassmorphism effect) to maintain the feeling of depth.

---

## 5. Layout & Spacing Principles

* **Generous Whitespace (Negative Space):** 
To keep the site feeling peaceful, avoid clutter. Use large margins between sections (e.g., 100px) and ample padding within cards.

* **Transitions:** 
All interactive elements (hovers, clicks) should have a smooth, slow CSS transition (e.g., `transition: all 0.3s ease-in-out`). This prevents sudden, jarring changes, reinforcing the calm aesthetic.

* **Imagery:**
If using photos or illustrations, overlay them with a blend mode (like `multiply` or `overlay`) using the Dark Green (`#2D5F73`) to ensure they match the palette and don't introduce harsh, contrasting colors.