export default function SortBy({ title, list }) {
    return (
        <select name="" id="" className="bg-slate-700 px-2 py-1 outline-none rounded border border-slate-500">
            <option>{title}</option>
            {list.map(value => <option value={value}>{value}</option>)}
        </select>
    )
}