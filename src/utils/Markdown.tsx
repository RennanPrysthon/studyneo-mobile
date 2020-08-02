import React from 'react';

import HTML from "react-native-render-html";
import Markdown, { MarkdownIt } from 'react-native-markdown-display';

import blockEmbedPlugin from 'markdown-it-katex';

interface Props {
  style?: {
    text: string;
  }
}

const markDownInstance = MarkdownIt({ typographer: true }).use(blockEmbedPlugin);

const MarkdownText: React.FC<Props> = ({ children, style = { text: '#000' } }) => {
  return React.useMemo(() => (
    <Markdown
      style={{
        body: { color: style.text, },
      }}
      markdownit={markDownInstance}
      rules={{
        math_inline: (node, children, parent, styles) => {
          const html = (markDownInstance.render(node.content));
          return (
            <HTML
              html={html}
            />
          )
        },
        code_inline: (node, children, parent, styles) => {
          const html = (markDownInstance.render(node.content));
          return (
            <HTML
              html={html}
            />
          )
        }
      }}
    >
      {children}
    </Markdown>
  ), [style.text]);
}

export default MarkdownText;
