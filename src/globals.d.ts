interface stylesType {
  [key: string]: string
}
declare module '*.css' {
  const css: stylesType
  export default css
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '*.bin' {
  const bin: any
  export default bin
}
declare module '*.gltf' {
  const gltf: any
  export default gltf
}
declare module '*.glb' {
  const glb: any
  export default glb
}
declare module '*.hdr' {
  const hdr: any
  export default hdr
}
