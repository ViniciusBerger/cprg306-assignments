import Link from "next/link"
function StudentInfo(){
    return (
        <div>
            <p>
                Student name: Marcos Vinicius Berger Gilles
            </p>
            <Link href="https://github.com/ViniciusBerger">
                Github repository
            </Link>
        </div>
    )
}

export default StudentInfo;