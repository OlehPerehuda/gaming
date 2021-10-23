export const UserAuthValue: React.FC<{
    value: string,
    placeHolder: string,
    type: string,
    handleChange: (value: string) => void,
}> = ({
    value,
    placeHolder,
    type,
    handleChange,
}) => {
        return (
            <input
                value={value}
                placeholder={placeHolder}
                type={type}
                onChange={(e: any) => handleChange(e.target.value)}
            />
        );
    };
