import { Button } from "@/components/ui/button"
import { BookOpen, Github, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">រស្មី ឌេវ</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Docker
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Kubernetes
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Tutorials
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <ThemeToggle />
            <Button size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
