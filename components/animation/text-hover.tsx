import { TtextHoverProps } from "@/types";

export default function TextHover({ title1, title2 }: TtextHoverProps) {
  return (
    <div className="group cursor-pointer overflow-hidden transition-all duration-200 ease-in-out">
      <div className="relative transition-all duration-500 ease-in-out">
        <div>
          <h1 className="absolute left-0 translate-y-[0%] transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]">
            <div className="translate-y-[0%] transition-all duration-500 ease-in-out group-hover:translate-y-[-100%]">
              {title1}
            </div>
          </h1>
          <h1 className="relative transition-all duration-500 ease-in-out">
            <div className="translate-y-[100%] transition-all duration-500 ease-in-out group-hover:translate-y-[0%]">
              {title2}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
