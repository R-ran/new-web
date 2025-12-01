import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import React, { ComponentPropsWithoutRef } from 'react'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: (props: any) => (
            <h1 className="mb-6 text-4xl font-bold text-foreground" {...props} />
          ),
          h2: (props: any) => (
            <h2 className="mb-4 mt-8 text-3xl font-semibold text-foreground" {...props} />
          ),
          h3: (props: any) => (
            <h3 className="mb-3 mt-6 text-2xl font-semibold text-foreground" {...props} />
          ),
          h4: (props: any) => (
            <h4 className="mb-3 mt-5 text-xl font-semibold text-foreground" {...props} />
          ),
          h5: (props: any) => (
            <h5 className="mb-2 mt-4 text-lg font-semibold text-foreground" {...props} />
          ),
          h6: (props: any) => (
            <h6 className="mb-2 mt-4 text-base font-semibold text-foreground" {...props} />
          ),

          // Paragraphs
          p: ({ children, ...props }: any) => {
            // Check if paragraph only contains italic text (image caption)
            let isCaption = false
            
            // Use a more reliable method: check the actual rendered content
            try {
              // Get the AST node from props
              const astNode = props.node
              if (astNode && typeof astNode === 'object' && 'children' in astNode) {
                const nodeChildren = astNode.children as any[]
                // Check if paragraph has exactly one child that is an emphasis node
                if (Array.isArray(nodeChildren) && nodeChildren.length === 1) {
                  if (nodeChildren[0]?.type === 'emphasis') {
                    isCaption = true
                  }
                }
              }
              
              // Fallback: check React children
              if (!isCaption && children) {
                // Convert children to array for easier checking
                const childrenArray = Array.isArray(children) ? children : [children]
                const validChildren = childrenArray.filter(
                  (child) => child !== null && child !== undefined && child !== ''
                )
                
                // Check if there's only one child and it's an em element
                if (validChildren.length === 1) {
                  const child = validChildren[0]
                  if (React.isValidElement(child)) {
                    const childType = child.type
                    // Check if it's an em tag (can be string 'em' or a component)
                    if (
                      childType === 'em' ||
                      (typeof childType === 'string' && childType === 'em') ||
                      (typeof childType === 'function' && (childType as any).name === 'em')
                    ) {
                      isCaption = true
                    }
                  }
                }
              }
            } catch (e) {
              // If detection fails, don't apply caption style
              console.debug('Caption detection error:', e)
            }
            
            // Add data attribute for CSS targeting
            const paragraphProps = isCaption 
              ? { ...props, 'data-is-caption': 'true' }
              : props
            
            return (
              <p 
                className={`mb-4 leading-relaxed text-slate-700 ${isCaption ? 'text-center text-sm text-slate-500 markdown-caption' : ''}`} 
                {...paragraphProps}
              >
                {children}
              </p>
            )
          },

          // Lists
          ul: (props: any) => (
            <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-700" {...props} />
          ),
          ol: (props: any) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-700" {...props} />
          ),
          li: (props: any) => (
            <li className="leading-relaxed" {...props} />
          ),

          // Text formatting
          strong: (props: any) => (
            <strong className="font-semibold text-foreground" {...props} />
          ),
          em: (props: any) => (
            <em className="italic text-slate-700 markdown-caption-text" data-caption="true" {...props} />
          ),

          // Links
          a: (props: any) => (
            <a className="text-primary hover:underline" {...props} />
          ),

          // Blockquotes
          blockquote: (props: any) => (
            <blockquote className="my-4 border-l-4 border-primary pl-4 italic text-slate-600" {...props} />
          ),

          // Code
          code: ({ className, ...props }: any) => {
            const isInline = !className
            return isInline ? (
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800" {...props} />
            ) : (
              <code className={className} {...props} />
            )
          },
          pre: (props: any) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-slate-100 p-4" {...props} />
          ),

          // Tables
          table: (props: any) => (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse border border-slate-300" {...props} />
            </div>
          ),
          thead: (props: any) => (
            <thead className="bg-slate-100" {...props} />
          ),
          tbody: (props: any) => (
            <tbody {...props} />
          ),
          tr: (props: any) => (
            <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors" {...props} />
          ),
          th: (props: any) => (
            <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900" {...props} />
          ),
          td: (props: any) => (
            <td className="border border-slate-300 px-4 py-3 text-slate-700" {...props} />
          ),

          // Horizontal rule
          hr: (props: any) => (
            <hr className="my-8 border-t border-slate-300" {...props} />
          ),

          // Images
          img: ({ src, alt, ...props }: any) => {
            // Check if it's a local public image (starts with /)
            if (src && typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')) {
              return (
                <div className="my-6 flex justify-center">
                  <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={alt || ''}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                </div>
              )
            }
            // For external images, use regular img tag
            return (
              <img 
                src={src} 
                alt={alt} 
                className="my-4 rounded-lg max-w-full h-auto mx-auto block" 
                {...props} 
              />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

