import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOffClick = (
	ref: React.MutableRefObject<any>,
	offClick: () => void
) => {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				offClick();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
};

export default useOffClick;
