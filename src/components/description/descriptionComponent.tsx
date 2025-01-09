import DOMPurify from 'dompurify';

interface DescriptionProps {
    description: string;
    className: string;
}
export const DescriptionComponent: React.FC<DescriptionProps> = ({ description, className }) => {
    const cleanHtml = (html: string) => {
        return html.replace(/&nbsp;/g, " ").trim();
    };
    const sanitizedDescription = DOMPurify.sanitize(cleanHtml(description), {
        ALLOWED_TAGS: ["p", "span", "b", "i", "strong", "em", "ul", "li", "ol"],
        ALLOWED_ATTR: ["class", "style"],
        FORBID_ATTR: ["background"],
    });

    return (
        <p className={className} dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
    );
};