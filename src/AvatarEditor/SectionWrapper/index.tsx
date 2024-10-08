import './index.scss'

export default function sectionWrapper(props: {
  className?: string,
  children: JSX.Element,
  switchConfig: () => void,
  tip: string,
  tabSkip?: boolean
}): JSX.Element {
  const { className = "", children, switchConfig, tip, tabSkip } = props
  return (
    <div className='flex flex-col justify-center items-center text-black font-bold gap-1'>
      <div>{tip}</div>
      <button
        tabIndex={tabSkip ? -1 : 0}
        className={"SectionWrapper " + className}      
        onClick={switchConfig}>
        <div className="relative w-full h-full">
          <div className="childrenWrapper group absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>      
      </button>
    </div>
  )
}