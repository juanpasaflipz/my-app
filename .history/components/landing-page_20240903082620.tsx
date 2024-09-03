'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ChevronLeft, ChevronRight, Server, Cloud, Shield, Zap, MessageSquare } from 'lucide-react'
// Add the AIChatbot component
// Remove the duplicate import statement for AIChatbot
import { AiChatbot } from './ai-chatbot'

function LandingPage(...args: []) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* ... (rest of your landing page code) ... */}

      {/* Add the AIChatbot component */}
      <AiChatbot />
    </div>
  )
}