import { FC, useRef , useEffect} from "react";
import WritingTextEffect from "../../../hooks/WritingTextEffect";



const Test: FC = () => {
	const txt = 'Lorem ipsum Lorem ipsum'; 



	const data = useRef<HTMLParagraphElement>(null)
	const params = { el:  data , speed: 60, text : txt}
	useEffect(() => {
		WritingTextEffect(params )

 } )
	

	


	return (
<>
<div className="text">
	<p ref={data}></p>
</div>
</>
	);
};

export default Test;
