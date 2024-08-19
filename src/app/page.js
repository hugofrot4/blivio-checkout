"use client"
import Image from "next/image";
import { GoLock } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdArrowDropdown, IoMdInformationCircleOutline, IoMdClose, IoIosInformationCircleOutline } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import Input from "@/components/Input";
import React, { useState } from "react";
import InputRadio from "@/components/InputRadio";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [shipment, setShipment] = useState("");
  const [foundAddress, setFounAddress] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cupom, setCupom] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchAddress = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
  
      if (!data.erro) {
        setAddress(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
        setFounAddress(true);
      } else {
        console.log('CEP não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
    }
  };

  const handleCepChange = (newCep) => {
    setCep(newCep);
  
    if (newCep.length >= 8) {
      fetchAddress(newCep.replace(/\D/g, ''));
    }
  };

  const handleMenuClick = () => {
    setSubmenu(!submenu)
  }

  return (
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
            <div className="pt-6 px-10 overflow-hidden">
              <h2 className="text-primary flex items-center gap-2 text-xl mb-2 relative"><span className="block w-20 h-[1px] bg-primary absolute top-[50%] left-[-80px]"></span><span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-primary">1</span> Dados Pessoais</h2>
              <p className="text-sm text-description mb-4">Digite seus dados pessoais abaixo para iniciar a sua compra.</p>
              <div className="grid gap-4 lg:items-start">
                <Input
                  name="email"
                  type="text"
                  label="seu e-mail"
                  icon={<MdMailOutline size={24}/>}
                  value={email}
                  setValue={setEmail}
                  validationError="Messagem de erro"
                />
                <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
                  <Input
                    name="name"
                    type="text"
                    label="seu nome completo"
                    value={name}
                    setValue={setName}
                    validationError="Messagem de erro"
                  />
                  <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
                    <Input
                      name="phone"
                      type="text"
                      label="celular (DDD)"
                      value={phone}
                      setValue={setPhone}
                      validationError="Messagem de erro"
                      mask="(99) 99999-9999"
                    />
                    <div className="">
                      <Input
                        name="cpf"
                        type="text"
                        label="cpf"
                        value={cpf}
                        setValue={setCpf}
                        validationError="Messagem de erro"
                        mask="999.999.999-99"
                      />
                      <div className="relative text-grey-text">
                        <IoMdInformationCircleOutline size={10} className="absolute top-1 left-0"/>
                        <p className="pl-3 text-[10px]">CPF utilizado para nota fiscal. Não será compartilhado.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 px-10 overflow-hidden">
              <h2 className="text-primary flex items-center gap-2 text-xl mb-2 relative"><span className="block w-20 h-[1px] bg-primary absolute top-[50%] left-[-80px]"></span><span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-primary">2</span> Endereço de Entrega</h2>
              <p className="text-sm text-description mb-4">Digite o CEP para onde vamos enviar o seu pedido abaixo.</p>
              <div className="grid gap-4">
                <div className="grid gap-4 lg:items-start lg:grid-cols-2">
                  <Input
                    name="cep"
                    type="text"
                    label="CEP do Endereço"
                    icon={<FiHome size={24}/>}
                    value={cep}
                    setValue={handleCepChange}
                    validationError="Messagem de erro"
                    mask="99999-999"
                  />
                </div>
                <div className={`hidden gap-4 lg:items-start lg:grid-cols-4 duration-500 ${foundAddress && '!grid'}`}>
                  <div className="col-start-1 col-end-4">
                    <Input
                      name="address"
                      type="text"
                      label="Endereço"
                      icon={<FiHome size={24}/>}
                      value={address}
                      setValue={setAddress}
                      validationError="Messagem de erro"
                    />
                  </div>
                  <Input
                    name="address-number"
                    type="text"
                    label="Número"
                    value={addressNumber}
                    setValue={setAddressNumber}
                    validationError="Messagem de erro"
                  />
                </div>
                <div className={`hidden gap-4 lg:items-start lg:grid-cols-4 duration-500 ${foundAddress && '!grid'}`}>
                  <Input
                    name="complement"
                    type="text"
                    label="Complemento"
                    value={complement}
                    setValue={setComplement}
                    validationError="Messagem de erro"
                  />
                  <Input
                    name="district"
                    type="text"
                    label="bairro"
                    value={district}
                    setValue={setDistrict}
                    validationError="Messagem de erro"
                  />
                  <Input
                    name="city"
                    type="text"
                    label="cidade"
                    value={city}
                    setValue={setCity}
                    validationError="Messagem de erro"
                  />
                  <Input
                    name="state"
                    type="text"
                    label="estado"
                    value={state}
                    setValue={setState}
                    validationError="Messagem de erro"
                  />
                </div>
                <div className={`hidden duration-500 ${foundAddress && '!block'}`}>
                  <p className="text-sm text-description mb-4">Opções de Entrega:</p>
                  <div className="grid gap-2">
                    <InputRadio
                      changer={shipment}
                      setChanger={setShipment}
                      group="shipment"
                      value="type1"
                      title="Econômico"
                      description="14 dias úteis a partir da postagem"
                      price="R$ 33,05"
                    />
                    <InputRadio
                      changer={shipment}
                      setChanger={setShipment}
                      group="shipment"
                      value="type2"
                      title="Expresso"
                      description="10 dias úteis a partir da postagem"
                      price="R$ 42,95"
                      tag
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-3 py-6 px-10 lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center text-green-text text-sm gap-1 font-light">
                <GoLock size={15}/>
                <p>Você está em uma página segura.</p>
              </div>
              <Link href="/step-two" className="flex items-center justify-center py-4 px-5 rounded bg-primary-light text-center text-white text-base uppercase border border-primary-border gap-1 font-semibold hover:bg-primary duration-200">
                  <GoLock size={15}/>
                  <p>continuar</p>
              </Link>
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
  );
}
