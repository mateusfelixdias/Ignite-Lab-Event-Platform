import { useGetLessonsQuery } from "../generated";
import { Lesson } from "./Lesson";


export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="bg-gray-700 p-6 border-l border-gray-700 min-w-[250px] mobile:w-full mobile:p-2">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8 min-w-[250px]">
        {data?.lessons.map((lesson:any) => {
          return (
            <Lesson
              key={lesson.id}
              availableAt={new Date(lesson.availableAt)}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};