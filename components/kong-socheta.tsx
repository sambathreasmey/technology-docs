import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, CheckCircle, Terminal, Copy, User } from "lucide-react"

export function KongSocheta() {
  return (
    <div className="flex-1 p-8 max-w-4xl mx-auto">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          {/* <Badge variant="secondary">Kong Socheta</Badge> */}
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Kong Socheta</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span className="text-sm">146 following</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">25.8K followers</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span className="text-sm">@kongsocheta</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span className="text-sm">@instagram.com/sochetaa_kong</span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none">

        <h2 className="text-2xl font-semibold text-foreground mb-4">Favorite</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>សមុទ្រ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>ស្ទួចត្រី</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>កាហ្វេ</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>បោះតង់</span>
          </li>
        </ul>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                socheta install
              </code>
            </pre>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Command</span>
              </div>
              <Button variant="ghost" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                socheta apply -f
              </code>
            </pre>
          </CardContent>
        </Card>

        <p className="leading-relaxed mb-6">Benefits:</p>
        <ol className="space-y-2 mb-8 list-decimal list-inside">
          <li>
            <strong>ឈឺ:</strong> មានអ្នកចាំមើលថែ និងព្យាបាលស្រាប់
          </li>
        </ol>
      </div>
    </div>
  )
}
