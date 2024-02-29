type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="p-2 bg-sky-800">
      <div className="max-w-4xl m-auto min-h-6 flex justify-between text-white">
        <div>© MedExpress</div>
        <div className="flex gap-4">
          <button className="hover:underline">Terms </button>
          <button className="hover:underline">Regulation</button>
        </div>
      </div>
    </div>
  );
}
