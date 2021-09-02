import React from "react"
import TUI from "blessed"
import Terminal from "react-blessed"
import Screens from "@/screens"
import settings from "@/settings/terminal.yaml"
import System from "@/systems/application"

export const Application = props => {
  return (
    <System.Provider>
      <Screens {...props} />
    </System.Provider>
  )
}

const screen = TUI.screen(settings.screen)
screen.key(settings.quit, (ch, key) => process.exit(0))
Terminal.render(<Application screen={screen} />, screen)
