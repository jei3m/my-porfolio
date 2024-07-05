"use client";

import Head from 'next/head';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about my background, skills, and projects as a computer engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">About Me</h1>

        <section className="content">
          <h2>Introduction</h2>
          <p>
            Hello! I'm a passionate and dedicated computer engineer with a focus on creating innovative software solutions. My expertise spans across multiple domains, including custom boot software development, TFT screen display projects, and full-stack web development using Next.js and Next UI.
          </p>

          <h2>Background</h2>
          <p>
            With a strong foundation in computer engineering, I have honed my skills through a combination of formal education and hands-on experience. My journey in this field has equipped me with a deep understanding of both hardware and software aspects, allowing me to tackle complex challenges with a holistic approach.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>Custom Boot Software Development</li>
            <li>Embedded Systems (ESP32, TFT screens)</li>
            <li>Web Development (Next.js, Next UI)</li>
            <li>Server-Side and Client-Side Rendering</li>
            <li>Problem Solving and Critical Thinking</li>
          </ul>

          <h2>Projects</h2>
          <p>
            I thrive on turning ideas into reality through meticulously crafted projects. Here are a few highlights:
          </p>
          <ul>
            <li><strong>Custom Boot Software:</strong> Developed robust and efficient boot software tailored to specific hardware requirements.</li>
            <li><strong>TFT Screen Display with ESP32:</strong> Successfully implemented a text art display project on a TFT screen using ESP32, showcasing creativity and technical proficiency.</li>
            <li><strong>Web Development:</strong> Leveraged Next.js and Next UI to build responsive, user-friendly web applications with a focus on seamless server-side and client-side integration.</li>
          </ul>

          <h2>Contact</h2>
          <p>
            I am always eager to connect with fellow professionals, explore new opportunities, and collaborate on exciting projects. Feel free to reach out to me through my <a href="/contact">contact page</a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
        .content {
          max-width: 800px;
          margin: 2rem 0;
        }
        h2 {
          font-size: 2rem;
          margin-top: 1.5rem;
        }
        p {
          line-height: 1.6;
          font-size: 1.2rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin: 0.5rem 0;
          font-size: 1.2rem;
        }
        a {
          color: blue;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
