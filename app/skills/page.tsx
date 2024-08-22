"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  const skills = [
    { name: "Python", description: "Python is a programming language that can execute a number of multi-purpose instructions directly (interpretatively) using an object orientation method." },
    { name: "Next.js", description: "Next.js is a framework for React that allows developers to create web applications with server-side rendering (SSR), static page generation (Static Site Generation/SSG), and client-side delivery (Client-Side Rendering/CSR)." },
    { name: "Vue.js", description: "Vue.js is a progressive framework for building user interfaces and single-page applications using JavaScript." },
    { name: "Laravel", description: "Laravel is an open-source PHP framework and contains many basic modules for optimizing PHP performance in web application development." },
    { name: "Tailwind CSS", description: "Tailwind CSS is a utility-first CSS framework designed to make it easier and faster to create applications using custom designs." },
    { name: "Docker", description: "Docker is a platform for developing, shipping, and running applications inside containers." },
  ];

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName === selectedSkill ? null : skillName);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5 flex flex-col items-center justify-center -mt-10">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {skills.map(skill => (
          <Card
            key={skill.name}
            onClick={() => handleSkillClick(skill.name)}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-700 flex items-center justify-between">
                {skill.name}
                <Badge variant="outline" className="ml-2">{selectedSkill === skill.name ? "Selected" : "Click to View"}</Badge>
              </CardTitle>
            </CardHeader>
            {selectedSkill === skill.name && (
              <CardContent className="text-gray-600">
                {skill.description}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
