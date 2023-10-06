import React from "react";

const WidgetTags = () => {
  const tags = [
    "C",
    "C++",
    "Express",
    "Firebase",
    "HTML",
    "Java",
    "JavaScript",
    "MERN",
    "MongoDB",
    "MySQL",
    "Next.js",
    "Node.js",
    "PHP",
    "Python",
    "React.js",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
