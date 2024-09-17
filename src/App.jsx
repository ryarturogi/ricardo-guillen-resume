import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools';

const originPath = `${process.env.NODE_ENV === 'development' ? '' : "/ricardo-guillen-resume"}`;

const initialValue = `
<!-- ::Front-End Engineer Contact Card:: -->

<div class="contact-card">
  <!-- Header Section -->
  <section class="contact-card__header">
    <!-- Avatar Section -->
    <img class="avatar" src="${originPath}/imgs/avatar.png" alt="Ricardo GI, Front-End Engineer" />
    
    <!-- Name and Title -->
    <h1 class="name">Ricardo Guillen I.</h1>
    <h2 class="title">Front-End Engineer</h2>

    <!-- Motto -->
    <p class="motto">"Expert in TypeScript, React, TailwindCSS, Storybook, and Design Systems"</p>

    <!-- Social Networks -->
    <div class="social-networks">
      <a href="https://linkedin.com/in/ryarturogi" target="_blank" aria-label="LinkedIn">
        <img src="${originPath}/imgs/linkedin-in.svg" alt="LinkedIn" class="social-icon" />
      </a>
      <a href="https://twitter.com/ryarturogi" target="_blank" aria-label="Twitter">
        <img src="${originPath}/imgs/x.svg" alt="X" class="social-icon social-icon__x" />
      </a>
      <a href="https://github.com/ryarturogi" target="_blank" aria-label="Github">
        <img src="${originPath}/imgs/github.svg" alt="Github" class="social-icon" />
      </a>
    </div>
  </section>

  <!-- Content Section -->
  <div class="contact-card__content">
    <!-- About Section -->
    <section class="about">
      <h2>My story</h2>
      <p>
        10+ years engineering web applications, consistently delivering successful projects.
        Skilled in mentoring junior and mid-level developers and creating innovative, customer-centric solutions.
      </p>
      <p> 
        Proficient in collaborating with global teams to drive results in both multinational corporations and startups. 
        Possesses an entrepreneurial mindset with a commitment to continuous improvement.
      </p>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <h2>Skills</h2>
      <p><strong>Web Development:</strong> React, Next.js, Vue.js, Nuxt.js, Node.js, TailwindCSS, Figma, Vite</p>
      <p><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, GraphQL, Supabase</p>
    </section>
  </div>
</div>

<style>
/* Root Variables */
:root {
  --main-bg-color: #1c1c1c;
  --link-hover-color: #0085ff;
  --white-color: #fff;
  --gray-color: #f2f2f2;
  --dark-gray-color: #333;
  --accent-color: #99cc99;
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--gray-color);
}

/* Contact Card Wrapper */
.contact-card {
  background-color: var(--white-color);
  border-radius: ${32 / 16}rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  max-width: 320px;
  width: 100%;
  overflow: hidden;
  text-align: left;
}

/* Card Header Section */
.contact-card__header {
  background-image: linear-gradient( 190deg, #92FFC0 10%, #002661 100%);
  color: var(--white-color);
  padding: 0 ${20 / 16}rem;
  height: ${275 / 16}rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Avatar */
.avatar {
  width: ${72 / 16}rem;
  height: ${72 / 16}rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto ${8 / 16}rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

/* Name, Title, Motto */
.name {
  font-size: ${24 / 16}rem;
  font-weight: 600;
  text-align: center;
}

.title {
  font-size: ${14 / 16}rem;
  font-weight: 500;
  margin-bottom: ${8 / 16}rem;
}

.motto {
  font-size: ${12 / 16}rem;
  font-style: italic;
  font-weight: 300;
}

/* Social Networks */
.social-networks {
  display: flex;
  justify-content: end;
  item-align: center;
  margin: ${20/16}rem auto 0;
}

.social-networks a {
  margin: 0 8px;
}

.social-icon {
  width: 20px;
  transition: transform 0.3s ease;
}

.social-icon__x {
  width: 18px;
  top: 1px;
  position: relative;
}

.social-networks img {
  color: red;
}

.social-networks a:hover .social-icon {
  transform: scale(1.2);
}

/* Content Section */
.contact-card__content {
  padding: ${20 / 16}rem;
  padding-bottom: ${28 / 16}rem;
  min-height: ${300 / 16}rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

/* About Section */
.about {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  color: var(--dark-gray-color);
  margin-bottom: 1rem;
}

.about h2 {
  font-size: ${14 / 16}rem;
  font-weight: bold;
}

.about p {
  font-size: ${12 / 16}rem;
}

/* Skills Section */
.skills {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  color: var(--dark-gray-color);
}

.skills h2 {
  font-size: ${14 / 16}rem;
  font-weight: bold;
}

.skills p {
  font-size: ${12 / 16}rem;
}

@media (max-width: 600px) {
  .contact-card {
    margin: 20px;
  }

  .skills p {
    font-size: 0.8rem;
  }
}
</style>

`;

