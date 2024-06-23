'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ color, pct, animate = true }) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  const percentage = useMotionValue(pct);
  const colorTransition = useTransform(
    percentage,
    [0, 25, 50, 75, 100],
    ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#10B981']
  );

  useEffect(() => {
    percentage.set(pct);
  }, [pct]);

  return (
    <motion.circle
      r={r}
      cx={50}
      cy={50}
      fill='transparent'
      stroke={strokePct !== circ ? colorTransition : ''}
      strokeWidth={'8px'}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap='round'
      initial={{ strokeDashoffset: animate ? circ : strokePct }}
      animate={animate ? { strokeDashoffset: strokePct } : {}}
      transition={animate ? { duration: 2, ease: 'easeOut' } : {}}
    ></motion.circle>
  );
};

const StaticCircle = ({ color }) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      fill='transparent'
      stroke={color}
      strokeWidth={'8px'}
      strokeDasharray={circ}
      strokeDashoffset={0}
      strokeLinecap='round'
    ></circle>
  );
};

const Text = ({ percentage }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev < percentage) {
          return prev + 1;
        }
        clearInterval(interval);
        return percentage;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <motion.text
      x='50%'
      y='50%'
      dominantBaseline='central'
      textAnchor='middle'
      fontSize={'24px'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      fill='white'
    >
      {value}%
    </motion.text>
  );
};

const Pie = ({ percentage }) => {
  const pct = cleanPercentage(percentage);

  return (
    <svg width={100} height={100}>
      <g transform={`rotate(-90 ${'50 50'})`}>
        <StaticCircle color='lightgrey' />
        <Circle color='currentColor' pct={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
