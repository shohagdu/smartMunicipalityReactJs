export default function CheckboxInput({children, ...rest}){
    return (
        <>
        <label className="radio-inline">
            <input type="radio"  {...rest} /><span> &nbsp; {children} &nbsp;</span>
        </label>
          
        </>
    );
}