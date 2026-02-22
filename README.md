GasTech

End-to-End IoT-Based Smart Gas Monitoring, Alerting, and Management System

GasTech is a production-oriented IoT platform that integrates hardware sensing, embedded processing, cloud infrastructure, and a web-based management system to enable real-time LPG gas monitoring, reporting, and alerting.

The system is designed as a scalable, modular, and cloud-connected product, suitable for residential and small-scale commercial gas safety applications.

Live Web System: https://gastech.online

Deployment Model: Cloud-hosted (Vercel) with CI/CD
Backend: Firebase Realtime Database

1. Product Description

GasTech provides continuous monitoring of LPG gas cylinder levels using sensor-based weight measurement, processes the data on an ESP32 microcontroller, stores it in a real-time cloud database, and exposes the data to a web application and SMS-ready alerting logic.

The product addresses limitations of traditional gas monitoring by enabling:

Automated measurement (no manual checking)

Real-time cloud synchronization

Remote access via web

Alert-ready architecture for low-gas and safety conditions

2. Problem Statement

Conventional LPG usage monitoring systems suffer from:

Manual and inaccurate estimation of gas levels

Delayed awareness of cylinder depletion

Lack of centralized reporting

No real-time alerting mechanism

Poor integration with modern digital platforms

GasTech eliminates these limitations by providing a fully automated IoT-based solution with cloud and web integration.

3. System Architecture (High Level)
Load Cell Sensor
      ↓
HX711 Signal Amplifier & ADC
      ↓
ESP32 Microcontroller
      ↓
Wi-Fi Connectivity
      ↓
Firebase Realtime Database
      ↓
Web Application (GasTech)
      ↓
Alert & SMS Logic

The architecture follows industry IoT design principles:

Edge sensing

Embedded processing

Cloud data persistence

Client-side visualization and logic

4. Hardware Components
Component	Purpose
Load Cell Sensor	Measures LPG cylinder weight
HX711 Module	24-bit ADC and signal amplification
ESP32	Data processing, Wi-Fi communication
Power Supply	Stable operation of ESP32 and sensors
5. Software Components
5.1 Embedded Layer

ESP32 firmware (Arduino framework)

HX711 calibration and weight computation

Wi-Fi networking

Firebase data publishing

5.2 Cloud Layer

Firebase Realtime Database

Structured real-time gas usage data

Event-driven updates

5.3 Web Application Layer

Real-time data visualization

Gas usage reporting

Contact and SMS-ready alert logic

Authentication UI

Responsive and animated UI components

6. Technology Stack
Hardware

Load Cell Sensor

HX711 ADC Module

ESP32 Microcontroller

Embedded Software

Embedded C / Arduino Framework

HX711 Library

Firebase ESP Client

Web Technologies

HTML5

CSS3

JavaScript (ES6)

Cloud & DevOps

Firebase Realtime Database

Git & GitHub

Vercel (CI/CD & Hosting)

7. Data Flow (Detailed)

Load cell measures LPG cylinder weight

HX711 converts analog signal to digital data

ESP32 processes and calibrates weight values

ESP32 transmits data to Firebase via Wi-Fi

Firebase stores and syncs data in real time

Web application reads live data

Reports, thresholds, and alert logic are applied

SMS and notification workflows are triggered (API-ready)

8. Web Application Structure
gastech/
│
├── index.html              # Product landing page
├── about.html              # System and product overview
├── contact.html            # Contact information
├── login.html              # Authentication interface
├── app.html                # Main dashboard
├── report.html             # Gas usage reports
├── preport.html            # Report preview
├── addContacts.html        # Contact & SMS management
│
├── css/                    # Modular stylesheets
│
├── js/
│   ├── app.js              # Core dashboard logic
│   ├── login.js            # Authentication logic
│   ├── firebase.js         # Cloud data interface
│   ├── addContacts.js      # SMS/contact logic
│   ├── pdf.js              # Report export logic
│   ├── navActive.js        # Navigation state handling
│   ├── cursor.js           # UI interaction effects
│   ├── lpgScrollAnim.js    # Domain-specific animations
│   └── cylinderScroll.js   # Visualization effects
│
└── README.md
9. Key Product Features
Real-Time Gas Monitoring

Continuous cylinder weight tracking

Accurate consumption analysis

Cloud-Backed Data Storage

Firebase real-time synchronization

Low-latency updates

Reporting System

Digital gas usage reports

Preview and export-ready architecture

Alert & SMS-Ready Design

Contact management

Threshold-based alert logic

Easily extendable to third-party SMS APIs

Professional UI/UX

Responsive design

Interactive animations

Clean navigation and layout

10. Local Development (Web Module)
Prerequisites

Modern web browser

Git (optional)

Setup
git clone https://github.com/edwinthomas-tech/gastech.git
cd gastech

Open index.html directly or use a local development server.

11. Deployment Model

The web system uses continuous deployment.

Workflow

Code pushed to main branch

Vercel automatically builds

Deployment published to gastech.online

No manual deployment steps required.

12. Scalability & Future Enhancements

SMS gateway integration (Twilio / Fast2SMS)

Mobile application

IoT analytics dashboard

Predictive gas consumption using ML

Leak detection sensor integration

Role-based access control

Commercial-grade alerting workflows

13. Author

Edwin Thomas
Computer Science & Engineering

GitHub: https://github.com/edwinthomas-tech

14. License

This project is developed for academic, research, and prototyping purposes.
Commercial use requires appropriate modification, validation, and compliance.
