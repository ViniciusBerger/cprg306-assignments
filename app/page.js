import Link from "next/link"
function page()
{
  return (
    <div>
      <header>CPRG 306: Web Development 2 - Assignments</header>
      <p><Link href="week-2"> go to week 2</Link></p>
      <p><Link href="week-3"> go to week 3</Link></p>
      <p><Link href="week-4"> go to week 4</Link></p>
      <p><Link href="week-5"> go to week 5</Link></p>
      <p><Link href="week-6"> go to week 6</Link></p>
      <p><Link href="week-7"> go to week 7</Link></p>
    </div>
  )
}

export default page;