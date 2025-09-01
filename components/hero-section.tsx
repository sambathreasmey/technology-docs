import { Button } from "@/components/ui/button"
import { Shield, Upload, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Secure Document Sharing
          <span className="text-primary block">Made Simple</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Share your important documents safely and efficiently. Upload, organize, and collaborate with confidence using
          our secure platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-3">
            <Upload className="h-5 w-5 mr-2" />
            Upload Document
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              End-to-end encryption ensures your documents stay private and secure.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Collaboration</h3>
            <p className="text-muted-foreground">Share documents with team members and control access permissions.</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Upload</h3>
            <p className="text-muted-foreground">Drag and drop files or browse to upload documents instantly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
