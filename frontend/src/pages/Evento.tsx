import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

type ShowClassOrClassOptionsAvailable = {
  accessClassesAndBackButton: boolean;
};

export function Evento({ accessClassesAndBackButton }: ShowClassOrClassOptionsAvailable) {
  const slugPattern: string = "aula-01-criando-o-projeto-e-realizando-o-setup-inicial";

  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-1 flex-col min-h-screen mobile:w-full">
      <div className="flex flex-1 mobile:w-full">

        <div className="flex-1 mobile:hidden">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <Video lessonSlug={slugPattern} />
          )}
        </div>
        
        {accessClassesAndBackButton ? (
          <div className="flex mobile:flex-1 mobile:justify-center">
            <Sidebar />
          </div>
        ) : (
          <div className="pattern:hidden w-full">
            {slug ? (
              <Video lessonSlug={slug} />
            ) : (
              <Video lessonSlug={slugPattern} />
            )}
          </div>
        )}

        <div className="mobile:hidden flex">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};