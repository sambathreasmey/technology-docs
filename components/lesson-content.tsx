import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, CheckCircle, ArrowRight, ArrowLeft, Terminal, Copy } from "lucide-react"

export function LessonContent() {
  return (
    <div className="flex-1 p-8 max-w-4xl mx-auto">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="secondary">Spring Boot</Badge>
          <Badge variant="outline">Lesson 1</Badge>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Introduction to Spring Boot</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span className="text-sm">20 min read</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Beginner</span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Welcome to the comprehensive DevOps learning path! In this lesson, you'll discover Spring Boot, a powerful
          framework that simplifies Java application development. We'll explore its core concepts and see how it fits
          into modern application development and deployment pipelines.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-4">What You'll Learn</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Understanding Spring Boot's auto-configuration and convention over configuration</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Creating your first Spring Boot application</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Exploring the Spring Boot ecosystem and starter dependencies</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-4">What is Spring Boot?</h2>
        <p className="leading-relaxed mb-4">
          Spring Boot is an opinionated framework built on top of the Spring Framework that makes it easy to create
          stand-alone, production-grade Spring-based applications. It eliminates much of the boilerplate configuration
          required in traditional Spring applications.
        </p>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Maven Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                mvn archetype:generate -DgroupId=com.example -DartifactId=my-spring-app
                -DarchetypeArtifactId=maven-archetype-quickstart
              </code>
            </pre>
          </CardContent>
        </Card>

        <p className="leading-relaxed mb-6">Spring Boot provides several key benefits:</p>
        <ol className="space-y-2 mb-8 list-decimal list-inside">
          <li>
            <strong>Auto-configuration:</strong> Automatically configures your application based on dependencies
          </li>
          <li>
            <strong>Embedded servers:</strong> Includes Tomcat, Jetty, or Undertow directly
          </li>
          <li>
            <strong>Starter dependencies:</strong> Simplified dependency management
          </li>
          <li>
            <strong>Production-ready features:</strong> Health checks, metrics, and externalized configuration
          </li>
          <li>
            <strong>No code generation:</strong> Pure Java configuration with no XML required
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-foreground mb-4">Your First Spring Boot Application</h2>
        <p className="leading-relaxed mb-4">Let's create a simple "Hello World" REST API using Spring Boot:</p>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Java Code</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">{`@RestController
@SpringBootApplication
public class Application {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <p className="leading-relaxed mb-8">
          The <code className="bg-muted px-2 py-1 rounded text-sm">@SpringBootApplication</code> annotation combines
          three important annotations: @Configuration, @EnableAutoConfiguration, and @ComponentScan.
        </p>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">💡 Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This Spring Boot foundation will be essential as we progress through containerization with Docker,
              orchestration with Kubernetes, and automated deployment with CI/CD pipelines. Each technology builds upon
              the previous ones in our comprehensive DevOps journey.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" className="flex items-center space-x-2 bg-transparent" disabled>
          <ArrowLeft className="h-4 w-4" />
          <span>Previous Lesson</span>
        </Button>
        <Button className="flex items-center space-x-2">
          <span>Project Setup & Structure</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
