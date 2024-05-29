const ButtonGradient = () => {
  return (
    <svg className='block' width={0} height={0}>
      <defs>
        <linearGradient id='btn-left' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#AC6AFF' />
          <stop offset='100%' stopColor='#9b5fe6' />
        </linearGradient>
        <linearGradient id='btn-top' x1='100%' x2='0%' y1='50%' y2='50%'>
          <stop offset='0%' stopColor='#AC6AFF' />
          <stop offset='100%' stopColor='#784ab3' />
        </linearGradient>
        <linearGradient id='btn-bottom' x1='100%' x2='0%' y1='50%' y2='50%'>
          <stop offset='0%' stopColor='#AC6AFF' />
          <stop offset='100%' stopColor='#674099' />
        </linearGradient>
        <linearGradient
          id='btn-right'
          x1='14.635%'
          x2='14.635%'
          y1='0%'
          y2='100%'
        >
          <stop offset='0%' stopColor='#AC6AFF' />
          <stop offset='100%' stopColor='#452a66' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ButtonGradient
