"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Main gradient animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(80, 80, 80, 0.3) 0%, rgba(30, 30, 30, 0.5) 30%, rgba(0, 0, 0, 0.9) 70%), repeating-linear-gradient(45deg, transparent 0%, transparent 10%, rgba(40, 40, 40, 0.1) 10.5%, transparent 11%)",
            "radial-gradient(circle at 70% 60%, rgba(90, 90, 90, 0.3) 0%, rgba(40, 40, 40, 0.5) 30%, rgba(0, 0, 0, 0.9) 70%), repeating-linear-gradient(-45deg, transparent 0%, transparent 10%, rgba(40, 40, 40, 0.1) 10.5%, transparent 11%)",
            "radial-gradient(circle at 50% 50%, rgba(70, 70, 70, 0.3) 0%, rgba(20, 20, 20, 0.5) 30%, rgba(0, 0, 0, 0.9) 70%), repeating-linear-gradient(135deg, transparent 0%, transparent 10%, rgba(40, 40, 40, 0.1) 10.5%, transparent 11%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImhleGFnb25zIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIHBvaW50cz0iMzAsMCAxNSw4LjY2IDAsNDMuMyAxNSw1MS45NiAzMCw0My4zIDQ1LDUxLjk2IDYwLDQzLjMgNDUsOC42NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDcwLCA3MCwgNzAsIDAuMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2hleGFnb25zKSIvPjwvc3ZnPg==')] opacity-30" />

      {/* Animated noise overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-soft-light"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')",
          backgroundSize: "400% 400%"
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(transparent 0%, transparent 49%, rgba(70, 70, 70, 0.1) 50%, transparent 51%, transparent 100%)",
            "linear-gradient(transparent 0%, transparent 49%, rgba(70, 70, 70, 0.2) 50%, transparent 51%, transparent 100%)",
          ],
        }}
        style={{
          backgroundSize: "100% 30px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Pulsing radial overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(120,120,120,0.15)_0%,transparent_70%)]" />
      </motion.div>

      {/* Matrix-like vertical lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(70, 70, 70, 0.1) 0px, rgba(70, 70, 70, 0.1) 1px, transparent 1px, transparent 30px)",
          backgroundSize: "30px 100%",
        }} />
      </div>
    </div>
  );
}