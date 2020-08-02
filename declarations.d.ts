declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'markdown-it-katex';
declare module 'markdown-it-block-embed';
