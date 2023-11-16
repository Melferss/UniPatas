'use client';
import Capa from "@/assets/capa.png";
import Image from "next/image";
import Logo from "@/assets/logo-unipatas.png";
import Facebook from "@/assets/facebook.png";
import Google from "@/assets/google.png";
import Nome from "@/assets/logo-roxa-texto.png";
import Link from "next/link";

export default function Login() {

  return (
    <>
      <div className=" bg-[#a110a9] w-screen h-screen flex items-center justify-center p-16 align-center ">

        <div className=" w-96 h-full p-18 rounded-l-lg">
          {/* conteiner do mascote*/}

          <div className="flex flex-col items-center pt-8 bg-white rounded-l-lg ">

            {/* conteiner da frase de boas vindas*/}
            <p className="bg-[#ffc501] text-[#a110a9] px-4 py-4 flex justify-center w-64 font-bold text-3xl rounded-full ">
              Bem vindos a
            </p>
            <Image
              src={Nome}
              width={306}
              height={100}
              alt="text-unipatas"
              class="pt-2"
            />
            <Image
              src={Capa}
              width={337}
              height={100}
              alt="Cachorro amarelo de porte médio"
            />
          </div>
        </div>
        <div className="h-full w-96 bg-white rounded-r-lg flex flex-col p-8 ">
          
          {/*conteiner da logo */}
          <div className="flex justify-center pt-4">
            <Image src={Logo} width={120} height={50} alt="logo-unipatas" />
          </div>
          <form className="p-6 pr-6 flex jutify-center flex-col font-bold">
            
            {/*formulario do login */}
            <label> Login </label>
            <input type="email" className="bg-gray-200 h-8 rounded-md p-1" />
            <br />
            <label> Senha </label>
            <input type="password" className="bg-gray-200 h-8 rounded-md p-1" />
          </form>

          <div className="flex justify-around "> {/* conteiner dos botões*/}
            <button className="bg-[#a110a9] h-6 w-16 px-2 rounded-md text-white font-bold text-xs">
              Entrar
            </button>

            <Link href="/cadastro" className="bg-gray-200 h-6 w-18 rounded-md px-2 pt-1 font-bold text-xs">
              Cadastre-se
            </Link>

          </div>
          <p className="pt-4 flex justify-center items-center text-xs font-bold">
            Esqueceu a senha?
          </p>
          <br />

          <div className="flex justify-center text-xs"> {/* conteiner google-facebook*/}

            <Image src={Google} width={20} height={50} alt="logo-google" />
            <button>Entrar com o Google</button>
          </div>
          <br />
          <div className="flex justify-center">
            <Image
              src={Facebook}
              width={50}
              height={10}
              alt="logo-facebook"
              className=" rounded-l-lg"
            />
            <button className="h-8 w-36 rounded-r-lg bg-[#2b78e4] text-white text-xs">
              Entrar com o Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}