export default function SelectOption({children, ...rest}){
    return (
        <>
            <div className="col-4">
                <select  class="form-control" {...rest}>
					{children}
				</select>
            </div>
        </>
    );
}