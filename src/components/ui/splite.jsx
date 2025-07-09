'use client'

import { useEffect, useRef } from 'react'

export function SplineScene({ scene, className }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!scene || !ref.current) return;

    import('@splinetool/runtime').then((SPLINE) => {
      const app = new SPLINE.Application(ref.current)
      app.load(scene)
    }).catch((err) => {
      console.error("Spline load error:", err)
    })
  }, [scene])

  return <div ref={ref} className={className} />
}
