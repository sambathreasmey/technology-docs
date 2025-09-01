"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronDown, FileText, Play } from "lucide-react"
import { useState } from "react"

interface LessonItem {
  id: string
  title: string
  type: "lesson" | "exercise"
  completed?: boolean
}

interface Section {
  id: string
  title: string
  lessons: LessonItem[]
  expanded?: boolean
}

export function Sidebar() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "spring-boot",
      title: "Spring Boot",
      expanded: true,
      lessons: [
        { id: "spring-intro", title: "Introduction to Spring Boot", type: "lesson", completed: true },
        { id: "spring-setup", title: "Project Setup & Structure", type: "lesson", completed: true },
        { id: "spring-controllers", title: "REST Controllers", type: "lesson" },
        { id: "spring-data", title: "Spring Data JPA", type: "lesson" },
        { id: "spring-security", title: "Security Basics", type: "lesson" },
        { id: "spring-testing", title: "Testing Spring Applications", type: "exercise" },
        { id: "spring-profiles", title: "Configuration & Profiles", type: "lesson" },
      ],
    },
    {
      id: "docker-basics",
      title: "Docker Basics",
      expanded: false,
      lessons: [
        { id: "what-is-docker", title: "What is Docker?", type: "lesson" },
        { id: "installation", title: "Installation Guide", type: "lesson" },
        { id: "first-container", title: "Your First Container", type: "lesson" },
        { id: "docker-images", title: "Working with Images", type: "lesson" },
        { id: "dockerfile-basics", title: "Dockerfile Basics", type: "exercise" },
        { id: "docker-volumes", title: "Data Persistence", type: "lesson" },
        { id: "docker-networking", title: "Container Networking", type: "lesson" },
      ],
    },
    {
      id: "docker-advanced",
      title: "Advanced Docker",
      expanded: false,
      lessons: [
        { id: "docker-compose", title: "Docker Compose", type: "lesson" },
        { id: "multi-stage", title: "Multi-stage Builds", type: "lesson" },
        { id: "docker-swarm", title: "Docker Swarm", type: "lesson" },
        { id: "docker-security", title: "Security Best Practices", type: "lesson" },
        { id: "docker-optimization", title: "Image Optimization", type: "exercise" },
      ],
    },
    {
      id: "kubernetes-intro",
      title: "Kubernetes Basics",
      expanded: false,
      lessons: [
        { id: "k8s-overview", title: "Kubernetes Overview", type: "lesson" },
        { id: "k8s-architecture", title: "Cluster Architecture", type: "lesson" },
        { id: "pods-services", title: "Pods and Services", type: "lesson" },
        { id: "deployments", title: "Deployments", type: "lesson" },
        { id: "configmaps-secrets", title: "ConfigMaps & Secrets", type: "lesson" },
        { id: "first-app", title: "Deploy Your First App", type: "exercise" },
      ],
    },
    {
      id: "kubernetes-advanced",
      title: "Advanced Kubernetes",
      expanded: false,
      lessons: [
        { id: "k8s-ingress", title: "Ingress Controllers", type: "lesson" },
        { id: "k8s-storage", title: "Persistent Storage", type: "lesson" },
        { id: "k8s-monitoring", title: "Monitoring & Logging", type: "lesson" },
        { id: "k8s-helm", title: "Helm Package Manager", type: "lesson" },
        { id: "k8s-operators", title: "Custom Operators", type: "exercise" },
      ],
    },
    {
      id: "github-cicd",
      title: "GitHub CI/CD",
      expanded: false,
      lessons: [
        { id: "github-actions-intro", title: "Introduction to GitHub Actions", type: "lesson" },
        { id: "workflow-basics", title: "Workflow Basics", type: "lesson" },
        { id: "build-test", title: "Build & Test Automation", type: "lesson" },
        { id: "deployment-strategies", title: "Deployment Strategies", type: "lesson" },
        { id: "secrets-management", title: "Secrets Management", type: "lesson" },
        { id: "matrix-builds", title: "Matrix Builds", type: "exercise" },
        { id: "custom-actions", title: "Creating Custom Actions", type: "exercise" },
      ],
    },
    {
      id: "jenkins",
      title: "Jenkins",
      expanded: false,
      lessons: [
        { id: "jenkins-intro", title: "Introduction to Jenkins", type: "lesson" },
        { id: "jenkins-installation", title: "Installation & Setup", type: "lesson" },
        { id: "jenkins-jobs", title: "Creating Jobs", type: "lesson" },
        { id: "jenkins-pipelines", title: "Pipeline as Code", type: "lesson" },
        { id: "jenkins-plugins", title: "Essential Plugins", type: "lesson" },
        { id: "jenkins-docker", title: "Jenkins with Docker", type: "exercise" },
        { id: "jenkins-scaling", title: "Scaling Jenkins", type: "lesson" },
      ],
    },
    {
      id: "deployment",
      title: "Deployment Strategies",
      expanded: false,
      lessons: [
        { id: "deployment-intro", title: "Deployment Fundamentals", type: "lesson" },
        { id: "blue-green", title: "Blue-Green Deployment", type: "lesson" },
        { id: "canary-deployment", title: "Canary Deployment", type: "lesson" },
        { id: "rolling-updates", title: "Rolling Updates", type: "lesson" },
        { id: "infrastructure-code", title: "Infrastructure as Code", type: "lesson" },
        { id: "monitoring-deployment", title: "Deployment Monitoring", type: "lesson" },
        { id: "rollback-strategies", title: "Rollback Strategies", type: "exercise" },
      ],
    },
  ])

  const toggleSection = (sectionId: string) => {
    setSections(
      sections.map((section) => (section.id === sectionId ? { ...section, expanded: !section.expanded } : section)),
    )
  }

  return (
    <aside className="w-80 border-r border-border bg-muted/30">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground">Course Content</h2>
        <p className="text-sm text-muted-foreground mt-1">Learn Docker and Kubernetes step by step</p>
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-4 space-y-2">
          <div className="mb-4">
            <p className="text-xs text-muted-foreground">
              Complete DevOps learning path covering Spring Boot, containerization, orchestration, and CI/CD
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.id} className="space-y-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full p-2 text-left rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground">{section.title}</span>
                {section.expanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>

              {section.expanded && (
                <div className="ml-4 space-y-1">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className="flex items-center justify-between w-full p-2 text-left rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        {lesson.type === "exercise" ? (
                          <Play className="h-4 w-4 text-secondary" />
                        ) : (
                          <FileText className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span
                          className={`text-sm ${lesson.completed ? "text-muted-foreground line-through" : "text-foreground"}`}
                        >
                          {lesson.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {lesson.completed && (
                          <Badge variant="secondary" className="text-xs">
                            ✓
                          </Badge>
                        )}
                        {lesson.type === "exercise" && (
                          <Badge variant="outline" className="text-xs">
                            Exercise
                          </Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
