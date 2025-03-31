import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold mt-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-medium">{children}</h3>,
          p: ({ children }) => <p className="text-lg leading-relaxed">{children}</p>,
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
