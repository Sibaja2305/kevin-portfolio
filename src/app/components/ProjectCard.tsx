"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string | null;
  stars: number;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg md:text-xl font-semibold">
              {project.name}
            </CardTitle>
            <CardDescription className="leading-relaxed text-muted-foreground">
              {project.description}
            </CardDescription>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground shrink-0">
            <Star className="h-4 w-4" />
            <span className="text-sm">{project.stars}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Código
            </a>
          </Button>

          {project.liveUrl && (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
