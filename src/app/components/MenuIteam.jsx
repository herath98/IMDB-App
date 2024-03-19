import Link from "next/link";


export default function MenuIteam({title, address, Icon}) {
  return (
    <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className="text-2xl sm:hidden"/>
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  )
}
