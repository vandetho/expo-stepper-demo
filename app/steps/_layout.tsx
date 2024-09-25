import React from 'react';
import { Stack, usePathname } from 'expo-router';
import { View } from 'react-native';
import { Step, Stepper } from '@/components/Stepper';

const routes: Array<Step> = [
    { name: 'step-1', path: '/steps', label: 'Basics' },
    { name: 'step-2', path: '/steps/step-2', label: 'Subjects' },
    { name: 'step-3', path: '/new-tutor/contact-infos', label: 'Profile' },
];

export default function Layout() {
    const pathname = usePathname();

    return (
        <View style={{ flex: 1 }}>
            <Stepper steps={routes} currentStep={pathname} />
            <Stack screenOptions={{ headerShown: false }}>
                {routes.map(({ name }) => (
                    <Stack.Screen key={`stack_${name}`} name={name} />
                ))}
            </Stack>
        </View>
    );
}
