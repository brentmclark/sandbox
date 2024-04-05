'use client'
import useSettings from "@/hooks/use-settings";
export default function Sidebar(props) {
  const settings = useSettings();
  if (!settings.showSidebar) return null;
  return <div id="sidebar">This is the sidebar</div>;
}
