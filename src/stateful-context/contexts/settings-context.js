'use client'

import React from "react";

export const defaultSettings = {
  theme: "light",
  showSidebar: true,
};

export const SettingsContext = React.createContext(defaultSettings);
