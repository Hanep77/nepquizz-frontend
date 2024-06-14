export default function SortBy({ title, name, list }) {
    return (
        <select name={name} id={name} className="bg-slate-700 px-2 py-1 outline-none rounded border border-slate-500">
            <option>{title}</option>
            {list?.map(value => <option value={value.id}>{value.title}</option>)}
        </select>
    )
}