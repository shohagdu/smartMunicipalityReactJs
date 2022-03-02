export default function SelectOption({children, ...rest}){
    return (
        <>
            <div className="col-sm-4 col-md-4 col-12">
                <select  className="form-control" {...rest}>
					{children}
				</select>
            </div>
        </>
    );
}