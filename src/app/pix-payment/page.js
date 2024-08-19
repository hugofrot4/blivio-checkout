"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiLoader4Line } from "react-icons/ri";
import { GoLock } from "react-icons/go";
import { ImQrcode } from "react-icons/im";
import { PiWarningCircleLight } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function PixPayment(){
    const [time, setTime] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [buttonText, setButtonText] = useState("Copiar");
    const [buttonActive, setButtonActive] = useState(false);

    useEffect(() => {
        if (time > 0) {
            const timerId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        
            return () => clearInterval(timerId);
        } else {
            setShowModal(true);
        }
    }, [time]);
    
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
            2,
            "0"
        )}:${String(secs).padStart(2, "0")}`;
    };

    const handleCopy = () => {
        const textToCopy = document.getElementById("text-to-copy").innerText;
    
        navigator.clipboard.writeText(textToCopy).then(() => {
          setButtonText("Copiado!");
          setButtonActive(true);
    
          setTimeout(() => {
            setButtonText("Copiar");
            setButtonActive(false);
          }, 2000);
        });
    };

    const handleNewPix = () => {
        window.location.reload()
    }

    return(
        <main className="flex min-h-screen flex-col items-center lg:p-5 bg-default-bg">
            {showModal &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[512px] relative text-description px-10">
                        <div className="flex justify-center mb-8">
                            <PiWarningCircleLight size={98} color="#f8bb86" />
                        </div>
                        <h2 className="text-3xl font-bold text-center mb-7">Tempo expirado!</h2>
                        <p className="text-center mb-4">O tempo para pagamento acabou, clique para gerar um novo Pix</p>
                        <div className="flex justify-center gap-3">
                            <button 
                                onClick={handleNewPix} 
                                className="bg-primary text-white px-4 py-2 rounded"
                            >
                                Gerar um novo Pix
                            </button>
                        </div>
                    </div>
                </div>
            }
            {showModalSuccess && 
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[512px] relative text-description px-10">
                        <div className="flex justify-center mb-8 text-green-yes">
                            <IoMdCheckmarkCircleOutline size={98}/>
                        </div>
                        <h2 className="text-3xl font-bold text-center mb-7">Pagamento realizado!</h2>
                        <p className="text-center mb-4">Pagamento realizado com sucesso.</p>
                    </div>
                </div>
            }
            <div className="bg-white rounded shadow border-[1px] border-border w-full max-w-[798px]">
                <div className="py-6 px-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <Image
                        src="/product.png"
                        width={197}
                        height={50}
                        alt="Produto"
                    />
                    <div className="lg:flex lg:flex-col lg:items-end lg:gap-2">
                        <div className="flex gap-1 items-center">
                            <div className="flex gap-1 items-center uppercase text-sm bg-green-button text-green-text rounded py-[9px] px-[14px]">
                                <GoLock size={15}/>
                                <p>Compra segura</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-grey-card border-[1px] border-grey-border">
                    <form action="">
                        <div className="py-6 px-10 overflow-hidden border-t border-border-light">
                            <div className="flex items-center justify-between">
                                <h2 className="text-primary flex items-center gap-2 text-xl relative"><span className="block w-20 h-[1px] bg-primary absolute top-[50%] left-[-80px]"></span><span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-primary"><ImQrcode size={16}/>
                                </span> Pagar com Pix</h2>
                            </div>
                            <div className="mt-10">
                                <div className="text-description mb-10">
                                    <div className="flex gap-1 items-center text-sm mb-5">
                                        <p className=""><b>Seu codigo pix expira em:</b> {formatTime(time)}</p>
                                    </div>
                                    <div className="text-sm mt-2">
                                        <p>Instruções:</p>
                                        <p>1 - Acesse o aplicativo do seu banco;</p>
                                        <p>2 - Escolha pagar via PIX;</p>
                                        <p>3 - Copie o código Pix Copia e Cola ou escaneie o Qr Code</p>
                                    </div>
                                </div>
                                <h2 className="text-xl text-primary mb-4">Pague aqui sua compra principal:</h2>
                                <div className="grid gap-1 mt-2 text-description mb-5">
                                    <div className="p-[22px] bg-white rounded-[20px] border border-border grid lg:grid-cols-[1fr_120px] lg:gap-4 lg:items-center text-sm">
                                        <div className="">
                                            <div className="grid gap-3 lg:flex lg:items-center">
                                                <Image
                                                    src="/product.png"
                                                    width={193}
                                                    height={50}
                                                    alt="produto"
                                                    className="border border-border"
                                                />
                                                <div className="text-description gap-1 grid">
                                                    <p><b>Bone Broth (3 caixas)</b></p>
                                                    <p>Valor: R$ 565.85</p>
                                                </div>
                                            </div>
                                            <p className="text-[10px] hidden lg:block">Copie o código “copia e cola” ou escaneie o QR code.</p>
                                            <div className="mt-3 border border-border rounded flex items-center w-max">
                                                <div className="max-w-[330px] overflow-hidden py-[6px] px-3">
                                                    <p className="w-max" id="text-to-copy">00020101021226820014br.gov.bcb.pix2560pix.stone.com.br/pix/v2/22798852-71bf-48b0-9565-d826ab1febf85204000053039865406565.855802BR5925BLIVO PRODUTOS NATURAIS L6014RIO DE JANEIRO6229052599149b161af9e978ca7510d47630462E8</p>
                                                </div>
                                                <button className={`${buttonActive ? "text-green-yes" : "text-primary"} py-[6px] px-3 text-base font-semibold`} onClick={handleCopy}>{buttonText}</button>
                                            </div>
                                            <div className={`flex cursor-pointer items-center justify-center py-4 px-5 rounded text-center text-white text-base border  gap-1 font-semibold  duration-200 w-max mt-4 ${buttonActive ? "bg-green-yes border-green-yes" : "bg-primary-light border-primary-border hover:bg-primary"}`} onClick={handleCopy}>
                                                <p>Copiar código “Copia e cola”</p>
                                            </div>
                                            <div className="text-primary flex items-center gap-1 mt-2">
                                                <RiLoader4Line className="animate-spin" size={15} />
                                                <p> Identificando seu pagamento...Expira em: {formatTime(time)}</p>
                                            </div>
                                        </div>
                                        <div className="hidde lg:block max-w-[120px] text-[10px] leading-none">
                                            <Image
                                                src="/qrcode.png"
                                                width={120}
                                                height={120}
                                                alt="qrcode"
                                            />
                                            <p>Escaneie o QR code com o seu app de pagamento</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center justify-between w-full max-w-[798px] px-5 mt-5">
                <Image
                    src="/ssl.png"
                    width={65}
                    height={44}
                    alt="ssl"
                />
                <div className="">
                    <p className="text-sm text-grey-text font-light">Tecnologia</p>
                    <Image
                        src="/logo-dark.png"
                        width={71}
                        height={20}
                        alt="logo"
                    />
                </div>
            </div>
        </main>
    )
}