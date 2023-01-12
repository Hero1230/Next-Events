import Link from "next/link";
import styles from "./Button.module.css";

const Button = (props) => {
	if (props.link) {
		return (
			<Link href={props.link}>
				<p className={styles.btn}>{props.children}</p>
			</Link>
		);
	}

	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
