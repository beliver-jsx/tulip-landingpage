export const LgMenuBtn: React.FC<{
    click: () => void,
    text: string,
    active?: true
}> = ({
    click,
    text,
    active
}) => {
        return (
            <button className="text-left" onClick={click}>{text}</button>
        )
    }