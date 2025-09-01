import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, CheckCircle, ArrowRight, ArrowLeft, Terminal, Copy } from "lucide-react"

export function OBUDeploymentContent() {
  return (
    <div className="flex-1 p-8 max-w-4xl mx-auto">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="secondary">Spring Boot</Badge>
          <Badge variant="outline">Docker</Badge>
          <Badge variant="default">OpenShift</Badge>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Java Spring Boot</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Maven</span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">

        <p className="leading-relaxed mb-4">
          Building a Spring Boot app with Maven.
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
                mvn clean package
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Docker</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Desktop</span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        
        <h2 className="text-2xl font-semibold text-foreground mb-4">1.Create Dockerfile</h2>
        <p className="leading-relaxed mb-4">
          Create Dockerfile follow the structure below :
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Dockerfile</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">{`FROM openjdk:21-jdk-slim
COPY ./target/*.jar /app/application.jar
EXPOSE 9012
ENTRYPOINT ["java","-jar","/app/application.jar" ]
`}</code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-foreground mb-4">2.Build Docker Image</h2>
        <p className="leading-relaxed mb-4">
          To build docker image please follow the structure below :
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker build -t image-name:tag .
              </code>
            </pre>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold text-foreground mb-4">Example</h3>
        <p className="leading-relaxed mb-4">
          We want to deploy project api gateway with tag 1.0.0
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker build -t api-gateway:1.0.0 .
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-foreground mb-4">3.Docker Login</h2>
        <p className="leading-relaxed mb-4">
          To tag and push image into OpenShift we need to login fisrt follow command below :
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker login -u username -p password repo
              </code>
            </pre>
          </CardContent>
        </Card>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Example</h3>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker login -u admin -p P@$$w0rd mirror-uat-dr.openshiftmdc.middlewareuat.acledabank.local:9443/online-banking
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-foreground mb-4">4.Docker Tag</h2>
        <p className="leading-relaxed mb-4">
          To tag image into OpenShift please follow command below :
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker tag image-id repo:tag
              </code>
            </pre>
          </CardContent>
        </Card>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Example</h3>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker tag c7a39289351b mirror-uat-dr.openshiftmdc.middlewareuat.acledabank.local:9443/online-banking/api-gateway:1.0.0
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold text-foreground mb-4">5.Docker Push</h2>
        <p className="leading-relaxed mb-4">
          To push image into OpenShift please follow command below :
        </p>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker push repo:tag
              </code>
            </pre>
          </CardContent>
        </Card>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Example</h3>
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Docker Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                docker push mirror-uat-dr.openshiftmdc.middlewareuat.acledabank.local:9443/online-banking/api-gateway:1.0.0
              </code>
            </pre>
          </CardContent>
        </Card>

      </div>

      <Separator className="my-8" />
    </div>
  )
}