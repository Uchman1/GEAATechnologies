"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MegaMenuPanelProps = {
  isOpen: boolean;
  id: string;
  children: ReactNode;
};

/**
 * Shared shell for the two nav dropdown panels (Solutions, Shop).
 * Positioned relative to the sticky header (which already
 * establishes a positioned containing block), full-width, light
 * background for contrast against the dark header bar.
 */
export default function MegaMenuPanel({ isOpen, id, children }: MegaMenuPanelProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full border-t border-black/5 bg-white shadow-2xl"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
