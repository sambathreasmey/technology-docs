import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { KongSocheta } from "@/components/kong-socheta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1">
          <KongSocheta />
        </main>
      </div>
    </div>
  )
}
