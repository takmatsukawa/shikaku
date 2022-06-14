

export default function SingleChoice({children}: {children: any}) {
    return (
        <select className="select select-bordered select-sm mx-2">
            <option>-</option>
            {children}
        </select>
    )
}