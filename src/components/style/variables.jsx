export const setVariables = ({guttersWidth, fontSize}) => {
    const Gutter = {
        min: `1px`,
        xxs: `${guttersWidth / 6}px`,
        xs: `${guttersWidth / 3}px`,
        sm: `${guttersWidth * 2}px`,
        md: `${guttersWidth * 1}px`,
        lg: `${guttersWidth * 1.5}px`,
        xl: `${guttersWidth * 2}px`,
        xxl: `${guttersWidth * 2.5}px`,
        max: `${guttersWidth * 3}px`,
    };

    const FontSize = {
        min: `${fontSize / 3}px`,
        xxs: `${fontSize / 2}px`,
        xs: `${fontSize / 1.5}px`,
        sm: `${fontSize}px`,
        md: `${fontSize * 1.5}px`,
        lg: `${fontSize * 2}px`,
        xl: `${fontSize * 3}px`,
        xxl: `${fontSize * 4}px`,
        max: `${fontSize * 5}px`
    };
    return {Gutter: Gutter, FontSize: FontSize};
};