const App = () => {
  const [code, setCode] = useState(initialValue);
  const [toggleEditor, setToggleEditor] = useState(false);

  /**
   * Handle change code
   * @param {string} value
   */
  const handleChange = (value) => setCode(value);

  /**
   * Handle toggle editor visibility
   */
  const handleToggleEditor = () => setToggleEditor(!toggleEditor);

  return (
    <main className="bg-gray-200 w-screen h-screen overflow-x-hidden">
      <header id="header" className="bg-gray-900 flex items-center justify-between z-50 h-[4rem] border-b border-white">
        <a href="/" title="Ricardo Gi, Front-End Developer" className="flex no-underline text-white">
          <img className="w-8 max-w-full my-6 mx-4" src={`${originPath}/imgs/brand.svg`} alt="Ricardo Gi" />
          <div className="text-white font-semibold text-base sm:text-sm hidden sm:flex flex-col justify-center">
            Ricardo Guillen I. <br />
            Front-End Engineer
          </div>
        </a>
        {/* This button is only visible on mobile (lg:hidden) */}
        <button
          type="button"
          className="lg:hidden mr-4 h-8 w-8 bg-teal-800 hover:bg-teal-600 transition-colors ease-in duration-200 rounded-full flex items-center justify-center"
          onClick={handleToggleEditor}
        >
          <img className={`w-6 h-6 transition-all ease duration-200 ${toggleEditor ? 'rotate-45' : 'rotate-0'}`} src={`${originPath}/imgs/code.svg`} alt="Code Editor" />
        </button>
      </header>

      <div id="ace-editor" className="grid grid-cols-12 w-full h-[calc(100%-4rem)]">
        {/* AceEditor is always visible on large screens (lg:flex) and toggles on mobile */}
        <div className={`col-span-12 lg:col-span-6 lg:flex ${toggleEditor ? 'block' : 'hidden'}`}>
          <AceEditor
            mode="javascript"
            theme="solarized_dark"
            onChange={handleChange}
            name="ace-editor"
            width="100%"
            height="calc(100vh - 4rem)"
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              showPrintMargin: false,
              fontSize: 14,
              tabSize: 2,
              wrap: true,
            }}
          />
        </div>
        {/* Card content */}
        <section
          className={`bg-gray-900 col-span-12 lg:col-span-6 flex items-center justify-center`}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </div>

      <Footer />
    </main>
  );
};

export default App;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10  border-t border-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section: Branding & Contact */}
        <div className="flex flex-col items-center md:items-start">
          <img src={`${originPath}/imgs/brand-white.svg`} alt="Brand Logo" className="w-24 mb-4" />
          <p className="text-sm">© {currentYear} Ricardo Arturo GI</p>
          <p className="mt-4">
            <a
              href="mailto:r.arturogi@gmail.com"
              className="inline-block bg-teal-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105"
            >
              Drop a message!
            </a>
          </p>
        </div>

        {/* Center Section: About */}
        <div className="text-center">
          <p className="text-lg font-semibold leading-relaxed">
            Crafting web experiences for 11+ years with a focus on innovation and performance.
          </p>
          <p className="text-gray-400 mt-2">Building scalable and efficient frontend solutions.</p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://linkedin.com/in/ryarturogi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={`${originPath}/imgs/linkedin-in.svg`} alt="LinkedIn" className="w-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://twitter.com/ryarturogi" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src={`${originPath}/imgs/x.svg`} alt="X" className="w-5 mt-1 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://github.com/ryarturogi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={`${originPath}/imgs/github.svg`} alt="GitHub" className="w-6 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};
