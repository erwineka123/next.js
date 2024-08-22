"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Socket Programming",
      description: "Socket programming is a method for connecting two nodes through a network to establish a means of communication between the two nodes.",
      url: "https://github.com/erwineka123/Socket-Programming"
    },
    {
      name: "FnB Platform",
      description: "Food ordering service website at a restaurant.",
      url: "https://github.com/erwineka123/VueJs"
    },
    {
      name: "Boggle Game Solve",
      description: "A program that can help check boggle game solutions.",
      url: "https://github.com/erwineka123/TUBES-SA"
    },
    {
      name: "Landing Page Website",
      description: "Create a website landing page for the MBC Telkom University lab profile.",
      url: "https://github.com/erwineka123/MBC_Lab"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <CardHeader>
                <CardTitle className="text-xl text-gray-700 flex items-center justify-between">
                  {project.name}
                  <Badge variant="outline" className="ml-2">Click to View</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p>{project.description}</p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
