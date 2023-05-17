export default function Progress({ value }) {
    return (
        <div className='h-2 rounded-lg bg-grey20 relative w-full'>
            <div className={'absolute rounded-lg bg-alert left-0 top-0 bottom-0'} style={{ width: value + '%' }}></div>
        </div>
    )
}