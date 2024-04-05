'use client'
import React from "react";
import { SettingsContext } from "@/contexts/settings-context";

export default function useSettings() {
  const settings = React.useContext(SettingsContext);
  return settings;
}
