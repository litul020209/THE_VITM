# 🎓 VITM Institute Web Application (Version 2.0)

**VITM.tech** is a comprehensive digital platform designed to modernize VITM Institute's online presence — improving accessibility, communication, and convenience for students, faculty, staff, and applicants.  
The system includes Admissions, Examination & Results Management, Syllabus Access, Events & Announcements, Staff & Faculty profiles, Live Bus Tracking and more.

---

## ☁️Hosted 

1. [Students Portal] https://vitm.tech/
2. [Conductor Portal] https://conductor.vitm.tech/
3. [Institute Admin] Managed by backend(ExcelSheet)

## 🔨 Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E44D26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFCC21?style=for-the-badge&logo=javascript&logoColor=black)
![AppScript](https://img.shields.io/badge/Apps_Script-2098AA?style=for-the-badge&logo=google&logoColor=white)
![Google API](https://img.shields.io/badge/Google_API-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)

---

## 🔍 Table of Contents
- [About](#-about)
- [Modules & Features](#-modules--features)
- [Screenshots](#-screenshots)
- [Database Overview](#-database-overview)
- [Installation & Run](#-installation--run)
- [Deployment Notes](#-deployment-notes)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📝 About

VITM.tech (Version 2.0) is built to elevate the digital operations of VITM Institute by offering a centralized and interactive portal for academic & administrative workflows. Key aspects include secure form submission, OTP email verification, fee management, live bus tracking (Leaflet), faculty directories, and more.

---

## ✨ Modules & Features

**Student / Public-facing**
- Home page with dynamic banners & announcements
- Admissions: eligibility info, application form, **Email OTP** verification
- Syllabus & Academic Resources: search & downloads by course/semester
- Downloads: academic forms (PDF)
- Examination & Results: exam schedules, secure result pages (mid-sem & semester)
- Student Fee Management: view fee structure, due amount, online payment flow
- Gallery: campus & event images
- Events & Announcements: RSVP/registration and event details
- Bus Routes & Live Tracking: view routes and live bus location on map (Leaflet)
- Contact & Support: inquiry form + Google Maps campus location

**Admin / Faculty / Conductor**
- Admin/Staff login & dashboard
- Manage admission requests (approve/decline)
- Login as user (for support/debug)
- Manage results, exams, and announcements
- Conductor portal: manage bus route & update status

**Security & Utility**
- Email OTP verification for critical forms
- Custom error pages
- `robots.txt` for crawler control
- Logs or notifications for critical system events (optional)

---

## Flow Chart
![Flow Chart](https://github.com/user-attachments/assets/19a87cdd-fff9-462f-922a-df99fdd65046)


## ER Diagram
![ER_Diagram](https://github.com/user-attachments/assets/84a37cf7-b306-48b9-9f0c-af0537882d95)



## 🖼 Screenshots


### Homepage / Banners
![Homepage banner](https://github.com/user-attachments/assets/be3ed7f7-60cb-4e29-ac90-8e71edea6923)



### Gallery
![Gallery](https://github.com/user-attachments/assets/9e018c82-cdb1-4c52-bf30-21f097998057)


### Staff & Faculty
![Faculty & Staff](https://github.com/user-attachments/assets/19363976-aa0c-480a-a6b4-cf77ad533374)


### Courses & Admissions
![Courses & Admissions](https://github.com/user-attachments/assets/8cd6f14b-143b-464f-aeb7-a42375dc60d8)


### Syllabus Search
![Syllabus Search](https://github.com/user-attachments/assets/713381f4-42a1-4e88-af85-f605d5bdb6d7)


### Results Page
![Results](https://github.com/user-attachments/assets/d9e739b7-ba4f-42d6-ae5e-8d58759a8b90)


### Job / Career Portal
![Jobs](https://github.com/user-attachments/assets/d085ec1d-60bc-4fa4-b00f-22032c6d8060)


### Fee Payment
![Fee Payment](https://github.com/user-attachments/assets/5e1ed82d-c784-4eed-a4e1-98f3e2d4c7c9)


### Live Bus Tracking
![Bus Tracking](https://github.com/user-attachments/assets/c4440bf6-ba82-46c3-95fc-7ab831f3dd92)

![Bus Tracking](https://github.com/user-attachments/assets/9a166098-3e40-4f20-97c7-b49118424f5f)


### Email OTP 

![Bus Tracking](https://github.com/user-attachments/assets/372708fe-ec35-4324-802e-69643fb7aa8b)


### Conductor Login
![Conductor login](https://github.com/user-attachments/assets/2ba9e345-2ce7-402d-b286-45cbf2be59af)

### Conductor Dashboard
![Conductor login](https://github.com/user-attachments/assets/3215a89c-877d-4f6f-8c87-5c6aa9c3ba34)











---

## 🗄 Database Overview

Key tables (suggested schema summary):

- **students**
  - `student_id` (PK), `name`, `email`, `mobile`, `program`, `branch`, `semester`, `password_hash`, `created_at`

- **faculty**
  - `faculty_id` (PK), `name`, `department`, `designation`, `email`, `contact`, `profile`

- **courses**
  - `course_id` (PK), `title`, `course_code`, `branch`, `semester`, `syllabus_url`

- **exams**
  - `exam_id` (PK), `course_id` (FK), `date`, `exam_type`, `semester`

- **results**
  - `result_id` (PK), `student_id` (FK), `exam_id` (FK), `marks`, `grade`, `remarks`

- **admissions**
  - `application_id` (PK), `student_details_json`, `status`, `otp_verified`, `applied_at`

- **fees**
  - `fee_id` (PK), `student_id` (FK), `fee_category`, `amount`, `paid_amount`, `due_amount`

- **bus_routes**
  - `route_id` (PK), `route_name`, `stops_json`, `conductor_id`

- **bus_live**
  - `bus_id`, `route_id`, `lat`, `lng`, `last_updated`

> This README intentionally summarizes. For production, include migration scripts or SQL DDL files in `/db` folder.

---

## ⚙ Installation & Run (Local)

> These steps assume a static front-end (HTML/CSS/JS) + Apps Script / API back-end or simple static hosting. Adjust for your project specifics.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>



## Cost of project 
<img width="2001" height="1187" alt="image" src="https://github.com/user-attachments/assets/05ad04c1-5266-4e85-ae62-04542205e785" />


## Feedback

⭐ If you like this project, give it a star on GitHub!

