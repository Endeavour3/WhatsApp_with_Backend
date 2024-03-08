import { useMediaQuery, useTheme } from "@mui/material"

export const useScreenDetectorMui=()=>{
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
    const isTablet = useMediaQuery(theme.breakpoints.only('sm'))
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    return {isMobile, isTablet, isDesktop}
}