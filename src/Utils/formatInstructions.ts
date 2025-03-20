export const formatInstructions = (instructions: string): string[] => {
    return instructions
        .split('.')
        .filter(step => step.trim().length > 0)
        .map(step => `📍 ${step.trim()}.`);
};