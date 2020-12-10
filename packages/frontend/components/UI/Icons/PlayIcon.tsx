const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = '',
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={`${className} inline-block w-4 h-4 pb-1 mr-3 fill-current`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.886 477.886"
      {...rest}
    >
      <path d="M476.091 231.332a17.068 17.068 0 00-7.662-7.662L24.695 1.804C16.264-2.41 6.013 1.01 1.8 9.442A17.068 17.068 0 000 17.079v443.733c-.004 9.426 7.633 17.07 17.059 17.075a17.068 17.068 0 007.637-1.8L468.429 254.22c8.436-4.205 11.866-14.452 7.662-22.888z" />
    </svg>
  )
}

export default PlayIcon
