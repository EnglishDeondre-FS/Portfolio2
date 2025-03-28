import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface UserSettings {
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  textAlign: string;
}

const MarkdownRenderer = ({ content }: { content: string }) => {
  const [userSettings, setUserSettings] = useState<UserSettings>({
    fontSize: 16,
    fontFamily: "sans-serif",
    lineHeight: 1.5,
    textAlign: "left",
  });

  useEffect(() => {
    const storedSettings = localStorage.getItem("userSettings");
    if (storedSettings) {
      setUserSettings(JSON.parse(storedSettings));
    }
  }, []);

  const baseFontSize = userSettings.fontSize || 16; // Default font size
  const fontSizeScale = (scale: number) => `${baseFontSize * scale}px`;

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none mx-auto"
      style={{
        fontFamily: userSettings.fontFamily,
        lineHeight: userSettings.lineHeight,
        textAlign: userSettings.textAlign,
        fontSize: `${baseFontSize}px`, // set a base font size in px here
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              className="font-bold mt-6"
              style={{ fontSize: fontSizeScale(2.5) }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              className="font-semibold mt-5"
              style={{ fontSize: fontSizeScale(2) }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className="font-medium mt-4"
              style={{ fontSize: fontSizeScale(1.75) }}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed mt-2">{children}</p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-400 hover:underline">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
