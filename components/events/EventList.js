import EventItem from "./EventItem";
import styles from "./EventList.module.css";

const EventList = (props) => {
	const { items } = props;

	return (
		<ul className={styles.list}>
			{items.map((event) => (
				<EventItem
					key={event.id}
					title={event.title}
					image={event.image}
					date={event.date}
					location={event.location}
					id={event.id}
				/>
			))}
		</ul>
	);
};

export default EventList;
