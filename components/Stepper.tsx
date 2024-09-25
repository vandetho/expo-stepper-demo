import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CIRCLE_BORDER_RADIUS, ICON_SIZE, PADDING } from '@/constants/Size';
import { Href } from 'expo-router';
import { PALETTE } from '@/theme/palette';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BUTTON_HEIGHT, BUTTON_WIDTH } from '@/constants/Height';

export type Step = {
    name: string;
    path: Href<string>;
    label: string;
};

interface StepperProps {
    steps: Array<Step>;
    currentStep: string;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    const currentStepIndex = React.useMemo(
        () => steps.findIndex((step) => step.path === currentStep),
        [currentStep, steps],
    );

    const renderItem = ({ name, label }: Step, index: number) => {
        const type = index < currentStepIndex ? 'success' : index === currentStepIndex ? 'primary' : 'secondary';
        const iconName = index < currentStepIndex ? 'check' : index + 1;
        const color = type === 'success' ? PALETTE.success : type === 'primary' ? PALETTE.primary : PALETTE.secondary;
        return (
            <React.Fragment key={`step_${name}`}>
                {index > 0 && (
                    <View
                        style={[
                            styles.line,
                            {
                                backgroundColor: color,
                            },
                        ]}
                    />
                )}
                <View style={styles.step}>
                    <View
                        style={[
                            styles.iconContainer,
                            {
                                borderColor: color,
                            },
                        ]}
                    >
                        <FontAwesome6 name={iconName} color={color} size={ICON_SIZE} />
                    </View>
                    <Text style={{ color }}>{label}</Text>
                </View>
            </React.Fragment>
        );
    };

    return <View style={styles.stepContainer}>{steps.map((step, index) => renderItem(step, index))}</View>;
};

const styles = StyleSheet.create({
    stepContainer: {
        paddingTop: PADDING,
        paddingHorizontal: PADDING,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    step: {
        flex: 3,
        alignItems: 'center',
        gap: 10,
    },
    line: {
        flex: 1,
        height: 5,
        marginTop: 20,
        borderRadius: 5,
    },
    iconContainer: {
        backgroundColor: 'transparent',
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: CIRCLE_BORDER_RADIUS,
    },
});
