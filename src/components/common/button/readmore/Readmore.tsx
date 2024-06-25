import { GoArrowRight } from "react-icons/go"

const Readmore = () => {
  return (
    <div className="mt-6">
    <button className="paragraph-normal flex items-center gap-2">
      Read More <GoArrowRight />
    </button>
    <hr className="mt-2 w-[5%]" />
  </div>
  )
}

export default Readmore