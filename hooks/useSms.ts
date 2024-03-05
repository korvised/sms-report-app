import { FormEvent, useState } from "react"
import { useMutation } from "react-query"
import { toast } from "react-toastify"
import { ISmsBody } from "@/types"
import { sendSms } from "@/services"
import { initialSmsForm } from "@/constants"

export const useSms = () => {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState<ISmsBody>(initialSmsForm)

  const mutation = useMutation({
    mutationFn: sendSms,
    onSuccess: _ => {
      toast.success("ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ")
      setForm(initialSmsForm)
    },
    onError: _ => {
      toast.error("ສົ່ງຂໍ້ຄວາມບໍ່ສຳເລັດ")
    },
  })

  const handleShowModal = () => {
    setShow(true)
  }
  const handleCloseModal = () => {
    setShow(false)
    setForm(initialSmsForm)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await mutation.mutateAsync({ ...form })
  }

  return {
    mutation,
    show,
    form,
    setForm,
    handleShowModal,
    handleCloseModal,
    handleSubmit,
  }
}
