import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { LessonContent } from "@/components/lesson-content"
import { OBUDeploymentContent } from "@/components/obu-deployment-content"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1">
          <OBUDeploymentContent />
        </main>
      </div>
    </div>
  )
}
