import { Button, ChanelOption, Textarea, Textbox } from "@/components"
import { ChannelType, ISmsBody } from "@/types"
import { FormEvent } from "react"
import { smsChannels } from "@/constants"

interface Props {
  isLoading: boolean
  form: ISmsBody
  setForm: React.Dispatch<React.SetStateAction<ISmsBody>>
  onClose: () => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const SmsFormComponent: React.FC<Props> = ({
  isLoading,
  form,
  setForm,
  onClose,
  onSubmit,
}) => {
  const handleChanel = (channel: ChannelType) => {
    setForm({ ...form, channel })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-y-4 divide-y">
      <div className="relative grid gap-y-3 px-4 py-6 sm:px-6 lg:px-8">
        <ChanelOption
          channels={smsChannels}
          channel={form.channel}
          setChanel={handleChanel}
        />

        <Textbox
          id="msisdn"
          name="msisdn"
          label="ເບີໂທລະສັບ"
          placeholder="020xxxxxxxx"
          minLength={7}
          value={form.msisdn}
          onChange={handleInputChange}
          className="max-w-56"
          required
        />

        <Textarea
          id="content"
          name="content"
          label="ເນື້ອໃນ"
          placeholder="ລະຫັດຜ່ານຂອງທ່ານແມ່ນ: ..."
          rows={3}
          value={form.content}
          onChange={handleTextareaChange}
          required
        />
      </div>

      <div className="flex justify-end gap-x-3 px-4 pt-4 sm:px-6 lg:px-8">
        <Button
          variant="text"
          onClick={onClose}
          value="ຍົກເລີກ"
          className="w-32"
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="solid"
          value={isLoading ? "ກຳລັງສົ່ງ..." : "ສົ່ງຂໍ້ຄວາມ"}
          className="w-32"
          disabled={isLoading}
        />
      </div>
    </form>
  )
}

export default SmsFormComponent
