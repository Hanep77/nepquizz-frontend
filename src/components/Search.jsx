export default function Search() {
    return (
        <form className="my-3 sm:my-5 flex justify-center">
            <input type="text" name="search" placeholder="Search quizz" className="w-full sm:w-96 bg-slate-700 border border-slate-500 focus:border-slate-200 h-8 rounded outline-none px-2" autoComplete="off" />
        </form>
    )
}