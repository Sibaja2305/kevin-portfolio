"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  language?: string;
  fork: boolean;
}

export default function RepositoriosPage() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/Sibaja2305/repos"
        );
        const data = await res.json();

        const filtered = data
          .filter((repo: Repo) => !repo.fork)
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
      } catch (error) {
        console.error("Error cargando repositorios:", error);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">{t("repositories.loading")}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("repositories.title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
            {t("repositories.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg md:text-xl font-semibold">
                      {repo.name}
                    </CardTitle>
                    <CardDescription className="leading-relaxed text-muted-foreground">
                      {repo.description || t("repositories.noDescription")}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground shrink-0">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between gap-6 flex-1">
                {repo.language && (
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full w-fit">
                    {repo.language}
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    href={repo.html_url}
                  >
                    <span>
                      <Github className="h-4 w-4 mr-2 inline" />
                      {t("repositories.code")}
                    </span>
                  </Button>

                  {repo.homepage && (
                    <Button size="sm" asChild href={repo.homepage}>
                      <span>
                        <ExternalLink className="h-4 w-4 mr-2 inline" />
                        {t("repositories.demo")}
                      </span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            href="https://github.com/Sibaja2305"
          >
            <span>
              <Github className="h-5 w-5 mr-2 inline" />
              {t("repositories.viewAll")}
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
