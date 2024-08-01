import React, { useState } from "react";
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "reactstrap";

function Example(props) {
	const [open, setOpen] = useState("1");
	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};

	return (
		<div>
			<Accordion open={open} toggle={toggle}>
				<AccordionItem>
					<AccordionHeader targetId="1">Yeni sayı</AccordionHeader>
					<AccordionBody accordionId="1"></AccordionBody>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default Example;
