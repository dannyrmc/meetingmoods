"use client"

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import React from 'react';

export const Analytics = (props) => (
  <VercelAnalytics {...props} />
);
