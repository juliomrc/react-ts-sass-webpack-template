interface ISvg {
    className?: string;
    width?: number;
    height?: number;
}

declare module "*.svg" {
    const Component: React.FC<ISvg>;
    export default Component;
}
