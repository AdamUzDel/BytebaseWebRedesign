'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, Search } from 'lucide-react'
import Image from 'next/image'

// Placeholder data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Placeholder Blog Title 1",
    description: "This is a short summary of the blog post.",
    author: "John Doe",
    date: "Dec 16, 2024",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Placeholder Blog Title 2",
    description: "Another interesting blog post summary goes here.",
    author: "Jane Smith",
    date: "Dec 15, 2024",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Placeholder Blog Title 3",
    description: "Yet another captivating blog post summary.",
    author: "Bob Johnson",
    date: "Dec 14, 2024",
    image: "/placeholder.svg"
  },
  // Add more placeholder blog posts as needed
]

const BlogListingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white shadow-sm pt-[10vh]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Bytebase Blogs</div>
          <div className="flex-1 mx-4 max-w-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search blogs..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Write
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.svg" alt="@johndoe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author} · {post.date}</span>
                  <Button variant="outline" size="sm">Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default BlogListingPage

