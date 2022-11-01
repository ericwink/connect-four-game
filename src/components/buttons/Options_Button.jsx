export default function Options_Button({ options, operation }) {
    return (
        <>
            <button onClick={() => operation(true)} className="btn btn-lg heading-m options">{options}
            </button>
        </>
    )
}