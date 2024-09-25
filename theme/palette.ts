import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export const PALETTE = {
    primary: '#4F46E5',
    secondary: '#A78BFA',
    error: '#F87171',
    success: '#34D399',
    warning: '#F97316',
    info: '#60A5FA',
    disabled: '#D1D5DB',
    grey: '#9CA3AF',
    darkGrey: '#4B5563',
};

export const OPACITY = 0.5;

export const PALETTE_OPACITY = {
    primary: `rgba(79, 70, 229, ${OPACITY})`,
    secondary: `rgba(167, 139, 250, ${OPACITY})`,
    error: `rgba(248, 113, 113, ${OPACITY})`,
    success: `rgba(52, 211, 153, ${OPACITY})`,
    warning: `rgba(249, 115, 22, ${OPACITY})`,
    info: `rgba(96, 165, 250, ${OPACITY})`,
    disabled: `rgba(209, 213, 219, ${OPACITY})`,
    grey: `rgba(156, 173, 175 ${OPACITY})`,
    darkGrey: `rgba(5, 85, 99, ${OPACITY})`,
};

export const darkTheme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: PALETTE.primary,
        background: '#1F2937',
        card: '#374151',
        text: '#E5E7EB',
        border: '#4B5563',
    },
};

export const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PALETTE.primary,
        background: '#F8FAFC',
        card: '#E5E7EB',
        text: '#1F2937',
        border: '#9CA3AF',
    },
};
