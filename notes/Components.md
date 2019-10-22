Note
---

**Note**, responsible for rendering a single note, is very simple, and is not aware that the event handler it gets as props dispatches an action. These kind of components are called **presentational** in React terminology.

Notes
---

**Notes**, on the other hand, is a **container component**, as it contains some application logic: it defines what the event handlers of the Note components do and coordinates the configuration of presentational components, that is, the Notes.