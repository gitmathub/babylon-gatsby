import * as React from "react"

import s from "./Container.scss"

export const Container = ({ children }) => (
  <section className={s.container}>{children}</section>
)
