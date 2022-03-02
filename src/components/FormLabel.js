export default function FormLabel({children,  ...rest}){
    return (
        <label  className="col-sm-2 col-md-2 col-12  textRight" { ...rest}>
            {children}
        </label>
    );
}