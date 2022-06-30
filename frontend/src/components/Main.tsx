import { Evento } from "../pages/Evento";
import { ComeBack } from "./ComeBack";
import { Frame } from "./Frame";
import { Logo } from "./Logo";
import { useState } from "react";

export function Main() {
  const [accessClassesAndBackButton, setAccessClassesAndBackButton] = useState<boolean>(false);

  function handleaccessClassesAndBackButton() {
    accessClassesAndBackButton
      ? setAccessClassesAndBackButton(false)
      : setAccessClassesAndBackButton(true);
  };

  return (
    <>
      <header className="py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 mobile:justify-between mobile:p-2 mobile:min-w-[280px] mobile:w-[100%]">
        <Logo />
        <div className="hidden mobile:flex">
          <strong className="p-1">Aulas</strong>{" "}
          <button type="button" onClick={handleaccessClassesAndBackButton}>
            {accessClassesAndBackButton ? <ComeBack /> : <Frame />}
          </button>
        </div>
      </header>

      <main>
        <Evento accessClassesAndBackButton={accessClassesAndBackButton} />
      </main>
    </>
  );
};