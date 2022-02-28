export default function FormLabel({children,  ...rest}){
    return (
        <label  className="col-2  textRight" { ...rest}>
            {children}
        </label>
    );
}