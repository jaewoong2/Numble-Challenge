type colorType = {
    orange: string;
    gray: string;
    black: string;
}


type deviceType = {
    desktop: string
    tablet: string;
    mobile: string;
}

type sizeType = {
    maxWidth: string,
}

export type themeType = {
    color: colorType;
    size: sizeType;
    device: deviceType;
}