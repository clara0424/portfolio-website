# Clara Juong Portfolio Website

A personal portfolio website with animated elements, project showcases, and a modern design.

## Setup Instructions

### 1. Add Your Images

You need to add your images to the `images/` folder. The website expects the following image files:

**Carousel Images (8 images):**
- `images/image1.jpg`
- `images/image2.jpg`
- `images/image3.jpg`
- `images/image4.jpg`
- `images/image5.jpg`
- `images/image6.jpg`
- `images/image7.jpg`
- `images/image8.jpg`

**Project Thumbnails (8 images):**
- `images/project1.jpg`
- `images/project2.jpg`
- `images/project3.jpg`
- `images/project4.jpg`
- `images/project5.jpg`
- `images/project6.jpg`
- `images/project7.jpg`
- `images/project8.jpg`

### 2. Customize Project Details

Edit `project.js` to update project information:
- Project titles
- Project descriptions
- Tools used for each project
- Hero images for project detail pages

### 3. Update Contact Links

In `index.html`, update the contact links:
- Instagram: Update `href` in `#link-instagram`
- Email: Update `mailto:` link in `#link-email`
- LinkedIn: Update `href` in `#link-linkedin`

### 4. Update About Section

Edit the bio text in `index.html` in the `#section-about` section.

### 5. View Your Website

Open `index.html` in your web browser, or use a local server:

```bash
cd /Users/jeonghyewon/clara-juong-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Features

- **Animated Name**: "CLARA" fades in/out in the top-left corner, "JUONG" in the bottom-right
- **Image Carousel**: 8 images rotate automatically on the main page (2/3 page height)
- **Project Grid**: 8 projects displayed in a 2-column grid
- **Project Detail Pages**: Click any project to see full-screen hero image and details
- **Hover Effects**: Smooth color transitions on all interactive elements
- **Montserrat Font**: All text uses the Montserrat font family
- **Responsive Design**: Works on desktop and mobile devices

## File Structure

```
clara-juong-portfolio/
├── index.html          # Main page
├── project.html        # Project detail page template
├── styles.css          # Main styles
├── project.css         # Project detail page styles
├── script.js           # Main page JavaScript
├── project.js          # Project detail page JavaScript
├── images/             # Image assets folder
└── README.md           # This file
```

