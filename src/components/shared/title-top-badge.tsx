export default function TitleTopBadge({ title }: { title: string }) {
  return (
    <span className="py-1.5 px-5 bg-gradient-to-r from-primary to-purple-600  text-white rounded-full text-sm font-semibold inline-block mb-4 shadow-md">
      {title}
    </span>
  );
}
