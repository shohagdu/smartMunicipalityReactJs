export default function ButtonTag({children, ...rest}){
    return (
        <button {...rest} >
			{children}
		</button>
    );
}