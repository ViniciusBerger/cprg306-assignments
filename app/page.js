import Link from "next/link"
function page()
{
  return (
    <div>
      <header>CPRG 306: Web Development 2 - Assignments</header>
      <p><Link href="week-2"> go to week 2 </Link></p>
      <p><Link href="week-3"> go to week 3</Link></p>
    </div>
  )
}

export default page;