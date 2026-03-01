"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, BookOpen, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.social.blog, icon: BookOpen, label: "Blog" },
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>{t("copyright")}</span>
          </div>

          {/* Center: Template credit */}
          <a
            href="https://github.com/zer0-kr/awesome-portfolio-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("built_with")}
          </a>

          {/* Right: Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
