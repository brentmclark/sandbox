'use client'
import Sidebar from "@/components/sidebar";
import { ACTIONS, SettingsContext, SettingsProvider } from "@/contexts/settings-context";
import { useContext } from "react";

export default function Home() {
  return (
    <SettingsProvider>
      <div className="App">
        <Sidebar />
        <SidebarToggle />
        <h1>Settings Context</h1>
        <p>Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.

Yes. Our scout ships have reached Dantooine. They found the remains of a Rebel base, but they estimate that it has been deserted for some time. They are now conducting an extensive search of the surrounding systems. She lied! She lied to us! I told you she would never consciously betray the Rebellion. Terminate her...immediately! Stand by, Chewie, here we go.

There's another ship coming in. Maybe they know what happened. It's an Imperial fighter. It followed us! No.

Shut down all the garbage mashers on the detention level. No. Shut them all down! Hurry! Listen to them! They're dying, Artoo! Curse my metal body! I wasn't fast enough. It's all my fault! My poor master! Threepio, we're all right! We're all right.

Vader was seduced by the dark side of the Force. The Force? Well, the Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us.</p>
      </div>
    </SettingsProvider>
  );
}

function SidebarToggle(props) {
  const {showSidebar, dispatch} = useContext(SettingsContext)

  return (
    <button
      style={{float: 'right'}}
      onClick={() => dispatch({type: ACTIONS.UPDATE, payload: {key: 'showSidebar', value: !showSidebar}})}
    >
      Toggle Sidebar
    </button>
  )
}
