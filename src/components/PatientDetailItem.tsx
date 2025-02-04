type PatientDetailItemProps = {
    label: string;
    data: string;
}

export default function PatientDetailItem({ label, data }: PatientDetailItemProps) {
    return (
        <p className="font-bold mg-3 text-gray-700 uppercase">
        {label}: {' '}
        <span className="font-normal normal-case">{data}</span>
    </p>
    )
}
