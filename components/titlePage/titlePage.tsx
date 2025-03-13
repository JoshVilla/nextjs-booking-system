"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const TitlePage = ({
  title,
  hasBack,
  clickBack,
}: {
  title: string;
  hasBack?: boolean;
  clickBack?: () => void;
}) => {
  const router = useRouter();
  return (
    <div className="text-2xl font-bold flex gap-2 items-center">
      {hasBack && (
        <ArrowLeft
          size={20}
          className="cursor-pointer hover:scale-110 transition-all duration-300"
          onClick={() => {
            router.back();
            setTimeout(() => {
              clickBack?.();
            }, 100);
          }}
        />
      )}
      {title}
    </div>
  );
};

export default TitlePage;
