(function () {
  'use strict';

  // 1. FORCE SCROLL TO TOP
  window.scrollTo(0, 0);

  // 2. GET PROJECT ID FROM URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  // 3. PROJECT DATA
  const projects = {
    project15: {
      title: 'Live Coding: Team Smoking Caterpillar',
      description: '<strong>Date of Creation:</strong> May 2025.<br><br><strong>Role:</strong> Coded both the visuals and music; for the day of the final performance, I was in charge of the Tidal code with my partner Jiho.<br><br><strong>Context of the project:</strong>This performance was our final project that put all of the skills that we have learned throughout the semester to a test. The entire performance was about 8 minutes long, and Jiho and I were in charge of live coding the Tidal (audio), while Adilbek and Jannah coded the Hydra (visual).<br><br><strong>Highlights of the project:</strong> The main theme of our piece was Alice in Wonderland with a few twists here and there by adding some random visuals and sounds instead of following the original story in a linear way. There were 3 main phases to our piece, with each phase building up on top of the previous phase:<br><br>Phase #1: We started with black-and-white visuals because we wanted to give a strong contrast between the beginning and the ending of our piece; and to match these mysterious, calm visuals, the music composition was also quieter and slower in pace.<br><br>Phase #2: Here, we began to include very obvious Alice references (i.e. video and audio of the door closing and opening, teacups, Alice in Wonderland soundtrack, etc.), and having the Cheshire cat appear both visually and sonically in the audio composition was the signal that we will be transitioning into Phase 3. Phase 2 was a mix of black-and-white and colored visuals, but with more variance and energy compared to Phase 1 both in visuals and music.<br><br>Phase #3: This was the craziest phase in our composition, and because we wanted to make this part the most engaging, we included a lot of fast beats and loud melodies.<br><br>Despite all of these transitions between phases, we tried to keep the main theme of mysterious, outworldly, fantastical, and intriguing vibes going.',
      image: 'images/coding1.png',
      tools: ['Pulsar', 'Supercollider', 'Tidal'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/coding3.png', caption: 'Phase 1 of our piece; we only used black-and-white visuals primarily composed of circles, waves, and lines.' },
        { src: 'images/coding4.png', caption: 'Phase 2 of our piece; because this was a transition phase from Phase 1 into Phase 3, which are two total opposite levels of energy, this phase was a mixture of both phases so there were more vibrance and intricate patterns.' },
        { src: 'images/coding2.png', caption: 'And finally, in Phase 3 we went all out, and we tried to make this phase as disorienting, chaotic, and high-energy as much as possible, using many rotations and colors as well as fast-paced beats and layering many different audio samples to create this "chaotic discomfort" for the viewers.' },
      ]
    },
    project14: {
      title: 'UI/UX Design: Eclipse Soundscape',
      description: '<strong>Date of Creation:</strong> December 2024.<br><br><strong>Role:</strong> Created wireframes and mock-up demos of the Eclipse Soundscape website.<br><br><strong>Context of the project:</strong> As our final project for a class called UX Design that I took back in New York, our team pitched how we can revise the homepage of the website of a company called Eclipse Soundscape to increase its user-friendliness and its accessibility.<br><br><strong>Highlights of the project:</strong> Here are some main edits we made on the homepage:<br><br>1) Revisions we made on the existing homepage features: the main edits we made were making a header with all the subsections within the page, as well as aligning all the text boxes and the buttons so that they were the same length. We also made the buttons and texts bigger so that they were more visible. We also revised it so that the user will clearly know which subsection of the homepage they are located in currently.<br><br>2) Adding in accessibility features into the homepage: we tried to accomodate users who might have color blindness by changing the original color palette of orange and black that the website had into other colors (i.e. navy + yellow) that has high contrast but also are still somewhat similar to the original palette. We also added titles and descriptions of each image as alt texts that will appear in the cases where those photos cannot appear due to technical difficulties. Finally, we also added an audio feature that will read out the text on the website for those who have visual impairment.',
      image: 'images/7.png',
      tools: ['Figma', 'Canva'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/ui2.png', caption: 'We first began by sketching out the wireframes of the website that entails all the UX revisions we were going to make on its design.' },
        { src: 'images/ui3.png', caption: 'Then we created a header with all the subsections of the homepage, and also made sure there will be a clear indication of which subsection the user is located in. We also added an audio button for those with visual impairment so that they can listen to the text on the website.' },
        { src: 'images/ui4.png', caption: 'Across the entire homepage, we enlarged all the texts and the buttons so that all of them are aligned and spaced out evenly on the screen.' },
        { src: 'images/ui5.png', caption: 'We also paid extra attention to small details such as keeping the size and alignment of the titles the same across the homepage, as well as removing images that had illustrated figures and replaced them with more professional, real-life images.' },
        { src: 'images/ui8.png', caption: 'Accessibility simulator was the first accessibility check that we did on this website, which proved our fears that this website is not user-friendly towards those who have color blindness, which prompted us to make changes accordingly by revising the website color palette.' },
        { src: 'images/ui6.png', caption: 'Checking the contrast across pages was the next accessibility check we did, which the website already did not have particular problems with.' },
        { src: 'images/ui7.png', caption: 'The last accessibility check was using the Adee comprehensive accesibility tool, which led us to alter the titles and descriptions for each image so that even if images cannot appear on the screen due to some technical difficulties, the user will still be able to understand what the image and content is about by reading the alt text description.' },
      ]
    },
    project13: {
      title: 'Performing Robots: the Best Friend',
      description: '<strong>Date of Creation:</strong> December 2025.<br><br><strong>Role:</strong> In charge of programming, building, and fabricating the entire robot.<br><br><strong>Context of the project:</strong> This was a semester-long project that my partner and I have been working on for a class called Performing Robots. Everyone in the class were paired up, and each pair was responsible for building one robot from scratch that is able to perform at least 2-3 actions and can also be driven and controlled by a controller. We were in charge of building the "Best Friend" robot, which is one of the characters in the play that we have written as a class that will be performed at the end of the year Interactive Media showcase.<br><br><strong>Highlights of the project:</strong> Our robot, the Best Friend, had the following as her main actions: 1) Waist rotation from left to right; 2) Elbow bend and raise; 3) Fingers clacking; 4) LED eyebrow strips that will turn on and off based on the dialogues that the robot was performing; when the strips are on, it gives the illusion that the eyebrows of the robot are raised.<br><br><strong>The end result & reflection of the project:</strong> This was a project that I wanted to take on since freshman year, and while juggling and learning all sorts of skills such as engineering, coding, fabricating, and even writing the script was definitely a challenge, this class helped me get out of my comfort zone and not be afraid of physical computing.<br><br><strong>Additional documentation:</strong> I have documented my entire semester-long journey of building this robot and uploaded this journal on my Github, which can be accessed by clicking this link: https://github.com/clara0424/performingrobots.git',
      image: 'images/7.png',
      tools: ['Hume AI', 'Arduino', 'C++', 'Circuits, motors, controllers, LED strips, etc.'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/1.png', caption: '' },
        { src: 'images/2.png', caption: '' },
        { src: 'images/3.png', caption: '' },
        { src: 'images/5.png', caption: '' },
        { src: 'images/7.png', caption: '' },
        { src: 'images/8.png', caption: '' },
        { src: 'images/6.png', caption: '' },
        { src: 'images/4.png', caption: '' }
      ]
    },
    project2: {
      title: 'Scent to Remember',
      description: '<strong>Date of Creation:</strong> December 2024.<br><br><strong>Role:</strong> Wrote and illustrated the entire plot of this two-minute short animation film.<br><br><strong>Context of the project:</strong> This animation was created as my final project of the Introduction to Animation Techniques class that I took in New York during my study away semester. To me, animation is a great outlet to let your wildest imaginations come to life that are not possible in reality; and because I have always been intrigued about the idea of what it would be like to wear a scent in a literal manner, I decided to base my film on this imagination.<br><br><strong>The end result & reflection of the project:</strong> While there were some difficulties in mastering new applications such as Harmony and Adobe After Effects, I was glad to finally create a completed animation film on my own where even the smallest details in it was made and created by me; I worked on the storyboard, the plot, sketches, and the coloring process, as well as the sound effects that I added into the film, which were voice recorded by myself.',
      image: 'images/project2.gif',
      tools: ['Harmony', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Illustrator', 'Adobe Premiere Pro'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/brand2.png', caption: 'Final color palette for the FM Lab.' },
        { src: 'images/brand3.png', caption: 'Final logo for the FM Lab.' },
        { src: 'images/brand4.png', caption: 'Final apparel designs for the FM Lab.' },
        { src: 'images/brand5.png', caption: 'Sketches page #1 our team has done for the logo brainstorming.' },
        { src: 'images/brand6.png', caption: 'Sketches page #2 our team has done for the logo brainstorming.' },
        { src: 'images/brand7.png', caption: 'Brainstorming process of different fonts for typography.' }
      ]
    },
    project3: {
      title: 'Consent Not Guaranteed',
      description: '<strong>Date of Creation:</strong> May 2025.<br><br><strong>Role:</strong> In charge of ideating the hand gestures & fabrication.<br><br><strong>Context of the project:</strong> This was a team project for a class called Communication and Technology that eventually got selected for Ars Electronica 2025 in Linz, Austria. This project stemmed from asking the question of "what if robots have a mind of their own, and can decide whether to accept or reject us?" Consent Not Guaranteed is a speculative robotic installation that challenges the traditional hierarchy between humans and machines. By subverting the expectation of robotic servitude, the piece features an autonomous arm that exercises its own "will"—alternating between compliance, refusal, and command. Cloaked in rosary beads and vein-like wiring, the work blends historical automaton aesthetics with modern anxiety, echoing the Ars Electronica: PANIC! theme by questioning a future where human control is no longer absolute.<br><br><strong>The end result & reflection of the project:</strong> Because this was a non-verbal project, we needed to communicate only through the 3 different hand gestures that we have carefully selected, which all mean refusal across various cultures. And because there are also glitches as the fingers switch between the gestures, there is a factor of unpredictability that catches the viewers off guard and thus making them feel like they are not in control but are only meant to receive and accept whatever actions the robot arm provides.',
      image: 'images/project3.png',
      tools: ['Adobe Photoshop', 'Blender', 'Arduino', 'C++'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/robot1.jpg', caption: 'A prototype of a glove that we initially idealized in the beginning that will be attached to the robotic hand; created in Blender.' },
        { src: 'images/robot2.jpg', caption: 'Fabrication process of the arm using discarded wire cords, beads, etc.' },
        { src: 'images/project3-3.jpg', caption: 'The final fabrication process of the arm, where we used scrap wires to glue on top of the arm structure.' },
        { src: 'images/robot3.jpg', caption: 'The final look of our robot arm.' }
      ]
    },
    project5: {
      title: 'Perfume Palette',
      description: '<strong>Date of Creation:</strong> April 2024.<br><br><strong>Role:</strong> Coder.<br><br><strong>Context of the project:</strong> This was a website that I created as my final project for a class called Augmenting Gallery in Berlin; I decided to create a website that would be an introductory to the perfumery world.<br><br><strong>Highlights of the project:</strong> The website has 5 different pages, which are: Home (includes my contacts), Introduction (basic introduction of what perfumes are), Geography (the specific perfume characteristics and trends of each region of the world), History (how perfumes have evolved over time), and Process (the different steps of creating a perfume).<br><br><strong>The end result & reflection of the project:</strong> While I have tried coding websites before, this was new because it was my first time using React to create a website. I had loads of fun trying to think of creative ways of interaction for the user when navigating through the website so that even those who are new to the world of perfumery/are not as interested in the topic can be intrigued and still enjoy their time exploring my website.',
      image: 'images/project5.jpg',
      tools: ['React', 'Procreate', 'Capcut'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/perfume.png', caption: 'The initial landing home page of the website.' },
        { src: 'images/perfume1.png', caption: 'As you scroll to the bottom of the home page, you will find my contacts, which will be accessible by clicking on each of the three perfume bottles.' },
        { src: 'images/perfume2.png', caption: 'The introduction page of the website.' },
        { src: 'images/perfume3.png', caption: 'The geography page of the website where you can click each of the three flowers on the map and you will be able to learn more about the perfume trends and characteristics of that region.' }
      ]
    },
    project4: {
      title: 'Sinseon-noreum',
      description: '<strong>Date of Creation:</strong> December 2023.<br><br><strong>Role:</strong> Coder.<br><br><strong>Context of the project:</strong> Sinseon-noreum in Korean is a phrase that refers to an immortal who is free from worldly stress and is enjoying their time in a supernatural world, and during my ideation process for this project, I wanted to recreate this traditional Korean paradise utilizing visuals and audio. This was a final project created for a class titled Commuication Lab, and it is a a self-coded interactive media art piece made using p5.js.<br><br><strong>Highlights of the project:</strong> Some highlight features of this project are: 1) The two main interactive features are blooming the flowers on screen by pressing on the screen with your mouse/dragging your mouse across the screen, and also creating your own soundscape by triggering 5 different audio clips that will play and pause whenever you press the designated keys (all of these audio clips are traditional Korean music clips). 2) Everything on the screen that is coded through p5.js is interactive, even those that you cannot actively manipulate - for example, the floating yellow particles will float away from wherever you place your mouse on the screen, and the branches will also grow in length and number. 3) There are two different "worlds" or landscapes in this project, where you can alter between an ancient or a modern day Korea background via "Landscape Change" button (located on the bottom right corner of the screen) to experience what it feels like to maintain our traditional arts into current modern day period. 4) You can also take a screenshot of the visuals you have created by using the "Take Screenshot" button on the bottom right corner of the screen.<br><br><strong>The end result & reflection of the project:</strong> This project ended up being an interactive piece in which the user can create its own visual landscape and audio soundscape by either pressing on designated keys or pressing on the screen with your mouse. I wanted the users to experience what it feels like to orchestrate a traditional Korean music and prove that while many things have changed between ancient and modern day Korea, the spirit and love we harbor for our music and arts still remain the same regardless.',
      image: 'images/project4.jpg',
      tools: ['p5.js'],
      galleryItems: [
        { src: 'images/tree1.jpg', caption: 'The initial instructions home page that the user will be directed to in the beginning.' },
        { src: 'images/tree2.png', caption: 'The branches will be relatively empty without flowers when the user is first redirected into this world.' },
        { src: 'images/tree3.png', caption: 'The user can drag across the screen to bloom multiple flowers at once, or can click on the screen to create individual flowers.' },
        { src: 'images/tree4.png', caption: 'Finally, this is the modern Korea cityscape at night as the background that appears once the user presses on the "Change Landscape" button.' }
      ]
    },
    project6: {
      title: 'Burst in a Bubble',
      description: '<strong>Date of Creation:</strong> December 2023.<br><br><strong>Role:</strong> Coder.<br><br><strong>Context of the project:</strong> This was a final project created for a class called Decoding Nature, created using p5.js. This design was later plotted onto an A3 paper using a 2D pen plotter, and both the digital coded project as well as the physical pen plotted product were showcased at the end of the year Interactive Media showcase.<br><br><strong>Highlights of the project:</strong> Some key visual elements I want to highlight are: 1) each time you click your mouse on the screen, the pattern of the circle in the middle as well as the outer circles that are formed by the wave lines that surround the middle circle are all regenerated. 2) You can click on the screen, and this will generate more outer circles made of wave forms, allowing you to layer them. 3) all of the elements in this project will leave their traces, which will all add to the visual of the project.<br><br><strong>The end result & reflection of the project:</strong> In this class we were required to experiment with creative coding on p5.js, and I was inspired by this idea of a star explosion in space to create this project.',
      image: 'images/project6.jpg',
      tools: ['p5.js', '2D Pen Plotter'],
      galleryItems: [
        { src: 'images/burst.png', caption: 'The more clicks you perform on the screen, the more outer waves you will generate, all the while the inner circle as well as the small bursts of circles will all be regenerated simultaneously.' }
      ]
    },
    project12: {
      title: 'Tiptoeing Eighteen',
      description: '<strong>Date of Creation:</strong> October 2021.<br><br><strong>Role:</strong> Writer, illustrator.<br><br><strong>Context of the project:</strong> This was my very first book that I have finished and published, and this was an independent project that I decided to do on my own. I was inspired by the autobiography that Rowan Blanchard wrote as a teenager, and I wanted to commemorate my eighteenth year in life by writing a book about my thoughts, routines, and struggles in a diary format. All the illustrations and writing of this book were hand-drawn and hand-written by me in Procreate and Affinity Photo, and then I formatted them into an A5 book layout in Affinity Publisher.',
      image: 'images/image12.jpg',
      tools: ['Procreate', 'Affinity Photo', 'Affinity Publisher'],
      galleryItems: [
        { src: 'images/1.jpg', caption: 'The front and back covers of the book; illustrations done by me.' },
        { src: 'images/2.jpg', caption: 'A few pages of illustrations taken from the book.' },
        { src: 'images/3.jpg', caption: 'Some more pages of illustrations taken from the book.' }
      ]
    },
    project7: {
      title: 'Tribute: MAK Class of 2022',
      description: '<strong>Date of Creation:</strong> May 2022.<br><br><strong>Role:</strong> Writer, illustrator.<br><br><strong>Context of the project:</strong> This book was created and published as my capstone project in my senior year of high school. I decided to write a short novel about my class of 2022 classmates who I grew up with since middle school. Because there were 20 of us, I sent out a survey asking a few specific questions about their hobbies, favorite food, etc., and then used that information to create a personalized illustration for each of them. Each student had a section of writing and a page of illustration as well as their pictures in the book. The books were distributed and sold within the school community, and all the earnings went to charity.',
      image: 'images/project7.jpg',
      tools: ['Procreate', 'Affinity Photo', 'Affinity Publisher'],
      galleryItems: [
        { src: 'images/front.jpg', caption: 'The front and back covers of the book; the front cover entails all the faces of our graduating class students drawn in a character style, and the back cover includes all of their signatures.' },
        { src: 'images/inside.jpg', caption: 'These are a few examples of the illustration pages that were done for each student.' },
      ]
    },
    project8: {
      title: 'Farewell, Taiwan',
      description: '<strong>Date of Creation:</strong> May 2021.<br><br><strong>Role:</strong> Illustrator, painter.<br><br><strong>Context of the project:</strong> This was a series of watercolor paintings that were commissioned as a farewell gift for a staff family that was leaving Taiwan.',
      image: 'images/project8.jpg',
      tools: ['Watercolor', 'Watercolor Paper', 'Fineliners'],
      galleryItems: [
        { src: 'images/watercolor1.png', caption: 'First painting of the series; this depicts a traditional fruits market in Taiwan.' },
        { src: 'images/watercolor2.png', caption: 'Second painting of the series; this depicts a typical Taiwanese traditional porch.' },
        { src: 'images/watercolor3.png', caption: 'Third painting of the series; this depicts the famous tourist spot called "Red Lantern District" in Jiufen, which is a neighborhood located in Taipei, Taiwan.' },
      ]
    },
    project9: {
      title: 'Visual Identity Project',
      description: '<strong>Date of Creation:</strong> November 2025.<br><br><strong>Role:</strong> Typography, color palette, and sticker merchandise designer.<br><br><strong>Context of the project:</strong> In a team of five, each of the teams in our Graphic Design class came up with their own brand identity and guidelines for a real-life client, which is a lab called FM Lab in the University of Sydney. Each team was responsible for creating a branding design of the lab that would be adhering to the spirit and purpose of the lab, and all teams pitched their visual identity and branding guidelines at the end of November.<br><br><strong>My approach to the project:</strong> Us as a team collectively thought we can first brainstorm altogether and then slowly delegate the tasks once we agreed on the general big guidelines such as the mood of the color, the logo designs, etc., and by delegating the tasks we hoped it will make the process more efficient. As for the design choices, after back to back conversations with the FM lab team, we decided that the best approach would be to adhere to the wants and needs of the lab while also adding our own artistic taste and flair to it, which resulted in using teal and aquamarine blues for the colors (which was what the lab liked) and also pairing a calmer, more academic font with the more stylistic one that we chose.<br><br><strong>The end result of the project:</strong> By the end, we had a cohesive color palette, typography, merchandise, as well as suggestions for branding for this Lab while also mixing our own twist to it, such as by balancing it out with teal, blue, or purple one.<br><br><strong>A reflection on the project:</strong> Overall, I learned that it is important to know when to set your foot down as a designer or when to listen to the client and try to reach a compromise, because without communication, it is very difficult for designers to guess what they want. If I were to do it all over again, I would make sure that we communicate with the client as early on as possible and also pitch our ideas to them without being afraid because that is the most direct way we can learn.',
      image: 'images/brand1.png',
      tools: ['Adobe InDesign', 'Affinity', 'Adobe Illustrator', 'Procreate'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/brand2.png', caption: 'Final color palette for the FM Lab.' },
        { src: 'images/brand3.png', caption: 'Final logo for the FM Lab.' },
        { src: 'images/brand4.png', caption: 'Final apparel designs for the FM Lab.' },
        { src: 'images/brand5.png', caption: 'Sketches page #1 our team has done for the logo brainstorming.' },
        { src: 'images/brand6.png', caption: 'Sketches page #2 our team has done for the logo brainstorming.' },
        { src: 'images/brand7.png', caption: 'Brainstorming process of different fonts for typography.' }
      ]
    },
    project10: {
      title: 'Design History Booklet',
      description: '<strong>Date of Creation:</strong> November 2025.<br><br><strong>Role:</strong> Designer.<br><br><strong>Context of the project:</strong> This project required us to design a short, visually engaging publication that introduces a single, narrow topic from design history. The only guideline that we had to follow was that our works must use the principles of design to balance original written content and visual material in a clear and coherent way, thus making the history both understandable and interesting.<br><br><strong>My approach to the project:</strong> For this booklet, I tried to incorporate the French Art Nouveau art style into my booklet design because that was a dominant art style that Jules Cheret, who was the topic of my booklet, used. I tried to keep the color theme, the typography, as well as the French Art Nouveau design elements consistent throughout my booklet in order to increase clarity and ease in comprehension.<br><br><strong>The end result of the project:</strong> The final outcome was a booklet consisting of 8 pages that had three main sections: 1) Biography and the French Art Nouveau, 2) Important Artworks, and 3) His Impact on Graphic Design, as well as the front and back covers. I ended up keeping the long, flowy, and curvy plant designs consistent throughout all of the pages, and because I chose a more stylistic font for the titles, I settled on a more common, less-stylistic font for longer texts and paragraphs.<br><br><strong>A reflection on the project:</strong> I learned a lot about Adobe InDesign in terms of utilizing all the basic tools as well as more advanced tools such as curving texts. I also learned a lot about how to create layouts for booklets as well as formatting the pages in a way so that when they are printed and binded together, the right pages are facing each other. I think the one thing I would change if I were to redo this would be to figure out the printing process as early on as possible, because for some reason the biggest difficulty to me was formatting the pages so that they would appear correctly when printed and binded. I would also incorporate more negative space in the booklet pages, because this was a recurring feedback I received from my classmates.',
      image: 'images/book5.png',
      tools: ['Adobe InDesign', 'Procreate', 'Adobe Illustrator'],
      galleryClass: 'horizontal-gallery',
      galleryItems: [
        { src: 'images/book1.png', caption: 'The front and back cover of the booklet.' },
        { src: 'images/book2.png', caption: 'An example of how a section looked like in the booklet with laid out in two pages that are facing each other.' },
        { src: 'images/book3.png', caption: 'Another example of a section pulled from the booklet.' },
        { src: 'images/book6.png', caption: 'Brainstorming sketches made for patterns, colors, and typography of the booklet.' },
        { src: 'images/book7.png', caption: 'Finalizing the color palette for the booklet.' },
        { src: 'images/book8.png', caption: 'Inspirations that were gathered for the typography of the booklet.' }
      ]
    },
    project11: {
      title: 'Design Vocabulary Poster',
      description: '<strong>Date of Creation:</strong> October 2025.<br><br><strong>Role:</strong> Designer.<br><br><strong>Context of the project:</strong> This project required the creation of an original poster that visually represents a core, assigned graphic design concept in a clear and creative way. The final poster design was produced using 2–4 color Riso printing methods.<br><br><strong>My approach to the project:</strong> In the beginning, I was brainstorming ideas such as infinity signs, continuing ripples, etc. to represent my assigned word, which was "Repetition." However, later I noticed that there are repeating letters in the word "Repetition" itself, so I decided to create a patterned design out of these repeating letters, which were E, T, and I. I thought this would be a clever way to incorporate the literal letters that make up the word "Repetition," but also make the meaning of the word much clearer through the design by using repetition in the design itself. I also wanted to experiment with overlapping Riso colors when printing, so I ended up using the colors pink, yellow, and blue, and overlapped a few letters so that they produced green, purple, and orange.<br><br><strong>The end result of the project:</strong> I ended up successfully producing all 6 colors (3 original Riso colors and 3 resulting from the overlap of these original colors), and I think the chaotic look that all of these vibrant colors come together to create makes the poster have an organized chaos that results from repeated letters, which was a goal I was trying to achieve.<br><br><strong>A reflection on the project:</strong> I learned that Riso printing is not as easy as it seems, and that it takes multiple trials and errors before you can achieve the specific look that you are aiming for. It takes a lot of precision and patience, as well as being able to make real-time adjustments to the design if necessary. I do not think I will change anything about the process or the product other than getting started on the Riso printing earlier.',
      image: 'images/poster9.png',
      tools: ['Adobe InDesign', 'Canva', 'Riso Printing'],
      galleryItems: [
        { src: 'images/poster11.png', caption: 'Mockup #1 of my final poster design being shown on a digital tablet.' },
        { src: 'images/poster4.png', caption: 'Final poster design created for the Design Vocabulary Poster project.' },
        { src: 'images/poster10.png', caption: 'Mockup #2 of my final poster design being shown in a frame.' },
        { src: 'images/poster1.png', caption: 'Sketches page #1 I\'ve done for the poster design brainstorming.' },
        { src: 'images/poster2.png', caption: 'Sketches page #2 I\'ve done for the poster design brainstorming.' },
        { src: 'images/poster3.png', caption: 'Riso printed version of my final poster design.' }
      ]
    }
  };

  // 4. FUNCTION TO INJECT GALLERY
  function loadProjectGallery(project) {
    const galleryContainer = document.getElementById('dynamic-project-gallery');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = ''; 

    if (project.galleryItems && project.galleryItems.length > 0) {
      const customClass = project.galleryClass ? project.galleryClass : '';
      let galleryHTML = `<section class="project-details-gallery ${customClass}"><div class="gallery-grid">`;

      project.galleryItems.forEach(item => {
        galleryHTML += `
          <div class="gallery-item">
            <img src="${item.src}" alt="${project.title} Detail" class="gallery-image">
            <p class="image-caption">${item.caption}</p>
          </div>`;
      });

      galleryHTML += '</div></section>';
      galleryContainer.innerHTML = galleryHTML;
    }
  }

  // 5. LOAD CURRENT PROJECT
  const project = projects[projectId] || projects.project9; // Default to project9

  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-description').innerHTML = project.description;
  document.getElementById('project-hero-image').src = project.image;
  document.getElementById('project-hero-image').alt = project.title;

  const toolsList = document.getElementById('project-tools-list');
  toolsList.innerHTML = '';
  project.tools.forEach(tool => {
    const li = document.createElement('li');
    li.textContent = tool;
    toolsList.appendChild(li);
  });

  document.title = `${project.title} — Clara Juong`;
  loadProjectGallery(project);

  // 6. BOTTOM NAVIGATION (FIXED ORDER)
  const projectOrder = ["project13", "project9", "project10", "project11", "project15", "project14", "project2", "project3", "project5", "project4", "project6", "project7", "project12", "project8"];
  const currentIndex = projectOrder.indexOf(projectId || 'project9');
  
  const prevProjectLink = document.getElementById('prev-project');
  const nextProjectLink = document.getElementById('next-project');
  
  if (currentIndex > 0) {
    prevProjectLink.href = `project.html?id=${projectOrder[currentIndex - 1]}`;
    prevProjectLink.style.display = 'inline-block';
  } else {
    prevProjectLink.style.display = 'none';
  }
  
  if (currentIndex < projectOrder.length - 1 && currentIndex !== -1) {
    nextProjectLink.href = `project.html?id=${projectOrder[currentIndex + 1]}`;
    nextProjectLink.style.display = 'inline-block';
  } else {
    nextProjectLink.style.display = 'none';
  }

})();
