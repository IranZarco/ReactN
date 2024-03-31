import React from 'react';
import { View } from 'react-native';
import { TouchImage } from '../../componets/TouchImage';
import { appTheme } from '../../themes/appTheme';

export const AvatarScreen = () => {

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                alignItems: "center"
            }}
        >
            <TouchImage
                sourceImage='https://us-tuna-sounds-images.voicemod.net/39478a4b-f9e1-4976-97dd-b0d1a6c52730-1702095443482.jpg'
            />
            <TouchImage
                sourceImage='https://i.pinimg.com/originals/b0/0d/02/b00d027e915ab4ceaa52e0e6dccd5250.jpg'
            />
            <TouchImage
                sourceImage='https://i.pinimg.com/736x/a0/e9/82/a0e9824670da1b3976bad64ef5caeb84.jpg'
            />
            <TouchImage
                sourceImage='https://i.pinimg.com/736x/fb/d2/ba/fbd2ba873d4a94ec52b9cc5230cc913b.jpg'
            />
        </View>
    )
}