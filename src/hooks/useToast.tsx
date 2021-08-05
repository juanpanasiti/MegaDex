import { ToastAndroid } from 'react-native';
interface Props {
    duration?: 'short' | 'long';
    gravity?: 'center' | 'top' | 'bottom';
    xOffset?: number;
    yOffset?: number;
}
export const useToast = ({ duration = 'short', gravity = 'bottom', xOffset = 0, yOffset = 0 }: Props = {}) => {
    const toastDuration = duration === 'short' ? ToastAndroid.SHORT : ToastAndroid.LONG;
    let toastGravity = ToastAndroid.BOTTOM;

    switch (gravity) {
        case 'bottom':
            toastGravity = ToastAndroid.BOTTOM;
            break;

        case 'center':
            toastGravity = ToastAndroid.CENTER;
            break;

        case 'top':
            toastGravity = ToastAndroid.TOP;
            break;

        default:
            break;
    }
    const showToast = (message: string, newDuration: number = toastDuration) => {
        ToastAndroid.show(message, newDuration);
    };

    const showToastGravity = (message: string, newDuration: number = toastDuration, newGravity: number = toastGravity) => {
        ToastAndroid.showWithGravity(message, newDuration, newGravity);
    };

    const showToastOffset = (
        message: string,
        newDuration: number = toastDuration,
        newGravity: number = toastGravity,
        newXOffset: number = xOffset,
        newYOffset: number = yOffset,
    ) => {
        ToastAndroid.showWithGravityAndOffset(message, newDuration, newGravity, newXOffset, newYOffset);
    };

    return {
        showToast,
        showToastGravity,
        showToastOffset,
    };
};
