import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div>
        <Link to="/">
        Libraa is an open-source digital library built with the vision of making
        knowledge freely accessible to everyone. Designed for students,
        researchers, and lifelong learners, Libraa offers a growing collection
        of books, articles, and learning resources—all available at no cost. As
        an open-source platform, Libraa encourages collaboration, transparency,
        and community-driven development. Whether you're exploring academic
        topics, discovering new interests, or contributing to the project,
        Libraa is your companion in the pursuit of knowledge. Together, let’s
        make learning open, free, and limitless.
        </Link>
      </div>
    </>
  );
}
