import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from './SwitchTheme';

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				className="lg:ms-5 lg:me-2 ms-1 me-1"
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}
