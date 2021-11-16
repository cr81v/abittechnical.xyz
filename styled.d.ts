// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryAlt: string
      brand: string
    }
    fontFamily: {
      primary: string
      secondary: string
    }
  }
}
