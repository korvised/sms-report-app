"use client"

import { AiOutlineInbox } from "react-icons/ai"

const EmptyState = () => {
  return (
    <div className="mt-16 flex w-full flex-col items-center gap-y-5 sm:mt-24 lg:mt-28">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 sm:h-40 sm:w-40">
        <AiOutlineInbox className="h-16 w-16 text-gray-400" />
      </div>

      <h2 className="mt-4 text-base text-gray-500">
        ບໍ່ມີຂໍ້ມູນການສົ່ງຂໍ້ຄວາມ
      </h2>
    </div>
  )
}

export default EmptyState
