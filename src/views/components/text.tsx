import {Text as NativeText, TextProps as NativeTextProps} from "react-native";


interface TextProps extends NativeTextProps {
    children: any
}

export default function Text({children, ...props}: TextProps) {

    return <NativeText {...props}>
        {children}
    </NativeText>
}