export default function SortBy({ title, name, list }) {

    const handleSort = (e) => {
        window.location.search = `${name}=${e.target.value}`
    }

    return (
        <select name={name} id={name} onChange={handleSort} className="bg-slate-700 px-2 py-1 outline-none rounded border border-slate-500">
            <option>{title}</option>
            {list?.map(value => <option key={value.slug} value={value.slug}>{value.title}</option>)}
        </select>
    )
}
