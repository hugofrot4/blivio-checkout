"use client"
import Image from "next/image";
import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { GoChevronDown, GoLock } from "react-icons/go";
import { ImArrowRight } from "react-icons/im";
import { IoIosInformationCircleOutline, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { IoMdWarning } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImQrcode } from "react-icons/im";
import CreditCardInput from 'react-credit-card-input';
import Link from "next/link";

export default function StepTwo(){
    const [submenu, setSubmenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cupom, setCupom] = useState("");
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [installments, setInstallments] = useState(1);
    const [installmentsItem, setInstallmentsItem] = useState(1);
    const [openCard, setOpenCard] = useState(true);
    const [openPix, setOpenPix] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleMenuClick = () => {
        setSubmenu(!submenu)
    }

    const handleOpenCard = () => {
        setOpenCard(true);
        setOpenPix(false)
    }

    const handleOpenPix = () => {
        setOpenPix(true);
        setOpenCard(false)
    }

    return(
        <main className="flex min-h-screen flex-col items-center lg:p-5 bg-default-bg">
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
                            <div className="relative">
                                <div className="flex gap-1 items-center text-grey-cart-text bg-grey-cart py-[9px] px-[10px] rounded cursor-pointer hover:bg-grey-cart-hover select-none" onClick={handleMenuClick}>
                                    <LuShoppingCart size={20}/>
                                    <IoMdArrowDropdown size={16}/>
                                </div>
                                {submenu &&
                                    <ul className="absolute top-10 right-0 lg:left-0 lg:right-[unset] w-max bg-white py-2 min-w-[272px] rounded border border-border text-xs">
                                        <li className="py-1 px-2 flex items-center justify-between">
                                        <p>Bone Broth (3 caixas)</p>
                                        <p className="font-bold">R$ 522,90</p>
                                        </li>
                                        <li className="flex justify-end py-1 px-2 pt-3 border-t border-border mt-2 text-description">
                                        <p>Total: <b>R$ 522,90</b></p>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <button onClick={openModal} className="underline text-sm text-grey-text lg:w-max">aplicar cupom</button>
                        {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[512px] relative text-description px-10">
                            <button onClick={closeModal} className="absolute top-1 right-1 text-radio-icon hover:text-red-error duration-200">
                                <IoMdClose size={30} />
                            </button>
                            <div className="flex justify-center text-primary-lighter mb-8">
                                <IoIosInformationCircleOutline size={98}/>
                            </div>
                            <h2 className="text-3xl font-bold text-center mb-7">Cupom</h2>
                            <p className="text-center mb-4">Digite o código do seu cupom de desconto:</p>
                            <input
                                type="text"
                                value={cupom}
                                onChange={(e) => setCupom(e.target.value)}
                                className="w-full py-2 px-4 border border-gray-300 rounded mb-10 text-2xl outline-8 outline-primary-lighter"
                                placeholder="Código de Cupom"
                            />
                            <div className="flex justify-center gap-3">
                            <button 
                                onClick={closeModal} 
                                className="bg-primary text-white px-4 py-2 rounded"
                            >
                                Aplicar
                            </button>
                            <button 
                                onClick={closeModal} 
                                className="bg-grey-cart-text text-white px-4 py-2 rounded mr-2"
                            >
                                Cancelar
                            </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                <div className="bg-grey-card border-[1px] border-grey-border">
                    <form action="">
                        <div className="py-6 px-10 overflow-hidden">
                            <div className="flex items-center justify-between cursor-pointer" onClick={handleOpenCard}>
                                <h2 className="text-primary flex items-center gap-2 text-xl relative"><span className="block w-20 h-[1px] bg-primary absolute top-[50%] left-[-80px]"></span><span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-primary"><FiCreditCard size={16} />
                                </span> Pagar com cartão</h2>
                                <GoChevronDown size={30} className={openCard && "hidden"}/>
                            </div>
                            <div className={`hidden mt-10 ${openCard && '!block'}`}>
                                <p className="text-sm text-description mb-4">Para finalizar sua compra, digite abaixo os dados do seu cartão de crédito.</p>
                                <div className="w-full grid gap-2 justify-center mb-6">
                                    <div className="lg:w-max">
                                        <CreditCardInput
                                            cardNumberInputProps={{
                                                value: cardNumber,
                                                onChange: (e) => setCardNumber(e.target.value),
                                            }}
                                            cardExpiryInputProps={{
                                                value: expiry,
                                                onChange: (e) => setExpiry(e.target.value),
                                            }}
                                            cardCVCInputProps={{
                                                value: cvc,
                                                onChange: (e) => setCvc(e.target.value),
                                            }}
                                            fieldClassName="input"
                                            containerClassName="w-full"
                                            inputClassName="gap-4 rounded border-2 border-grey-cart focus-within:border-primary w-full h-12 outline-none appearance-none text-xs"
                                            customTextLabels={{
                                                invalidCardNumber: 'Número inválido',
                                                expiryError: {
                                                invalidExpiryDate: 'Data inválida',
                                                monthOutOfRange: 'O mês deve estar entre 1 e 12',
                                                yearOutOfRange: 'O ano não pode ser no passado',
                                                dateOutOfRange: 'A data não deve ser no passado'
                                                },
                                                invalidCvc: 'Código de segurança inválio',
                                                cardNumberPlaceholder: 'Número do cartão',
                                                expiryPlaceholder: 'MM/AA',
                                                cvcPlaceholder: 'CVV',
                                            }}
                                        />
                                    </div>
                                    <div className="relative mb-4 bg-white">
                                        <select
                                            value={installments}
                                            onChange={(e) => setInstallments(e.target.value)}
                                            className="group bg-transparent py-2 px-4 flex items-center gap-4 rounded border-2 border-grey-cart focus-within:border-primary w-full h-12 outline-none appearance-none text-sm z-10 relative"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                                <option key={i} value={i}>
                                                {i}x de R$ 63,40 *
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute top-[14px] right-3 z-0">
                                            <GoChevronDown size={22}/>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center text-2xl text-primary mb-8">Complete seu pedido</h2>
                                <div className="p-3 border-2 border-dashed border-primary bg-white">
                                    <div className="flex items-start gap-2 p-6 bg-grey-lighter rounded-xl relative">
                                        <ImArrowRight size={40} color="#DC3545" className="absolute left-[-8px] top-[18px]"/>
                                        <input type="checkbox" name="add-item" id="add-item" className="w-[22px] h-[22px] mt-[2px] ml-3"/>
                                        <label htmlFor="add-item" className="text-lg text-description"><b className="text-green-yes text-xl">SIM!</b> <b>Quero incluir</b> no meu pedido mais 2 <b>Bone Broth e ganhar 1 GRÁTIS!</b></label>
                                    </div>
                                    <p className="py-5 text-center text-base text-description">Acelere seus resultados com o uso prolongado do Bone Broth!</p>
                                    <div className="grid gap-2 lg:grid-cols-[242px_1fr] mt-4">
                                        <div className="bg-grey-light rounded-xl py-3 w-full grid gap-5">
                                            <Image
                                                src="/product-big.png"
                                                width={241}
                                                height={183}
                                                alt="produto"
                                            />
                                            <div className="text-center text-description text-sm">
                                                <p className="font-bold">Compre 2 e Leve 3</p>
                                                <p className="line-through text-grey-muted">De: R$ 552,90</p>
                                                <p className="font-bold">Por R$ 348,60</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <ul className="text-description text-sm mt-4 grid gap-2 h-max">
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Economize R$ 204,30</b> marcando essa opção</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]">Sem custo adicional do frete</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Última chance</b> - você não vai ver essa oferta novamente</p>
                                                </li>
                                            </ul>
                                            <div className="mt-2 flex items-center py-3 px-2 bg-grey-light rounded border border-grey-cart text-sm font-bold text-description">
                                                <p>Selecione o número de parcelas</p>
                                                <div className="relative">
                                                    <select name="installments-item" id="installments-item" value={installmentsItem} onChange={(e) => setInstallmentsItem(e.target.value)} className="ml-1 outline-none text-primary appearance-none bg-transparent pr-3 relative z-10">
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                                            <option key={i} value={i}>
                                                            {i}x de R$ 63,40 *
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute top-0 right-0 z-0">
                                                        <GoChevronDown size={22}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-6 grid lg:flex items-center gap-1">
                                                <div className="flex items-center">
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                </div>
                                                <p className="text-sm text-description "><b>9 em cada 10 clientes</b> escolhem esta opção</p>
                                            </div>
                                            <div className="flex items-start text-red-error font-medium">
                                                <IoMdWarning size={17}/>
                                                <p className="max-w-[80%] ml-1 text-sm">Restam apenas 97 kits promocionais disponíveis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="mx-auto w-[108px] h-[2px] my-8 bg-border block"></span>
                                <div className="p-3 border-2 border-dashed border-primary bg-white">
                                    <div className="flex items-start gap-2 p-6 bg-grey-lighter rounded-xl relative">
                                        <ImArrowRight size={40} color="#DC3545" className="absolute left-[-8px] top-[18px]"/>
                                        <input type="checkbox" name="add-item" id="add-item" className="w-[22px] h-[22px] mt-[2px] ml-3"/>
                                        <label htmlFor="add-item" className="text-lg text-description"><b className="text-green-yes text-xl">SIM!</b> <b>Quero incluir</b> no meu pedido mais 2 <b>Bone Broth e ganhar 1 GRÁTIS!</b></label>
                                    </div>
                                    <p className="py-5 text-center text-base text-description">Acelere seus resultados com o uso prolongado do Bone Broth!</p>
                                    <div className="grid gap-2 lg:grid-cols-[242px_1fr] mt-4">
                                        <div className="bg-grey-light rounded-xl py-3 w-full grid gap-5">
                                            <Image
                                                src="/product-big.png"
                                                width={241}
                                                height={183}
                                                alt="produto"
                                            />
                                            <div className="text-center text-description text-sm">
                                                <p className="font-bold">Compre 2 e Leve 3</p>
                                                <p className="line-through text-grey-muted">De: R$ 552,90</p>
                                                <p className="font-bold">Por R$ 348,60</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <ul className="text-description text-sm mt-4 grid gap-2 h-max">
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Economize R$ 204,30</b> marcando essa opção</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]">Sem custo adicional do frete</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Última chance</b> - você não vai ver essa oferta novamente</p>
                                                </li>
                                            </ul>
                                            <div className="mt-2 flex items-center py-3 px-2 bg-grey-light rounded border border-grey-cart text-sm font-bold text-description">
                                                <p>Selecione o número de parcelas</p>
                                                <div className="relative">
                                                    <select name="installments-item" id="installments-item" value={installmentsItem} onChange={(e) => setInstallmentsItem(e.target.value)} className="ml-1 outline-none text-primary appearance-none bg-transparent pr-3 relative z-10">
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                                            <option key={i} value={i}>
                                                            {i}x de R$ 63,40 *
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute top-0 right-0 z-0">
                                                        <GoChevronDown size={22}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-6 grid lg:flex items-center gap-1">
                                                <div className="flex items-center">
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                </div>
                                                <p className="text-sm text-description "><b>9 em cada 10 clientes</b> escolhem esta opção</p>
                                            </div>
                                            <div className="flex items-start text-red-error font-medium">
                                                <IoMdWarning size={17}/>
                                                <p className="max-w-[80%] ml-1 text-sm">Restam apenas 97 kits promocionais disponíveis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-1 mt-6 text-description mb-5">
                                    <p className="text-sm mb-1">Detalhes da Compra:</p>
                                    <div className="py-4 px-2 rounded border border-border flex justify-between text-sm">
                                        <p><b>Bone Broth (3 caixas) + Frete</b></p>
                                        <p>12x de R$ 63,45</p>
                                    </div>
                                </div>
                                <Link href="/step-two" className="flex items-center justify-center py-4 px-5 rounded bg-primary-light text-center text-white text-base uppercase border border-primary-border gap-1 font-semibold hover:bg-primary duration-200">
                                    <GoLock size={15}/>
                                    <p>finalizar compra</p>
                                </Link>
                            </div>
                        </div>
                        <div className="py-6 px-10 overflow-hidden border-t border-border-light">
                            <div className="flex items-center justify-between cursor-pointer" onClick={handleOpenPix}>
                                <h2 className="text-primary flex items-center gap-2 text-xl relative"><span className="block w-20 h-[1px] bg-primary absolute top-[50%] left-[-80px]"></span><span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-primary"><ImQrcode size={16}/>
                                </span> Pagar com Pix <span className="py-2 px-3 flex items-center text-description gap-1 text-xs uppercase ml-1 bg-description-bg rounded"><AiOutlineInfoCircle size={12} /> Aprovação imediata</span></h2>
                                <GoChevronDown size={30} className={openPix && "hidden"}/>
                            </div>
                            <div className={`hidden mt-10 ${openPix && '!block'}`}>
                                <div className="text-description mb-10">
                                    <div className="flex gap-1 items-center font-bold text-sm">
                                        <AiOutlineInfoCircle size={16} />
                                        <p className="">Informações sobre o pagamento via pix:</p>
                                    </div>
                                    <ul className="text-sm list-disc ml-7 mt-2">
                                        <li>Valor à vista R$ 565,85 . Não pode ser parcelado;</li>
                                        <li>Aprovação imediata! Sua compra aprovada em segundos;</li>
                                        <li>Pagamento seguro. Pague com segurança no aplicativo do seu banco!</li>
                                    </ul>
                                </div>
                                <h2 className="text-center text-2xl text-primary mb-8">Complete seu pedido</h2>
                                <div className="p-3 border-2 border-dashed border-primary bg-white">
                                    <div className="flex items-start gap-2 p-6 bg-grey-lighter rounded-xl relative">
                                        <ImArrowRight size={40} color="#DC3545" className="absolute left-[-8px] top-[18px]"/>
                                        <input type="checkbox" name="add-item" id="add-item" className="w-[22px] h-[22px] mt-[2px] ml-3"/>
                                        <label htmlFor="add-item" className="text-lg text-description"><b className="text-green-yes text-xl">SIM!</b> <b>Quero incluir</b> no meu pedido mais 2 <b>Bone Broth e ganhar 1 GRÁTIS!</b></label>
                                    </div>
                                    <p className="py-5 text-center text-base text-description">Acelere seus resultados com o uso prolongado do Bone Broth!</p>
                                    <div className="grid gap-2 lg:grid-cols-[242px_1fr] mt-4">
                                        <div className="bg-grey-light rounded-xl py-3 w-full grid gap-5">
                                            <Image
                                                src="/product-big.png"
                                                width={241}
                                                height={183}
                                                alt="produto"
                                            />
                                            <div className="text-center text-description text-sm">
                                                <p className="font-bold">Compre 2 e Leve 3</p>
                                                <p className="line-through text-grey-muted">De: R$ 552,90</p>
                                                <p className="font-bold">Por R$ 348,60</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <ul className="text-description text-sm mt-4 grid gap-2 h-max">
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Economize R$ 204,30</b> marcando essa opção</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]">Sem custo adicional do frete</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Última chance</b> - você não vai ver essa oferta novamente</p>
                                                </li>
                                            </ul>
                                            <div className="mt-2 flex items-center py-3 px-2 bg-grey-light rounded border border-grey-cart text-sm font-bold text-description">
                                                <p>Selecione o número de parcelas</p>
                                                <div className="relative">
                                                    <select name="installments-item" id="installments-item" value={installmentsItem} onChange={(e) => setInstallmentsItem(e.target.value)} className="ml-1 outline-none text-primary appearance-none bg-transparent pr-3 relative z-10">
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                                            <option key={i} value={i}>
                                                            {i}x de R$ 63,40 *
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute top-0 right-0 z-0">
                                                        <GoChevronDown size={22}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-6 grid lg:flex items-center gap-1">
                                                <div className="flex items-center">
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                </div>
                                                <p className="text-sm text-description "><b>9 em cada 10 clientes</b> escolhem esta opção</p>
                                            </div>
                                            <div className="flex items-start text-red-error font-medium">
                                                <IoMdWarning size={17}/>
                                                <p className="max-w-[80%] ml-1 text-sm">Restam apenas 97 kits promocionais disponíveis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="mx-auto w-[108px] h-[2px] my-8 bg-border block"></span>
                                <div className="p-3 border-2 border-dashed border-primary bg-white">
                                    <div className="flex items-start gap-2 p-6 bg-grey-lighter rounded-xl relative">
                                        <ImArrowRight size={40} color="#DC3545" className="absolute left-[-8px] top-[18px]"/>
                                        <input type="checkbox" name="add-item" id="add-item" className="w-[22px] h-[22px] mt-[2px] ml-3"/>
                                        <label htmlFor="add-item" className="text-lg text-description"><b className="text-green-yes text-xl">SIM!</b> <b>Quero incluir</b> no meu pedido mais 2 <b>Bone Broth e ganhar 1 GRÁTIS!</b></label>
                                    </div>
                                    <p className="py-5 text-center text-base text-description">Acelere seus resultados com o uso prolongado do Bone Broth!</p>
                                    <div className="grid gap-2 lg:grid-cols-[242px_1fr] mt-4">
                                        <div className="bg-grey-light rounded-xl py-3 w-full grid gap-5">
                                            <Image
                                                src="/product-big.png"
                                                width={241}
                                                height={183}
                                                alt="produto"
                                            />
                                            <div className="text-center text-description text-sm">
                                                <p className="font-bold">Compre 2 e Leve 3</p>
                                                <p className="line-through text-grey-muted">De: R$ 552,90</p>
                                                <p className="font-bold">Por R$ 348,60</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <ul className="text-description text-sm mt-4 grid gap-2 h-max">
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Economize R$ 204,30</b> marcando essa opção</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]">Sem custo adicional do frete</p>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="w-5 h-5 rounded-[50%] bg-green-check-bg flex items-center justify-center text-green-yes">
                                                        <FaCheck size={10} />
                                                    </span>
                                                    <p className="max-w-[80%]"><b>Última chance</b> - você não vai ver essa oferta novamente</p>
                                                </li>
                                            </ul>
                                            <div className="mt-2 flex items-center py-3 px-2 bg-grey-light rounded border border-grey-cart text-sm font-bold text-description">
                                                <p>Selecione o número de parcelas</p>
                                                <div className="relative">
                                                    <select name="installments-item" id="installments-item" value={installmentsItem} onChange={(e) => setInstallmentsItem(e.target.value)} className="ml-1 outline-none text-primary appearance-none bg-transparent pr-3 relative z-10">
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                                            <option key={i} value={i}>
                                                            {i}x de R$ 63,40 *
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute top-0 right-0 z-0">
                                                        <GoChevronDown size={22}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-6 grid lg:flex items-center gap-1">
                                                <div className="flex items-center">
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                    <Image
                                                        src="/person.jpg"
                                                        width={25}
                                                        height={25}
                                                        alt="person"
                                                        className="rounded-[50%] ml-[-5px]"
                                                    />
                                                </div>
                                                <p className="text-sm text-description "><b>9 em cada 10 clientes</b> escolhem esta opção</p>
                                            </div>
                                            <div className="flex items-start text-red-error font-medium">
                                                <IoMdWarning size={17}/>
                                                <p className="max-w-[80%] ml-1 text-sm">Restam apenas 97 kits promocionais disponíveis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-1 mt-6 text-description mb-5">
                                    <p className="text-sm mb-1">Detalhes da Compra:</p>
                                    <div className="py-4 px-2 rounded border border-border flex justify-between text-sm">
                                        <p><b>Bone Broth (3 caixas) + Frete</b></p>
                                        <p>12x de R$ 63,45</p>
                                    </div>
                                </div>
                                <Link href="/pix-payment" className="flex items-center justify-center py-4 px-5 rounded bg-primary-light text-center text-white text-base uppercase border border-primary-border gap-1 font-semibold hover:bg-primary duration-200">
                                    <FaCheck size={15} />
                                    <p>Pagar com pix</p>
                                </Link>
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