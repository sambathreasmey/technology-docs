"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ImageIcon, FileSpreadsheet, FileVideo, Share2, Download, MoreHorizontal, Eye } from "lucide-react"
import { useState } from "react"

interface Document {
  id: string
  name: string
  type: "pdf" | "image" | "spreadsheet" | "video" | "document"
  size: string
  uploadDate: string
  shared: boolean
  thumbnail?: string
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    shared: true,
  },
  {
    id: "2",
    name: "Team Photo.jpg",
    type: "image",
    size: "1.8 MB",
    uploadDate: "2024-01-14",
    shared: false,
  },
  {
    id: "3",
    name: "Budget Analysis.xlsx",
    type: "spreadsheet",
    size: "856 KB",
    uploadDate: "2024-01-13",
    shared: true,
  },
  {
    id: "4",
    name: "Demo Video.mp4",
    type: "video",
    size: "15.2 MB",
    uploadDate: "2024-01-12",
    shared: false,
  },
  {
    id: "5",
    name: "Meeting Notes.docx",
    type: "document",
    size: "245 KB",
    uploadDate: "2024-01-11",
    shared: true,
  },
  {
    id: "6",
    name: "Design Mockups.png",
    type: "image",
    size: "3.1 MB",
    uploadDate: "2024-01-10",
    shared: false,
  },
]

const getFileIcon = (type: Document["type"]) => {
  switch (type) {
    case "pdf":
    case "document":
      return FileText
    case "image":
      return ImageIcon
    case "spreadsheet":
      return FileSpreadsheet
    case "video":
      return FileVideo
    default:
      return FileText
  }
}

const getFileColor = (type: Document["type"]) => {
  switch (type) {
    case "pdf":
      return "text-red-500"
    case "image":
      return "text-green-500"
    case "spreadsheet":
      return "text-emerald-500"
    case "video":
      return "text-purple-500"
    case "document":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

export function DocumentGrid() {
  const [documents] = useState<Document[]>(mockDocuments)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">My Documents</h2>
            <p className="text-muted-foreground">
              {documents.length} documents • {documents.filter((d) => d.shared).length} shared
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const IconComponent = getFileIcon(doc.type)
            const iconColor = getFileColor(doc.type)

            return (
              <Card key={doc.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-muted p-2 rounded-lg">
                        <IconComponent className={`h-6 w-6 ${iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate text-sm">{doc.name}</h3>
                        <p className="text-xs text-muted-foreground">{doc.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="py-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Uploaded {new Date(doc.uploadDate).toLocaleDateString()}</span>
                    {doc.shared && (
                      <Badge variant="secondary" className="text-xs">
                        Shared
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-3">
                  <div className="flex items-center space-x-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Share2 className="h-3 w-3 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Documents
          </Button>
        </div>
      </div>
    </section>
  )
}
