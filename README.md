# 📝 Omabell — Multi-Step Registration Form

A modern, accessible, and responsive multi-step registration form featuring client-side validation, internationalization (**i18n**), right-to-left (**RTL**) layout support, and dynamic state/LGA lookups.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌟 Key Features

- **Multi-Step Flow**: Organized two-step registration wizard with progress indicators and keyboard navigation.
- **Multilingual Support (i18n)**:
  - Instant in-memory switching between **English**, **French (Français)**, **Spanish (Español)**, **Arabic (العربية)**, and **German (Deutsch)**.
  - Zero external translation latency or API dependencies.
  - Full **RTL (Right-to-Left)** bidirectional layout support for Arabic, with automatic CSS logical properties and layout mirroring.
- **Comprehensive Form Validation**:
  - Real-time field validation with accessible error messaging (`aria-live="polite"`).
  - Minimum age verification (enforces 16+ years minimum and 120 years maximum).
  - Strict pattern checking for passwords, NIN (National Identification Number), and phone numbers.
  - Real-time password strength meter and matching confirmation check.
- **Dynamic & Conditional Fields**:
  - Contextual fields reveal smoothly based on user choices (disability details, marital status, children count).
  - Asynchronous location autocompletion for Nigerian states/LGAs and global countries via REST APIs.
- **Dark & Light Modes**: Seamless system preference detection using `prefers-color-scheme`.
- **Form Delivery**: Serverless submission ready via [FormSubmit](https://formsubmit.co).

---

## 📂 Project Structure

```text
.
├── index.html          # Semantic HTML structure with data-i18n hooks and accessibility attributes
├── style.css           # Modern design system, responsive grids, dark/light themes, and RTL layout rules
├── script.js           # Multi-step state management, dynamic validation, and DOM manipulation
└── translations.js     # Bundled dictionary containing UI strings for all 5 languages
```

---

## 🚀 Getting Started

### Local Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/omarademola/My-form-validation.git
   ```
2. Navigate into the project folder:
   ```bash
   cd My-form-validation
   ```
3. Open `index.html` in your browser or run a local dev server (e.g. using VS Code Live Server).

---

## 🌐 Deploying to Vercel

You can deploy this repository to **Vercel** with zero configuration:

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Import the **`My-form-validation`** repository.
4. Keep the default settings (Framework Preset: **Other**) and click **Deploy**.
5. Your project will be live in seconds with a custom `.vercel.app` URL and automatic deployments on every commit.

---

## ♿ Accessibility (a11y) & UX Considerations

- Full screen-reader support via explicit `<label>` bindings, descriptive `aria-describedby` links, and live error announcements.
- Keyboard-navigable custom autocompletion menus (with `ArrowUp`, `ArrowDown`, `Enter`, and `Escape` key handlers).
- Respects user accessibility preferences (`prefers-reduced-motion`).

---

## 👤 Author

Created by **Omabell** / [@omarademola](https://github.com/omarademola).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use and adapt.

