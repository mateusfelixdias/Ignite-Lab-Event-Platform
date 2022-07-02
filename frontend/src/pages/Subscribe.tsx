import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../generated";
import { useNavigate } from "react-router-dom";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  
  async function handleSubscribe (event: FormEvent){
    event.preventDefault();

    if(!name || !email){
      window.alert('Os dados estão inválidos, tente novemente.');
    };

    await createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate('/event');
  };


  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center mobile:text-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto mobile:flex-col mobile:w-[100%]">
        <div className="max-w-[640px] mobile:max-w-[360px]">
          <div className="mobile:mt-2 mobile:flex mobile:flex-col mobile:items-center">
            <Logo />
          </div>

          <h1 className="mt-6 text-[2.5rem] leading-tight mobile:text-[2.0rem]">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-6">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-6 mobile:w-full mobile:rounded-none">
            <strong className="text-2xl mb-6 block mobile:text-xl">
                Inscreva-se gratuitamente
            </strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text"  
                    placeholder="Digite seu nome completo"
                    onChange={event => setName(event.target.value)}
                />
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text"  
                    placeholder="Digite seu e-mail"
                    onChange={event => setEmail(event.target.value)}
                />

                <button
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    disabled={loading}
                    type="submit"
                >
                    Garantir minha vaga
                </button>
            </form>
        </div>
      </div>

      <img
        src="./src/images/code-mockup.png"
        className="mt-10"
        alt=""
      />
    </div>
  );
};