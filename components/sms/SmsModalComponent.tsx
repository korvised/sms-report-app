"use client"

import { FormEvent, Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ISmsBody } from "@/types"
import { SmsFormComponent } from "@/components"
import { RiMailAddLine } from "react-icons/ri"

interface Props {
  show: boolean
  isLoading: boolean
  form: ISmsBody
  setForm: React.Dispatch<React.SetStateAction<ISmsBody>>
  onClose: () => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const SmsModalComponent: React.FC<Props> = ({
  show,
  isLoading,
  form,
  setForm,
  onClose,
  onSubmit,
}) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={isLoading ? () => null : onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="
                  relative
                  transform
                  divide-y
                  overflow-hidden
                  rounded-lg
                  bg-white
                  pb-4
                  text-left
                  shadow-xl
                  transition-all
                  sm:my-8
                  sm:w-full
                  sm:max-w-lg
                "
              >
                <div className="bg-green-600 pb-4 pt-5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <RiMailAddLine
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-white"
                    >
                      ຟອມການສົ່ງຂໍ້ຄວາມ
                    </Dialog.Title>
                  </div>
                </div>

                <SmsFormComponent
                  isLoading={isLoading}
                  form={form}
                  setForm={setForm}
                  onClose={onClose}
                  onSubmit={onSubmit}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SmsModalComponent
