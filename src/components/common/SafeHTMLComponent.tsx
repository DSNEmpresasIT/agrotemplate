"use client";

import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import clsx from "clsx";

interface SafeHTMLProps {
  html: string;
  className?: string;
}

const SafeHTMLComponent: React.FC<SafeHTMLProps> = ({ html, className }) => {
  const [cleanHTML, setCleanHTML] = useState("");

  useEffect(() => {
    let cleanedHtml = html?.replace(/&nbsp;/g, " ");
    setCleanHTML(
      DOMPurify.sanitize(cleanedHtml, {
        ALLOWED_TAGS: [
          "b", "i", "em", "strong", "p", "span", "ul", "ol", "li", "br", "a",
          "h1", "h2", "h3", "h4", "h5", "h6"
        ],
        ALLOWED_ATTR: ["href", "target", "rel"]
      }));
  }, [html]);
  return (
    <div className={clsx(className, "text-left leading-normal")} dangerouslySetInnerHTML={{ __html: cleanHTML }} />
  );
};

export default SafeHTMLComponent;
