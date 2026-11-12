# Bright Rootes | Modern Dental Care & Clinic

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![RemixIcon](https://img.shields.io/badge/Remix_Icons-5.9.0-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

A premium, responsive dental clinic web application designed for **Bright Rootes**. Located in New York City, Bright Rootes combines clinical mastery with compassionate patient care, offering advanced preventative, cosmetic, restorative, and round-the-clock emergency dental treatments.

---

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Contact & Location Directory](#-contact--location-directory)
- [Key Features](#-key-features)
- [Clinical Services](#-clinical-services)
- [Project Architecture](#-project-architecture)
- [Quick Start Guide](#-quick-start-guide)
- [Browser Compatibility](#-browser-compatibility)
- [License & Credits](#-license--credits)

---

## 🏥 About the Project

**Bright Rootes** is engineered to provide an intuitive, calming, and high-conversion digital presence for a state-of-the-art dental practice. The website highlights the clinic's core philosophy—gentle, pain-free dentistry backed by cutting-edge dental technology such as 3D CBCT digital imaging, intraoral laser scanners, and soothing operatory environments.

---

## 📞 Contact & Location Directory

Bright Rootes offers multiple dedicated communication channels, including primary reception desks and alternative emergency lines for urgent patient care:

| Channel / Type | Primary Detail | Alternative / Emergency Detail |
| :--- | :--- | :--- |
| **Brand Name** | **Bright Rootes Dental Clinic** | **Bright Rootes Emergency Care** |
| **Physical Address** | 450 Lexington Avenue, Suite 1400<br>New York, NY 10017 | *Landmark:* Near Grand Central Terminal |
| **Telephone Desk** | **+1 (212) 555-0149**<br>*(Front Desk, Appointments & Inquiries)* | **+1 (800) 274-4487**<br>*(24/7 Dental Emergency Hotline)* |
| **Email Support** | [info@brightrootes.com](mailto:info@brightrootes.com)<br>*(General Queries & Consultations)* | [care@brightrootes.com](mailto:care@brightrootes.com)<br>*(Patient Care & Priority Support)* |
| **Operating Hours** | **Mon – Fri:** 8:00 AM – 7:00 PM<br>**Saturday:** 9:00 AM – 4:00 PM | **Sunday:** Emergency On-Call Desk *(24/7 Available)* |

---

## ✨ Key Features

- **24/7 Emergency Header Quick-Dial**: Prominent header link enabling patients to call the emergency desk with a single click.
- **Interactive Appointment Booking Form**: Clean form allowing patients to select procedures, preferred appointment dates, times, and enter symptom descriptions.
- **Instant Client-Side Feedback**: Form submission triggers an immediate, friendly confirmation banner without page refreshes.
- **Comprehensive Clinic Contact Card**: Dedicated contact matrix presenting clinic location, operating hours, dual phone numbers, and dual email addresses.
- **Animated Fullscreen Drawer Menu**: Modern sliding drawer navigation with integrated quick-contact shortcuts for mobile and tablet users.
- **Adaptive Responsive Design**: Fluid layout tailored for desktop monitors, iPads/tablets, and mobile smartphones.
- **Visual Micro-Animations**: Smooth scale-on-hover effects on service cards, operatory photography, and interactive buttons.

---

## 🦷 Clinical Services

1. **General Dentistry**
   - Preventative cleanings & ultrasonic scaling
   - Comprehensive digital exams & low-radiation X-rays
   - Periodontal gum disease care & cavity fluoride therapy

2. **Cosmetic Dentistry**
   - Professional laser teeth whitening
   - Custom-crafted porcelain veneers & laminates
   - Clear aligners & smile symmetry makeovers

3. **Restorative Dentistry**
   - Permanent biocompatible titanium dental implants
   - Painless single-visit root canal treatments
   - High-strength ceramic & zirconia crowns

4. **Emergency Dental Care**
   - Immediate relief for acute toothaches and abscesses
   - Repair for chipped, fractured, or dislodged teeth
   - 24/7 on-call triage and urgent appointments

---

## 📁 Project Architecture

```text
Bright-Rootes/
│
├── index.html            # Main semantic HTML5 webpage with Bright Rootes branding & contact suites
├── README.md             # Project documentation, contact matrix, and setup guide
├── cursor.png            # Custom cursor asset
│
├── assets/               # Media and graphic assets
│   ├── candid.jpg        # Patient consultation photo
│   ├── Dentist.jpg       # Operatory clinician portrait
│   ├── Dental_Implant.jpg# Dental implant treatment graphic
│   ├── landing.png       # Hero section featured graphic
│   ├── medical.png       # Modern operatory clinic equipment
│   ├── background.jpg    # Page background textures
│   ├── back.jpg          # Section backgrounds
│   ├── PATIENT.jpeg      # Patient testimonial portrait
│   └── patient.avif      # Optimized patient avatar
│
└── src/                  # Stylesheets and script logic
    ├── style.css         # Core CSS design system, typography, cards & layouts
    ├── mobile.css        # Responsive media queries for mobile (<680px) and tablet (<1000px)
    └── script.js         # Navigation menu drawer logic & appointment booking handler
```

---

## 🚀 Quick Start Guide

### Option 1: Using NPM (Recommended)
You can start the local live development server using npm:

```bash
# Start local live development server (opens at http://localhost:3000)
npm run dev

# Or start the static production server
npm start
```

### Option 2: Direct Browser Launch
Simply double-click `index.html` or right-click and choose **Open With > Google Chrome** (or any modern browser).

### Option 3: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **Open with Live Server**.
4. The site will launch automatically at `http://127.0.0.1:5500/index.html`.

### Option 4: Using Python HTTP Server
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Browser Compatibility

Tested and fully compatible across all modern web browsers:
- Google Chrome (Desktop & Mobile)
- Apple Safari (macOS & iOS)
- Mozilla Firefox
- Microsoft Edge
- Opera & Brave

---

## 📜 Credits & License

- **Design & Original Code**: [Bharadwaja Sahoo](https://www.instagram.com/rick_u_/)
- **Branding & Contact Architecture**: **Bright Rootes Dental Clinic**
- **Icons**: [Remix Icon](https://remixicon.com/)
- **Images**: Licensed via Unsplash & Medical Asset Library
