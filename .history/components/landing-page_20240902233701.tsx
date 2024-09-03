'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ChevronLeft, ChevronRight, Server, Cloud, Shield, Zap, MessageSquare } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Server className="h-6 w-6 mr-2" />
          DataCenterDev
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Build Your Next-Gen Data Center in Record Time</h1>
        <p className="text-xl text-gray-600 mb-8">
          Innovative solutions for cloud infrastructure, data center design, and security implementation.
        </p>
        <Button className="bg-purple-900 hover:bg-purple-800 text-white">
          <Play className="mr-2 h-4 w-4" /> Watch Our Approach
        </Button>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <Cloud className="h-5 w-5 text-purple-600" />
          <span className="text-sm">Cloud Infrastructure</span>
        </div>
        <div className="flex items-center space-x-2">
          <Server className="h-5 w-5 text-purple-600" />
          <span className="text-sm">Data Center Design</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-purple-600" />
          <span className="text-sm">Security Solutions</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-purple-600" />
          <span className="text-sm">Energy Efficiency</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Services Section */}
        <Card className="col-span-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive data center solutions.</p>
          <Tabs defaultValue="cloud">
            <TabsList>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="cloud">
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-bold">Hybrid Cloud Solutions</h3>
                  <p className="text-sm text-gray-600">Seamlessly integrate on-premises infrastructure with public cloud services.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-bold">Cloud Migration</h3>
                  <p className="text-sm text-gray-600">Effortlessly move your workloads to the cloud with our expert guidance.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Case Studies Section */}
        <Card className="col-span-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 mb-4">Learn how we&apos;ve helped businesses transform their data center operations.</p>
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold">Global E-commerce Giant</h3>
              <p className="text-sm text-gray-600">Reduced data center energy consumption by 40% through our innovative cooling solutions.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold">Leading Financial Institution</h3>
              <p className="text-sm text-gray-600">Implemented a hybrid cloud architecture, improving scalability and reducing costs by 25%.</p>
            </div>
          </div>
        </Card>

        {/* Blog Section */}
        <Card className="col-span-1 p-6">
          <h2 className="text-2xl font-bold mb-4">DataCenterDev Blog</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">The Future of Green Data Centers</h3>
              <p className="text-sm text-gray-600">Explore how sustainable practices are shaping the next generation of data centers...</p>
            </div>
            <div>
              <h3 className="font-bold">Edge Computing: Revolutionizing Data Processing</h3>
              <p className="text-sm text-gray-600">Discover how edge computing is transforming data center architectures...</p>
            </div>
            <div>
              <h3 className="font-bold">AI-Driven Data Center Management</h3>
              <p className="text-sm text-gray-600">Learn how artificial intelligence is optimizing data center operations...</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Testimonial Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl mb-8">
              &quot;DataCenterDev transformed our outdated infrastructure into a state-of-the-art, energy-efficient data center. Their expertise and innovative solutions have significantly improved our performance and reduced our operational costs.&quot;
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=80&width=80" alt="John Doe" className="rounded-full w-20 h-20 object-cover mr-4" />
              <div className="text-left">
                <div className="font-bold">John Doe</div>
                <div className="text-purple-300">CTO, Tech Innovations Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to <span className="text-purple-600">revolutionize</span> your</h2>
        <h2 className="text-4xl font-bold mb-8">data center <span className="text-purple-600">infrastructure</span>?</h2>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 px-8">
          Get a Free Consultation
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Cloud Infrastructure</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Data Center Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">White Papers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2024 DataCenterDev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}