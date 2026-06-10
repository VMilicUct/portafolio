'use client'

import { useEffect, useRef } from 'react'

const HEX_LIGHT =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='41.57' height='36' overflow='visible'%3E%3Cpath d='M10.4,-3 L20.8,3 L20.8,15 L10.4,21 L0,15 L0,3 Z' fill='none' stroke='%23d1d5db' stroke-width='0.5'/%3E%3Cpath d='M31.2,-3 L41.57,3 L41.57,15 L31.2,21 L20.8,15 L20.8,3 Z' fill='none' stroke='%23d1d5db' stroke-width='0.5'/%3E%3Cpath d='M20.8,15 L31.2,21 L31.2,33 L20.8,39 L10.4,33 L10.4,21 Z' fill='none' stroke='%23d1d5db' stroke-width='0.5'/%3E%3C/svg%3E"

const HEX_DARK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='41.57' height='36' overflow='visible'%3E%3Cpath d='M10.4,-3 L20.8,3 L20.8,15 L10.4,21 L0,15 L0,3 Z' fill='none' stroke='%231f2937' stroke-width='0.5'/%3E%3Cpath d='M31.2,-3 L41.57,3 L41.57,15 L31.2,21 L20.8,15 L20.8,3 Z' fill='none' stroke='%231f2937' stroke-width='0.5'/%3E%3Cpath d='M20.8,15 L31.2,21 L31.2,33 L20.8,39 L10.4,33 L10.4,21 Z' fill='none' stroke='%231f2937' stroke-width='0.5'/%3E%3C/svg%3E"

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const squishRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    const squish = squishRef.current
    if (!glow || !squish) return

    const MASK_SIZE = 200

    const isDark = () => document.documentElement.classList.contains('dark')

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      glow.style.background = `
        radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.18), transparent 30%),
        radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 40%)
      `.replace(/\s+/g, ' ').trim()

      squish.style.transformOrigin = `${x}px ${y}px`
      squish.style.maskPosition = `${x - MASK_SIZE}px ${y - MASK_SIZE}px`
      squish.style.webkitMaskPosition = `${x - MASK_SIZE}px ${y - MASK_SIZE}px`
    }

    const onLeave = () => {
      glow.style.background = 'transparent'
      squish.style.opacity = '0'
    }

    const onEnter = () => {
      squish.style.opacity = '1'
    }

    const updateHex = () => {
      squish.style.backgroundImage = `url(${isDark() ? HEX_DARK : HEX_LIGHT})`
    }
    updateHex()

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    const observer = new MutationObserver(updateHex)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor-glow" ref={glowRef} />
      <div id="cursor-squish" ref={squishRef} />
    </>
  )
}
