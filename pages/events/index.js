import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/api-util";

const AllEventsPage = (props) => {
	const router = useRouter();
	const events = props.events;

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};
	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events,
		},
		revalidate: 10,
	};
}
