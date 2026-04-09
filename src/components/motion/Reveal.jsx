import { motion } from "framer-motion";

export const revealViewport = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export function Reveal({
  children,
  as = "div",
  className,
  variant = fadeUp,
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Stagger({
  children,
  as = "div",
  className,
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    >
      {children}
    </Component>
  );
}
