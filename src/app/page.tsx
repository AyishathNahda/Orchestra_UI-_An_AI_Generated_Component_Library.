"use client";

import React, { useState } from "react"; // Added useState
import { FloatingNavbar } from "@/components/floating-navbar";
import { ComponentCard } from "@/components/component-card";
import {
  PricingPreview,
  BentoPreview,
  GlassLoginPreview,
  AnimatedCardsPreview,
  DashboardStatsPreview,
  AnimatedButtonPreview,
  DataTablePreview,
  ModalPreview,
  CommandPalettePreview,
} from "@/components/preview-components";
import { Sparkles } from "lucide-react";

// Added a 'category' field to each object for the filter logic
const components = [
  {
    title: "Animated Pricing Table",
    category: "Forms", // Category for filtering
    description: "Beautiful pricing cards with smooth hover animations and gradient accents.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    preview: <PricingPreview />,
    featured: true,
  },
  {
    title: "Bento Grid Layout",
    category: "Layout",
    description: "Responsive bento-style grid for showcasing features or portfolio items.",
    techStack: ["React", "Tailwind", "CSS Grid"],
    preview: <BentoPreview />,
  },
  {
    title: "Glassmorphic Login",
    category: "Forms",
    description: "Modern login form with frosted glass effect and subtle glow animations.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    preview: <GlassLoginPreview />,
  },
  {
    title: "Data Table Pro",
    category: "Data",
    description: "Feature-rich data table with sorting, filtering, and row selection.",
    techStack: ["React", "Tailwind", "TanStack Table"],
    preview: <DataTablePreview />,
    featured: true,
  },
  {
    title: "Animated Modal",
    category: "Layout",
    description: "Smooth modal component with backdrop blur and entrance animations.",
    techStack: ["React", "Framer Motion", "Radix UI"],
    preview: <ModalPreview />,
  },
  {
    title: "Command Palette",
    category: "Data",
    description: "Keyboard-navigable command menu inspired by VS Code.",
    techStack: ["React", "Tailwind", "cmdk"],
    preview: <CommandPalettePreview />,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("All");

  // Filtering Logic
  const filteredComponents = components.filter((comp) => {
    if (activeTab === "All") return true;
    return comp.category === activeTab;
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border/50 bg-secondary/50 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Built at the speed of thought</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Build faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              production-ready components
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Orchestrating AI-generated components into a high-fidelity React gallery.
          </p>
        </div>
      </section>

      {/* Components Grid Section */}
      <section id="components" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Component Library</h2>
            
            {/* Functional Filter Buttons */}
            <div className="flex items-center gap-2 bg-secondary/30 p-1 rounded-xl border border-border/50">
              {["All", "Layout", "Forms", "Data"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeTab === cat 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid maps through the filtered list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => (
              <ComponentCard
                key={component.title}
                title={component.title}
                description={component.description}
                techStack={component.techStack}
                preview={component.preview}
                featured={component.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}