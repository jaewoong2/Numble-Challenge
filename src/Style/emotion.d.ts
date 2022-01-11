import '@emotion/react'
import { themeType } from './theme.type';

declare module '@emotion/react' {
    export interface Theme extends themeType {
    }
}