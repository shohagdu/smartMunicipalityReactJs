export default function TextareaInput({...rest}){
    return (
        <>
        <div className="col-sm-4 col-md-4 col-12">
            <textarea className="form-control" {...rest} ></textarea>
        </div>
        </>
    );
}