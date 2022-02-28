export default function LabelRow({children, ...rest}){
    return (
        <label {...rest} > {children} </label>
    );
}