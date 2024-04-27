import { staticSiteList } from "@/datas/learn-more/static-site";

export default function RoadMap() {
  return (
    <div className="container">
      {staticSiteList.map((item, index) => (
        <div
          key={item.id}
          className={`container flex justify-between items-center gap-8 my-6 xs:my-8 sm:my-10 md:my-12 sm:gap-10 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } `}
        >
          <div className="mx-auto scale-150 midFlex">
            <h2 className="scale-150 text-primary ">{item.icon}</h2>
          </div>

          <div className="w-3/4 h-fit border-2 border-ring p-2 xs:p-3 sm:p-4 flex flex-col gap-y-4 rounded-lg bg-card text-card-foreground customShadow">
            <h2 className="text-clip">{item.label}</h2>
            <div className="ml-3 xs:ml-4 sm:ml-5 md:ml-6 lg:ml-7 ">
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
