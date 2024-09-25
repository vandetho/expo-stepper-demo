import { darkTheme, lightTheme } from '@/theme/palette';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
    light: {
        ...lightTheme.colors,
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
    },
    dark: {
        ...darkTheme.colors,
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};
