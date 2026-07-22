# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA

---

# English Janala — Interactive Language Learning Platform

> A comprehensive, modern, and responsive web application engineered to facilitate English vocabulary acquisition, pronunciation practice, and structured learning for Bengali-speaking students.

---

## 📋 Executive Summary

**English Janala** is an educational technology (EdTech) front-end application built to provide interactive language-learning modules. The platform interfaces with RESTful APIs to deliver dynamic lesson levels, granular vocabulary cards, detailed lexical modals with contextual examples and synonyms, and an accessible FAQ support structure.

---

## 🏗️ Architectural Overview & Core Features

* **Dynamic Curriculum Management:** Asynchronously consumes backend endpoints to dynamically initialize and render lesson modules and sub-levels on-the-fly.
* **Component-Driven Vocabulary Rendering:** Employs JavaScript DOM manipulation to map vocabulary arrays into responsive structural cards with robust fallback handlers for missing data points.
* **Asynchronous Word Detail Modal:** Leverages modern JavaScript (`async/await`, Fetch API) to query specific lexical entries, injecting structured breakdowns (Meanings, Phonetic Pronunciations, Contextual Usage, and Tagged Synonyms).
* **Responsive Layout Design:** Built with a mobile-first philosophy utilizing modern CSS Grid and Flexbox mechanics via Tailwind CSS and DaisyUI.
* **Localized Typography:** Seamless dual-language rendering integrating Latin alphabets (*Poppins*, *Outfit*) alongside Bengali regional scripts (*Hind Siliguri*).

---

## 🛠️ Technology Stack

* **Core Markup:** HTML5 (Semantic Structure)
* **Styling & Frameworks:** Tailwind CSS, DaisyUI, Custom CSS
* **Scripting Language:** Vanilla JavaScript (ES6+, DOM Manipulation, Asynchronous Networking)
* **Iconography & Fonts:** Font Awesome, Google Fonts API

---

## 📂 Project Repository Structure

```text
english-janala/
├── assets/             # Graphical branding elements, logos, and state icons
├── scripts/
│   └── index.js        # Core application logic, event handlers, and API integration
├── style.css           # Custom styling enhancements and overrides
└── index.html          # Main application document entry point
