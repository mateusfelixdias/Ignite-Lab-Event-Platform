import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../generated";

type VideoProps = {
  lessonSlug: string;
};

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Cerregando...</p>
      </div>
    );
  };
  

  return (
    <div className="flex-1 mobile:flex-col mobile:items-center">
      <div className="bg-black border border-gray-500 flex justify-center">
        <div className="aspect-video h-full w-full">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex gap-16 mobile:flex-col">
          <div className="flex-1 mobile:flex-none">
            <h1 className="text-2xl font-bold mobile:text-center mobile:text-xl">{data.lesson.title}</h1>

            <p className="mt-4 text-gray-200 leading-relaxed mobile:whitespace-normal mobile:text-center">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="imagem do user github."
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 mobile:items-center">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors mobile:w-[312px]"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors mobile:w-[312px]"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2 mobile:flex mobile:flex-col mobile:items-center">
        <a
            className="bg-gray-700 rounded overflow-hidden gap-6 flex items-stretch hover:bg-gray-600 transition-colors"
            href=""
          >
            <div className="bg-green-700 h-full-6 p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            className="bg-gray-700 rounded overflow-hidden gap-6 flex items-stretch hover:bg-gray-600 transition-colors"
            href=""
          >
            <div className="bg-green-700 h-full-6 p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};