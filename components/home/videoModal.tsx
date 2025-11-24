"use client"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 w-full h-screen flex items-center justify-center bg-black">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 text-white hover:text-gray-300 transition"
        aria-label="Close video"
      >
        <X size={40} />
      </button>

      {/* Full-screen Video Container */}
      <div className="w-full h-full relative bg-black">
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title="ARBprotect Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
