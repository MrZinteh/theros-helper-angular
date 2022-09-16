export interface GodDetails {
  name: string,
  domain: string,
  img: string,
  notes: GodNote[],
}

export interface GodNote {
  title: string,
  info: string[],
  expanded: false,
}
