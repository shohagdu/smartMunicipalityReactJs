export default function TextareaInput({...rest}){
    return (
        <>
        <div class="col-4">
            <textarea class="form-control" {...rest} ></textarea>
        </div>
        </>
    );
}