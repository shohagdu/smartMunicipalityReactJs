export default function Form({ children, className, ...rest }){
    return (
        <>
            <form className="user-form" {...rest}>

                {children}
                
            </form>
        </>
    );
}